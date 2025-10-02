define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;

    // Define common answers array
    let fivePointLikert = [
        'Strongly Agree.',
        'Moderately Agree.',
        'Neutral.',
        'Moderately Disagree.',
        'Strongly Disagree.'
    ];

    API.addPagesSet('basicPage',{
        noSubmit:false,
        header: '<b>Questionnaire</b><br>Please answer the following questions honestly.',
        autoFocus:true,
        progressBar:  'Page <%= pagesMeta.number %> out of 3'
    });

    API.addSequence([
        {
            inherit: 'basicPage',
            questions: [
                {
                    inherit: 'basicSelect',
                    name: 'cami1',
                    stem: 'One of the main causes of mental illness is a lack of self discipline and willpower.',
                    answers: fivePointLikert
                },
                {
                    inherit: 'basicSelect',
                    name: 'cami2',
                    stem: 'There is something about people with mental illness that makes it easy to tell them from normal people.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami3',
                    stem: 'As soon as a person shows signs of mental disturbance, they should be hospitalized.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami4',
                    stem: 'Mental illness is like any other.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami5',
                    stem: 'Less emphasis should be placed on protecting the public from people with mental illness.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami6',
                    stem: 'Mental hospitals are an outdated means of treating people with mental illness.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami7',
					stem: 'Virtually anyone can become mentally ill.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami8',
                    stem: 'People with mental illness have for too long been the subject of ridicule.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami9',
                    stem: 'We need to adopt a far more tolerant attitude toward people with mental illness in our society.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami10',
                    stem: 'We have a responsibility to provide the best possible care for people.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami11',
                    stem: 'People with mental illness do not deserve our sympathy.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami12',
                    stem: 'People with mental illness are a burden on society.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami13',
                    stem: 'Increased spending on mental health services are a waste of money.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami14',
                    stem: 'There are sufficient existing services for people with mental illness.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami15',
                    stem: 'People with mental illness should not be given any responsibility.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami16',
                    stem: 'A woman would be foolish to marry a man who has suffered from mental illness even though he seems fully recovered.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami17',
                    stem: 'I would not want to live next door to someone who has been mentally ill.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami18',
                    stem: 'Anyone with a history of mental problems should be excluded from taking public office.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami19',
                    stem: 'No one has the right to exclude people with mental illness from their neighborhood.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami20',
                    stem: 'People with mental illness are far less of a danger than most people suppose.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami21',
                    stem: 'Most women who were once patients in a mental hospital can be trusted as babysitters.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami22',
                    stem: 'The best therapy for many people with mental illness is to be part of a normal community.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami23',
                    stem: 'As far as possible, mental health services should be provided through community based facilities.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami24',
                    stem: 'Residents have nothing to fear from people coming into their neighborhood to obtain mental health services.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami25',
                    stem: 'It is frightening to think of people with mental problems living in residential neighborhoods.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami26',
                    stem: 'Locating mental health facilities in a residential area downgrades the neighborhood.',
                    answers: fivePointLikert
                },
				{
                    inherit: 'basicSelect',
                    name: 'cami27',
                    stem: 'People with mental health problems should have the same rights to a job as anyone else.',
                    answers: fivePointLikert
                }
            ]
        },
        {
    inherit: 'basicPage',
    questions: [
        {
			inherit: 'basicText',
			name: 'age',
			stem: 'How old are you, in years?'
            ]
        },
        {
            inherit: 'basicSelect',
            name: 'gender',
            stem: 'What is your gender?',
            answers: [
                'Male',
                'Female',
                'Non-binary'
            ]
        },
        {
            inherit: 'basicSelect',
            name: 'education',
            stem: 'What is the highest level of education you have completed?',
            answers: [
                'Less than high school',
                'High school diploma or equivalent',
                'Some college',
                'Bachelor’s degree or higher'
            ]
        },
        {
            inherit: 'basicSelect',
            name: 'denomination',
            stem: 'What Christian denomination do you identify with the most?',
            answers: [
                'Employed full-time',
                'Employed part-time',
                'Unemployed',
                'Student',
                'Retired'
            ]
        }
    ]
}

    ]);
  
    return API.script;
});
