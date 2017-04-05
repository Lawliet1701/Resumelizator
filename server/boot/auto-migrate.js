module.exports = function(app) {
  app.dataSources.mysqlDS.automigrate('Candidate', function(err) {
    if (err) throw err;
      
      app.models.Candidate.create([
      {name: 'Vadym', username: 'Shcherban'},
      {name: 'Yurii', username: 'Sance'},
      {name: 'Arti', username: 'Vancouver'},
      {name: 'Grag', username: 'Capullo'},
      {name: 'Scott', username: 'Snaider'},
      {name: 'Marty', username: 'Jones'},
      {name: 'John', username: 'Connor'},
      {name: 'Toby', username: 'Runner'},
      {name: 'Michael', username: 'Moralez'}
    ], function(err, candidates) {
      if (err) throw err;
      });
 
     console.log('Candidate created');
      
  });
    
    app.dataSources.mysqlDS.automigrate('Education', function(err) {
    if (err) throw err;
        
          app.models.Education.create([
          {dateStart: Date.now(), dateFinish: Date.now(), place: "VNTU", speciality: "Computer Science", candidateId: 1},
          {dateStart: Date.now(), dateFinish: Date.now(), place: "KNU", speciality: "Game Developing", candidateId: 2},
          {dateStart: Date.now(), dateFinish: Date.now(), place: "Harvard", speciality: "Software Engineering", candidateId: 3},
          {dateStart: Date.now(), dateFinish: Date.now(), place: "VNTU", speciality: "Electronics", candidateId: 4},
          {dateStart: Date.now(), dateFinish: Date.now(), place: "KNTEU", speciality: "Economics", candidateId: 5},
          {dateStart: Date.now(), dateFinish: Date.now(), place: "Oxford", speciality: "Data Mining", candidateId: 6},    
        ], function(err, educations) {
          if (err) throw err;
          });
 
     console.log('Education created');
      
  });
    
    app.dataSources.mysqlDS.automigrate('Employment', function(err) {
    if (err) throw err;
        
            app.models.Employment.create([
          {dateStart: Date.now(), dateFinish: Date.now(), company: "SoftServ", position: "Junior C# Developer", responsibility: "Something1", candidateId: 1},
          {dateStart: Date.now(), dateFinish: Date.now(), company: "WinSoft", position: "Middle C# Developer", responsibility: "Something2", candidateId: 1},
          {dateStart: Date.now(), dateFinish: Date.now(), company: "AIDev", position: "Senior Developer", responsibility: "Something2", candidateId: 2},
          {dateStart: Date.now(), dateFinish: Date.now(), company: "AIDev", position: "Middle Developer", responsibility: "Something3", candidateId: 2},
          {dateStart: Date.now(), dateFinish: Date.now(), company: "EPAM", position: "Junior Front-End Developer", responsibility: "Something3", candidateId: 3},
          {dateStart: Date.now(), dateFinish: Date.now(), company: "SkySoft", position: "Middle NodeJS Developer", responsibility: "Something4", candidateId: 4},
          {dateStart: Date.now(), dateFinish: Date.now(), company: "Playtika", position: "Middle JavaScript Developer", responsibility: "Something5", candidateId: 5},
          {dateStart: Date.now(), dateFinish: Date.now(), company: "Microsoft", position: "Middle C# Developer", responsibility: "Something6", candidateId: 6},
        ], function(err, employments) {
          if (err) throw err;
          });
 
     console.log('Employment created');
      
  });
    
    app.dataSources.mysqlDS.automigrate('Skill', function(err) {
    if (err) throw err;
        
            app.models.Skill.create([
              {type: 'Framework', name: 'AngularJS'},
              {type: 'Library', name: 'jQuery'},
              {type: 'Framework', name: 'ASP/NET'},
              {type: 'Framework', name: 'Bootstrap'},
              {type: 'Language', name: 'JavaScript'},
              {type: 'Language', name: 'C#'},
              {type: 'Language', name: 'Java'},
              {type: 'Framework', name: 'Angular 2'},
        ], function(err, skills) {
          if (err) throw err;
          });
 
     console.log('Skill created');
      
  });
    
    app.dataSources.mysqlDS.automigrate('EmploymentSkill', function(err) {
    if (err) throw err;
        
        app.models.EmploymentSkill.create([
          {employmentId: '1', skillId: '1'},
          {employmentId: '2', skillId: '3'},
          {employmentId: '2', skillId: '2'},
          {employmentId: '1', skillId: '6'},
          {employmentId: '3', skillId: '5'},
          {employmentId: '4', skillId: '7'},
          {employmentId: '4', skillId: '6'},
          {employmentId: '5', skillId: '1'},
          {employmentId: '5', skillId: '4'},
          {employmentId: '5', skillId: '5'},
          {employmentId: '6', skillId: '3'},
          {employmentId: '6', skillId: '7'},
          {employmentId: '7', skillId: '7'},
          {employmentId: '8', skillId: '1'},

    ], function(err, employmentSkills) {
      if (err) throw err;
      });
 
     console.log('EmploymentSkill created');
      
  });
    
    app.dataSources.mysqlDS.automigrate('CandidateSkillLevel', function(err) {
    if (err) throw err;
        
    app.models.CandidateSkillLevel.create([
      {years: '7', level:'10', candidateId: '1', skillId: '1'},
      {years: '5', level:'10', candidateId: '2', skillId: '3'},
      {years: '8', level:'6', candidateId: '2', skillId: '2'},
        {years: '8', level:'3', candidateId: '3', skillId: '1'},
        {years: '8', level:'3', candidateId: '1', skillId: '5'},
      {years: '4', level:'3', candidateId: '3', skillId: '1'},
        {years: '8', level:'6', candidateId: '2', skillId: '1'},
        {years: '5', level:'3', candidateId: '1', skillId: '3'},
        {years: '3', level:'3', candidateId: '3', skillId: '5'},
         {years: '8', level:'9', candidateId: '1', skillId: '7'},
       {years: '8', level:'9', candidateId: '2', skillId: '5'},
       {years: '8', level:'8', candidateId: '1', skillId: '6'},
       {years: '10', level:'10', candidateId: '4', skillId: '1'},
      {years: '5', level:'10', candidateId: '4', skillId: '3'},
      {years: '8', level:'3', candidateId: '4', skillId: '4'},
        {years: '8', level:'10', candidateId: '4', skillId: '6'},
        {years: '3', level:'3', candidateId: '5', skillId: '2'},
           {years: '2', level:'3', candidateId: '5', skillId: '4'},
        {years: '8', level:'10', candidateId: '5', skillId: '7'},
        {years: '1', level:'3', candidateId: '6', skillId: '1'},
        {years: '5', level:'3', candidateId: '6', skillId: '5'},
         {years: '6', level:'9', candidateId: '7', skillId: '1'},
           {years: '1', level:'3', candidateId: '7', skillId: '3'},
           {years: '2', level:'3', candidateId: '7', skillId: '5'},
    ], function(err, candidateSkillLevels) {
      if (err) throw err;
      });
 
     console.log('CandidateSkillLevel created');
      
  });

};