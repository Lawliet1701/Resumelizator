angular.module('resumelizator')
    .controller('AllCandidatesController', ['$scope', 'Candidate', function($scope, Candidate){

         $scope.candidates = Candidate.find();
    
    }])
    .controller('CandidateController', ['$scope', '$state', '$stateParams', 'Candidate', function($scope, $state, $stateParams, Candidate){
        
        $scope.candidate = Candidate.findById({ filter: {
            include : [
            {
                relation: 'candidateSkillLevels',
                scope: {
                    include: 'skill'
                }
            },
            {
                relation: 'educations'
            },
            {
                relation: 'employments',
                scope: {
                    include: {
                        relation: 'employmentSkills',
                        scope: {
                            include: 'skill'
                        }
                    } 
                }
            }]
      }, id: $stateParams.id });
        
    }]);