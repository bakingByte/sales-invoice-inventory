myApp.controller('mainController', ['$scope', 'Application', 'Profile','Course', function($scope, Application, Profile,Course) {
  $scope.profile = {};
  $scope.application = {};
  $scope.course = [];
  $scope.topCharts = [];

  function getProfile() {
    Profile
      .find({id:1})
      .$promise
      .then(function(profile) {
        $scope.profile = profile[0];
        console.log($scope.profile);
      });
  }

  getProfile();

  function getApplication() {
    Application
      .find({id:1})
      .$promise
      .then(function(application) {
        $scope.application = application[0];
        console.log($scope.application);
      });
  }

  getApplication();

  function getCourse(id){
    Course
      .find()
      .$promise
      .then(function(course) {
        $scope.course = course;
        getTopCharts();
        //$scope.courseDescription = $scope.course.description.data;
        //$scope.course.description.slice(0,200);
        //$scope.courseDescription = Utf8ArrayToStr($scope.courseDescription);
        //$scope.courseOverallRating = $scope.course.overallRating;
      });
  };

  function getTopCharts() {
    for(var i=0;i<$scope.application.topCharts.length;i++){
      $scope.topCharts.push($scope.course[$scope.application.topCharts[i]]);
    }
    console.log($scope.topCharts);

  }


  getCourse();





  // $scope.user = {
  //   name: 'Harsh Sapra',
  //   designation: 'Associate Software Engineer',
  //   icon: 'dist/img/user2-160x160.jpg',
  //   notification: [
  //     {
  //       description: 'New content added to AngularJS course'
  //     },
  //     {
  //       description: 'Bharath recommended you a course!'
  //     }
  //   ]
  // };

  // $scope.topCharts = [
  //   {
  //     icon: 'dist/img/user2-160x160.jpg',
  //     title: 'AngularJS',
  //     author: 'Bharath Raj'
  //   },
  //   {
  //     icon: 'dist/img/user2-160x160.jpg',
  //     title: 'AngularJS1',
  //     author: 'Bharath Raj'
  //   },
  //   {
  //     icon: 'dist/img/user2-160x160.jpg',
  //     title: 'AngularJS2',
  //     author: 'Bharath Raj'
  //   },
  //   {
  //     icon: 'dist/img/user2-160x160.jpg',
  //     title: 'AngularJS3',
  //     author: 'Bharath Raj'
  //   }
  // ];

  // $scope.categories = [
  //   {
  //     icon:'dist/img/user2-160x160.jpg',
  //     name: 'Technical'
  //   },
  //   {
  //     icon:'dist/img/user2-160x160.jpg',
  //     name: 'Domain'
  //   },
  //   {
  //     icon:'dist/img/user2-160x160.jpg',
  //     name: 'Technical'
  //   },
  //   {
  //     icon:'dist/img/user2-160x160.jpg',
  //     name: 'Domain'
  //   },
  //   {
  //     icon:'dist/img/user2-160x160.jpg',
  //     name: 'Technical'
  //   },
  //   {
  //     icon:'dist/img/user2-160x160.jpg',
  //     name: 'Domain'
  //   }
  // ];
}]);
