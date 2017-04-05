'use strict';

module.exports = function(Candidateskilllevel) {

    Candidateskilllevel.validate('level', 
        function (err) { if (this.level < 1 || this.level > 10) err(); }, 
        {message: 'Skill level should be in range from 1 to 10'})
    
};
