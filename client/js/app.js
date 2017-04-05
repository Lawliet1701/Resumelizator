angular.module("resumelizator", ['ui.router', 'lbServices'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('allCandidates', {
          url: "/",
          templateUrl: "views/all-candidates.html",
          controller: "AllCandidatesController"
        })
        .state('candidate', {
          url: "/Candidates/:id",
          templateUrl: "views/candidate.html",
          controller: "CandidateController"
        });
        
        $urlRouterProvider.otherwise('/');
    }]);
