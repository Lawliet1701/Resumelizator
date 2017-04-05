'use strict';

module.exports = function(Candidate) {

    Candidate.topTenSkills = function(cb){
        
        var filter = {
            include: {
                relation: "candidateSkillLevels"
            }
        };
        
        Candidate.app.models.Skill.find(filter, function(err, skills){  
        
            var array = new Array();
            
            for (var i = 0; i < skills.length; i++){
                
                var skill = skills[i].toJSON();
                  
                array.push({name: skill.name, val: skill.candidateSkillLevels.length});
 
            }
            
            array.sort(function(a, b){
                return b.val - a.val;
            });
             
            var result = new Array();
            
            for (var i = 0; i < (array.length < 10 ? array.length : 10); i++){
                result[i] = array[i].name;
            }
            
            cb(null, result);
        }); 
        
    };
    
    Candidate.remoteMethod('topTenSkills', {
       
        description: "Returns top ten skills of all users",
        
        http: {
            path: "/topTenSkills",
            verb: "get"
        },
        
        returns: {
            arg: 'topSkills',
            type: 'array'
        }
        
        
    });
    
    //is it correct non-static remote method?
    Candidate.prototype.topThreeSkills = function(id, cb){
        
        var filter = {
            include: {
                relation: "candidateSkillLevels",
                scope: {
                    include: {
                        relation: "skill"
                    }
            }
            }
        };
        
        Candidate.findById(this.id, filter, function(err, cand){  
              
            if (cand === null){
               var error = new Error("Model is not found with id " + this.id);
                error.status = 404;
                return cb(error);
            }

             var candidate = cand.toJSON();

            var skillObj  = {};
            
            for (var i = 0; i < candidate.candidateSkillLevels.length; i++){
                
                var skillName = candidate.candidateSkillLevels[i].skill.name;
                
                if (skillObj[skillName] === undefined ){
                    skillObj[skillName] = 1;
                } else{
                    skillObj[skillName]++;
                }  
            }
            
            var skillArray = [];
            
            for (var item in skillObj) {
                skillArray.push({name: item, val: skillObj[item]});
            }
            
            skillArray.sort(function(a, b){
                return b.val - a.val;
            });
             
            var result = [];
            
            for (var i = 0; i < (skillArray.length < 3 ? skillArray.length : 3); i++){
                result[i] = skillArray[i].name;
            }
            
            cb(null, result);
             
        }); 

    };
    
    
    Candidate.remoteMethod('topThreeSkills', {
       
        description: "Returns top three skills of user",
        
        isStatic: false,
        
        accepts: {
            arg: "id",
            type: "string",
            description: "candidate id",
            required: true
        },
        
        http: {
            path: "/topThreeSkills",
            verb: "get"
        },

        returns: {
            arg: 'topThreeSkills',
            type: 'array'
        }
 
    });
};
