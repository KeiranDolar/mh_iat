define(['managerAPI',
		'https://cdn.jsdelivr.net/gh/minnojs/minno-datapipe@1.*/datapipe.min.js'], function(Manager){


	//You can use the commented-out code to get parameters from the URL.
	//const queryString = window.location.search;
    //const urlParams = new URLSearchParams(queryString);
    //const pt = urlParams.get('pt');

	var API    = new Manager();
	//const subid = Date.now().toString(16)+Math.floor(Math.random()*10000).toString(16);
	init_data_pipe(API, 'FYQSkqlIPugK',  {file_type:'csv'});	

    API.setName('mgr');
    API.addSettings('skip',true);

    //Randomly select which of two sets of category labels to use.
    let raceSet = API.shuffle(['a','b'])[0];
    let mentallyIllLabels = [];
    let mentallyHealthyLabels = [];

    if (raceSet == 'a') {
        mentallyIllLabels.push('Mentally Ill');
        mentallyHealthyLabels.push('Mentally Healthy');
    } else {
        mentallyIllLabels.push('Mentally Ill People');
        mentallyHealthyLabels.push('Mentally Healthy People');
    }

    API.addGlobal({
        raceiat:{},
        //YBYB: change when copying back to the correct folder
        baseURL: './images/',
        raceSet:raceSet,
        mentallyIllLabels:mentallyIllLabels,
        mentallyHealthyLabels:mentallyHealthyLabels,
        //Select randomly what attribute words to see. 
        //Based on Axt, Feng, & Bar-Anan (2021).
        posWords : API.shuffle([
            'Loving', 'Faithful', 'Friend', 'Trustworthy',
            'Honest', 'Cheerful', 'Friendship', 'Joyful', 
            'Smiling','Admirable', 'Excellent', 'Glad', 
            'Joyous', 'Spectacular', 'Integrity', 'Delight', 
            'Prayerful', 'Laughing', 'Strong','Delightful', 
            'Smart', 'Glorious', 'Pleasing', 'Beautiful', 
            'Discerning', 'Happy', 'Lovely', 'Terrific', 
            'Spiritually Strong', 'Enjoyable', 'Righteous', 'Upstanding'
        ]), 
        negWords : API.shuffle([
            'Dangerous', 'Grief', 'Poison', 'Sick', 
            'Problematic', 'Inferior', 'Failure', 'Sinful', 
            'Angry', 'Demonic', 'Horrible', 'Embarrassment', 
            'Weak', 'Unpredictable', 'Oppressed', 'Evil', 
            'Burden','Nuisance', 'Disaster', 'Horrific',  
            'Immoral', 'Awful', 'Diseased', 'Possessed', 
            'Manipulative', 'Selfish', 'Unworthy', 'Bothersome', 
            'Useless', 'Faithless', 'Sickening', 'Shameful'
        ])
    });

    API.addTasksSet({
        instructions: [{
            type: 'message',
            buttonText: 'Continue'
        }],

        intro: [{
            inherit: 'instructions',
            name: 'intro',
            templateUrl: 'intro.jst',
            title: 'Intro',
            header: 'Welcome'
        }],

        raceiat_instructions: [{
            inherit: 'instructions',
            name: 'raceiat_instructions',
            templateUrl: 'raceiat_instructions.jst',
            title: 'IAT Instructions',
            header: 'Implicit Association Test'
        }],

		raceiat: [{
            type: 'time',
            name: 'raceiat',
            scriptUrl: 'raceiat.js'
		}],
		
        explicits: [{
            type: 'quest',
            name: 'questions',
            scriptUrl: 'questions_dg.js'
        }],

        lastpage: [{
            type: 'message',
            name: 'lastpage',
            templateUrl: 'lastpage.jst',
            title: 'End',
            //Uncomment the following if you want to end the study here.
            //last:true, 
            header: 'You have completed the study'
        }], 
        
        //Use if you want to redirect the participants elsewhere at the end of the study
        redirect:
        [{ 
			//Replace with any URL you need to put at the end of your study, or just remove this task from the sequence below
            type:'redirect', name:'redirecting', url: 'https://www.google.com/search' 
        }],
		
		//This task waits until the data are sent to the server.
        uploading: uploading_task({header: 'just a moment', body:'Please wait, sending data... '})
    });

    API.addSequence([
    { type: 'isTouch' }, 
    { type: 'post', path: ['$isTouch', 'raceSet', 'mentallyIllLabels', 'mentallyHealthyLabels'] },
    { inherit: 'intro'},                 // Instructions intro
    { inherit: 'raceiat_instructions'},  // IAT specific instructions
    { inherit: 'raceiat'},               // The Implicit Association Test
    { inherit: 'questions_dg'},             // Questions (questions_dg.js) LAST
    { inherit: 'uploading'},
    { inherit: 'lastpage'},
    { inherit: 'redirect'}
]);
        {inherit: 'lastpage'},
        {inherit: 'redirect'}
    ]);

    return API.script;
});
