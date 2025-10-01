define(['questAPI'], function(Quest){
	var API = new Quest();


	// ### Questions

	// Create the generic question template:
	// * `autoSubmit`: submit when an answer is clicked twice.
	// * `answers`: the text for all answers (in our case only the questions change...)
	// * `help`: add help text (only for the first three questions presented).
	API.addQuestionsSet('basicSelect', {
		type: 'selectOne',
		autoSubmit:true,
		numericValues:true,
		answers: [
			"1- Agree",
			"2- Agree Slightly",
			"3- Neither Agree nor Disagree",
			"4- Disagree Slightly",
			"5- Disagree Strongly"
		],
		help: '<%= pagesMeta.number < 3 %>',
		helpText: 'Selecting an answer once colors it blue.<br/>' +
			'You can change your answer by selecting another option.<br/>' +
			'To confirm, click the selected (blue) button a second time.'
	});

	// Create a set with all the questions that we are going to use.
	// Each questions `inherit`s our *basicSelect*, sets a `name` and sets the questions text (`stem`).
	API.addQuestionsSet('baQuestions', [
		{
			inherit : 'basicSelect',
			name : 'ba1',
			stem : "One of the main causes of mental illness is a lack of self-discipline and will power."
		},
		{
			inherit : 'basicSelect',
			name : 'ba2',
			stem : "There is something about people with mental illness that makes it easy to tell from normal people."
		},
		{
			inherit : 'basicSelect',
			name : 'ba3',
			stem : "As soon as a person shows signs of mental disturbance, they should be hospitalized."
		},
		{
			inherit : 'basicSelect',
			name : 'ba4',
			stem : "Mental illness is an illness like any other."
		},
		{
			inherit : 'basicSelect',
			name : 'ba5',
			stem : "Less emphasis should be placed on protecting the public from people with mental illness."
		},
		{
			inherit : 'basicSelect',
			name : 'ba6',
			stem : "Mental hospitals are an outdated means of treating people with mental illness."
		},
		{
			inherit : 'basicSelect',
			name : 'ba7',
			stem : "Virtually anyone can become mentally ill."
		},
		{
			inherit : 'basicSelect',
			name : 'ba8',
			stem : "People with mental illness have for too long been the subject of ridicule."
		},
		{
			inherit : 'basicSelect',
			name : 'ba9',
			stem : "We need to adopt a far more tolerant attitude toward people with mental illness in our society."
		},
		{
			inherit : 'basicSelect',
			name : 'ba10',
			stem : "We have a responsibility to provide the best possible care for people with mental illness."
		},
		{
			inherit : 'basicSelect',
			name : 'ba11',
			stem : "People with mental illness don’t deserve our sympathy."
		},
		{
			inherit : 'basicSelect',
			name : 'ba12',
			stem : "People with mental illness are a burden on society."
		},
		{
			inherit : 'basicSelect',
			name : 'ba13',
			stem : "Increased spending on mental health services is a waste of money."
		},
		{
			inherit : 'basicSelect',
			name : 'ba14',
			stem : "There are sufficient existing services for people with mental illness."
		},
		{
			inherit : 'basicSelect',
			name : 'ba15',
			stem : "People with mental illness should not be given any responsibility."
		},
		{
			inherit : 'basicSelect',
			name : 'ba16',
			stem : "A woman would be foolish to marry a man who has suffered from mental illness, even though he seems fully recovered."
		},
		{
			inherit : 'basicSelect',
			name : 'ba17',
			stem : "I would not want to live next door to someone who has been mentally ill."
		},
		{
			inherit : 'basicSelect',
			name : 'ba18',
			stem : "Anyone with a history of mental problems should be excluded from taking public office."
		},
		{
			inherit : 'basicSelect',
			name : 'ba19',
			stem : "No one has the right to exclude people with mental illness from their neighborhood."
		},
		{
			inherit : 'basicSelect',
			name : 'ba20',
			stem : "People with mental illness are far less of a danger than most people suppose."
		},
		{
			inherit : 'basicSelect',
			name : 'ba21',
			stem : "Most women who were once patients in a mental hospital can be trusted as babysitters."
		},
		{
			inherit : 'basicSelect',
			name : 'ba22',
			stem : "The best therapy for many people with mental illness is to be part of a normal community."
		},
		{
			inherit : 'basicSelect',
			name : 'ba23',
			stem : "As far as possible mental health services should be provided through community based facilities."
		},
		{
			inherit : 'basicSelect',
			name : 'ba24',
			stem : "Residents have nothing to fear from people coming into their neighborhood to obtain mental health services."
		},
		{
			inherit : 'basicSelect',
			name : 'ba25',
			stem : "It is frightening to think of people with mental problems in residential neighborhoods."
		},
		{
			inherit : 'basicSelect',
			name : 'ba26',
			stem : "Locating mental health facilities in a residential area downgrade the neighborhood."
		},
		{
			inherit : 'basicSelect',
			name : 'ba27',
			stem : "People with mental health problems should have the same rights to a job as anyone else."
		},
		{
			type : 'selectOne',
			name : 'gender',
			stem : "What is your gender identity?",
			answers : [
				'Male',
				'Female',
				'Non-binary'
			]
		},
		{	type : 'text',
			name : 'age',
			stem : "What is your age?",
			required: true,
			numericValues: true
		},
		{
			type : 'selectOne',
			name : 'religion',
			stem : "What Christian denomination do you most identify with?",
			answers : [
				'Protestantism',
				'Evangelical',
				'Methodist',
				'Baptist',
				'Presbyterian',
				'Church of Christ',
				'Catholic',
				'Latter Day Saints',
				'Jehovah’s Witness'
			]
		},
		{
			type : 'selectOne',
			name : 'ethnicity',
			stem : "What is your race or ethnicity?",
			answers: [
				'White',
				'Black or African American',
				'Hispanic or Latino',
				'Asian',
				'American Indian or Alaska Native',
				'Middle Eastern or North African',
				'Native Hawaiian or Pacific Islander'
			]
		}
	]);


	// ### Pages
	// Create the generic pages template:
	// * `decline`: allow participants to decline answering
	// * `noSubmit`: do not display the submit button (we rely on `autoSubmit` for submitting)
API.addPagesSet('basicPage', {
    progressBar: '<%= pagesMeta.number %> out of 31',
    header: 'Please rate your agreement with the following statement',
    headerStyle : {'font-size':'1em'},
    questions : {inherit:{set:'baQuestions', type:'exSequential'}},
    decline:true,
    noSubmit:true
});

API.addSequence([
    {inherit: 'basicPage'},  // This will show all baQuestions in order, if exSequential is supported
]);

	// Return the script to piquest's god, or something of that sort.
	return API.script;
});
