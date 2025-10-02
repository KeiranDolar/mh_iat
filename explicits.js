define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/
    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
        header: 'Questionnaire',
        decline: true,
        declineText: isTouch ? 'Decline' : 'Decline to Answer', 
        autoFocus:true, 
        progressBar:  'Page <%= pagesMeta.number %> out of 3'
    });
	  API.addSequence([
      {
        inherit : 'basicPage',
        questions : [{
          inherit :'basicSelect',
          name: 'weightpref',
          stem: 'Which statement best describes you?,
          answers: [
            'I strongly prefer Thin People to Fat People.',
            'I moderately prefer Thin People to Fat People.',
            'I slightly prefer Thin People to Fat People.',
            'I strongly prefer Fat People to Thin People.'
          ]
        }]
      {
          inherit : 'basicPage',
          questions : [{
            inherit : 'basicSelect',
            name: 'How warm or cold do you feel towards fat people?',
            answers: [
              'Extremely warm',
              'Very warm',
              'Moderately warm',
              'Extremely cold'
       ]
      }),


    API.addSequence([
      
    {
        inherit:'basicPage', 
        questions: {inherit:'thermBlack'}
    },
    {
        inherit:'basicPage', 
        questions: {inherit:'thermWhite'}
    },
    {
        inherit:'basicPage', 
        questions: {inherit:'attributes7'}
    }
    ]);
  
    return API.script;
});
