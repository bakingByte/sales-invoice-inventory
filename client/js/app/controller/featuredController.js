myApp.controller('featuredController',['$scope', 'Course', function($scope, Course) {
  $scope.pageTitle = 'Featured';
  $scope.courses = [];
  $scope.newAndNoteworthyCourses = [];
  $scope.recommendedCourses = [];
  $scope.courseBackgroundColors = ["bg-purple-active", "bg-black-active", "bg-aqua-active", "bg-yellow-active", "bg-red-active", "bg-gray-active", "bg-navy-active", "bg-orange-active", "bg-teal-active", "bg-maroon-active"];

  $scope.newCoursesCount = 10;
  $scope.recommendedCoursesCount = 10;


  $scope.load = function() {
    $('.main-gallery').flickity({
      // options
      wrapAround: true,
      autoPlay: 3000,
      imagesLoaded: true,
      percentPosition: false
    });
  };

  $scope.load();

  function getCourses() {
    Course
      .find()
      .$promise
      .then(function(courses) {
        $scope.courses = courses;
        getNewAndNoteworthyCourses();
        getRecommendedCourses();
      });
  }

  getCourses();

  function getNewAndNoteworthyCourses() {
    for(var i = 0; i < $scope.newCoursesCount; i++) {
      var randomCourseIndex = Math.floor(Math.random()*$scope.courses.length);
      $scope.newAndNoteworthyCourses.push($scope.courses[randomCourseIndex]);
      $scope.courses.splice(randomCourseIndex,1);
      $scope.newAndNoteworthyCourses[i].background = $scope.courseBackgroundColors[i];
    }
  }

  function getRecommendedCourses() {
    $scope.courseBackgroundColors.reverse();
    for(var i = 0; i < $scope.recommendedCoursesCount; i++) {
      var randomCourseIndex = Math.floor(Math.random()*$scope.courses.length);
      $scope.recommendedCourses.push($scope.courses[randomCourseIndex]);
      $scope.courses.splice(randomCourseIndex,1);
      $scope.recommendedCourses[i].background = $scope.courseBackgroundColors[i];
    }
  }

  // $scope.serverCourse = [];
  //
  // $scope.newServerCourse = {
  //   "title": 'Harsh'
  // };
  //
  // function getReviews() {
  //   Course.reviews({
  //     id: 2
  //   });
  // }
  //
  // getReviews();
  //
  //
  // function getCourses() {
  //     Course
  //       .find()
  //       .$promise
  //       .then(function(results) {
  //         $scope.serverCourse = results;
  //       });
  //   }
  //   getCourses();
  //
  //   $scope.addServerCourse = function() {
  //     Course
  //       .create($scope.newServerCourse)
  //       .$promise
  //       .then(function(course){
  //           getCourses();
  //       });
  //   };


  $scope.newAndNoteworthy = [
    {
      title: 'Learn Angular JS',
      author: 'Bharath Raj',
      icon: 'dist/img/user1-128x128.jpg',
      contentType: 'Video/Audio/PDF',
      numberOfSubscriptions: '671',
      background: 'bg-aqua-active'
    },
    {
      title: 'Learn Angular JS',
      author: 'Bharath Raj',
      icon: 'dist/img/user1-128x128.jpg',
      contentType: 'Video/Audio/PDF',
      numberOfSubscriptions: '671',
      background: 'bg-yellow-active'
    },
    {
      title: 'Learn Angular JS',
      author: 'Bharath Raj',
      icon: 'dist/img/user1-128x128.jpg',
      contentType: 'Video/Audio/PDF',
      numberOfSubscriptions: '671',
      background: 'bg-red-active'
    },
    {
      title: 'Learn Angular JS',
      author: 'Bharath Raj',
      icon: 'dist/img/user1-128x128.jpg',
      contentType: 'Video/Audio/PDF',
      numberOfSubscriptions: '671',
      background: 'bg-gray-active'
    },
    {
      title: 'Learn Angular JS',
      author: 'Bharath Raj',
      icon: 'dist/img/user1-128x128.jpg',
      contentType: 'Video/Audio/PDF',
      numberOfSubscriptions: '671',
      background: 'bg-purple-active'
    },
    {
      title: 'Learn Angular JS',
      author: 'Bharath Raj',
      icon: 'dist/img/user1-128x128.jpg',
      contentType: 'Video/Audio/PDF',
      numberOfSubscriptions: '671',
      background: 'bg-black-active'
    }
  ];
}]);
