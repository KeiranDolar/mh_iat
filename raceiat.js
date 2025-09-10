define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat10.js'], function(APIConstructor, iatExtension){
    let API = new APIConstructor();
    let global = API.getGlobal();

    return iatExtension({
        category1 : {
            name : 'Mentally_Ill', //Will appear in the data.
            title : {
                media : {word : 'Mentally_Ill'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {image: 'mh1.jpg'},
                {image: 'mh2.jpg'},
                {image: 'mh3.jpg'},
                {image: 'mh4.jpg'},
                {image: 'mh5.jpg'},                 
                {image: 'mh6.jpg'}     
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },    
        category2 : {
            name : 'Mentally_Well', //Will appear in the data.
            title : {
                media : {word : 'Mentally_Well'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {image: 'mw1c.jpg'},
                {image: 'mw2.jpg'},
                {image: 'mw3.jpg'},
                {image: 'mw4.jpg'},
                {image: 'mw5.jpg'},
                {image: 'mw6.jpg'}
            ],
            //Stimulus css (style)
            stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },
        attribute1 : {
            name : 'Bad words',
            title : {
                media : {word : 'Bad words'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'Secular'},
                {word: 'Skeptic'},
                {word: 'Rebellious'},
                {word: 'Unfaithful'},
                {word: 'Amoral'},
                {word: 'Angry'},
                {word: 'Lost'},
                {word: 'Hopeless'}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        attribute2 : {
            name : 'Good words',
            title : {
                media : {word : 'Good words'},
                css : {color:'#0000FF','font-size':'1.8em'},
                height : 4 //Used to position the "Or" in the combined block.
            },
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'Righteous'},
                {word: 'Disciplined'},
                {word: 'Saved'},
                {word: 'Kind'},
                {word: 'Honest'},
                {word: 'Upstanding'},
                {word: 'Trustworthy'},
                {word: 'Faithful'}
            ],
            //Stimulus css
            stimulusCss : {color:'#0000FF','font-size':'2.3em'}
        },
        base_url : {//Where are your images at?
            image : global.baseURL
        },
        isTouch : global.$isTouch
    });
});
