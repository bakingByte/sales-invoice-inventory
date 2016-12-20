myApp.controller('blogController', ['$scope', '$sce', '$routeParams', 'Blog', 'BlogReview', function($scope, $sce, $routeParams, Blog, BlogReview) {
  $scope.pageTittle = 'Blog';

  $scope.blog = {};
  $scope.reviews = [];
  $scope.newReview = {};
  $scope.blogId = $routeParams.id;

  $scope.blogs = [
      {
          "title":"Facing FEAR",
          "author":"Sunil Kunte",
          "releasedDate":"30-06-2015",
          "overallRating":4,
          "numberofViews":"100",
          "iconPath":"dist/img/blogs/sunil.png",
          "description":"The world knows Warren Buffet the famous American business magnate investor and philanthropist But how many of us know that Warren Buffet was terrified of public speaking In his early days he would get so psyched out by the prospect of speaking publicly that he would choose his college classes to avoid having to get up in front of people. He enrolled in a public speaking course and dropped out before it even started I lost my nerve he said  But at the age of 21 when Buffett started his career in the securities business he realized that to reach his full potential he had to overcome his fear of public speaking He enrolled in another course with thirty people who like him were terrified of getting up and saying our names Like Warren Buffet all of us have our own fears Fear of failure death, humiliation retaliation the unknown not to speak of more specific fears like Arachnophobia Acrophobia and so on Fear keeps our mind in subjugation Fear keeps individuals from realizing their potential Fear takes the joy out of life  As Henry Ford puts it beautifully One of the greatest discoveries a man makes one of his great surprises is to find he can do what he was afraid he couldnt do July and August are months when two great nations celebrate their Independence on July 04 and August 15 respectively While freedom of a nation comes from the sacrifice of millions what does it take for us to be free of our own fears",
          "id":"1"
     },

     {
         "title":"My Trip to Boston",
          "author":"Cauvery Thimmaiah",
          "releasedDate":"09-10-2014",
          "overallRating":4,
          "numberofViews":"70",
          "iconPath":"dist/img/blogs/cauvery.png",
          "description":" Im a bit late to the blog scene finally here wondering where do I start from Its been 6 weeks since I began my assignment I call the Boston Trail  All through the 2months of the formal process of preparation  I couldnt wait for that day that I would board my flight Anxiety curiosity excitement nervousness were all the overwhelming emotions running through me this made me  wonder why Thats when I realized thats exactly how you we feel when dreams turn into reality To be part of the rotation program was something I was looking forward to. I have been  overwhelmed and so grateful for all the  support and encouragement by the leadership team in India and my host team to take on the assignment and make a success of it. I arrived In Boston in Mid-August settling in was never too hard I was too excited to be jet lagged too 245 summer street office which I had only heard off and seen on a video or an address pad to now being working out of there I was so thrilled Had a warm  welcome by the IT HR team by a well organized team lunch It was very welcoming to see all of them take time of their schedules for the welcome lunch The excitement and warmth just made me seamlessly settle in and get started from the day one What I really love about this team is that they display the passion commitment and the strong alignment with their business partners in the roles they play You cant ask after a better welcome than a ticket to the RED SOX GAME on the very first weekend This was the beginning of my learning experience the baseball game",
          "id":"2"
     },
     {
         "title":"Innovations in HR",
          "author":"Anshu Mehra",
          "releasedDate":"14-07-2015",
          "overallRating":4,
          "numberofViews":"50",
          "iconPath":"dist/img/blogs/anshu.png",
          "description":"Technology providers are competing heavily on ease of use as it significantly improves user engagement companies no longer compete on new features because competitors catch up quickly. Recruiting areas in HR are undergoing dramatic change as staffing is  heavily disrupted by mobile and social sourcing. Technology providers are increasingly providing embedded analytics within their products with predefined models that predict retention identify pockets of high cost and recommend learning intelligently help associates  managers to make talent mobility decisions  As HR systems become more real-time we are seeing new social skills-matching and content-matching applications that are changing the way associates develop learn and grow. Workday has the most mature core HR application and the largest number of cloud customers in production and leads the other two competitors in customer satisfaction. Oracle HCM Cloud has shown evidence of increased product maturity and has also made substantial progress against its product integration roadmap during the past two years Oracle HCM Cloud has effectively doubled its Global HR customer base while improving customer satisfaction.Zenefits is a cloud based disruptive HCM technology provider for small and medium sized businesses that started in 2013 and has captured market share with revenue projected to be greater than $100M by Jan 2016. It would be great to get your perspective on these trends so we can improve this market research. Who do you think are the cool HR technology vendors big or small and what do you like about them Who do you think are the key disruptors now and in the future Your comments can be about any area of HR technology Core HR HRIS Talent Management Talent Acquisition Recruiting Payroll Benefits Timekeeping Talent Management Data  Analytics Learning etc We want to hear from you",
          "id":"3"
     },
     {
         "title":"Thanks to our veterans",
          "author":"Mary Scanlan",
          "releasedDate":"11-12-2015",
          "overallRating":4,
          "numberofViews":"50",
          "iconPath":"dist/img/blogs/mary.png",
          "description":" I didnt want too much more of the day to pass without taking a moment to reflect on what an important day this is for our country and for each and every one of us personally  We owe a debt of thanks to our veterans and the service they have provided for our country but it goes beyond service it goes to the core of our values honor valor and freedom to name a few What would our world be like if they did not say Yes to this calling We talk a lot about servant leadership and I personally have branded myself with those words I m not sure that I have taken it to the same level as our veterans Actually I can honestly say I have not as never have I been asked if I was willing to die for those I lead I wonder what my answer would be Your character commitment and bravery humble me thank you for all that youve given us Happy Veterans Day",
          "id":"4"
     }

   ];

   $scope.blog = $scope.blogs[$scope.blogId - 1];
  // function getBlog() {
  //   Blog
  //     .find({id:1})
  //     .$promise
  //     .then(function(blog) {
  //       $scope.blog = blog[0];
  //     });
  // }
  //
  // getBlog();
  //
  function getReviews() {
    Blog.blogReviews({
      id: $scope.blogId
    })
    .$promise
    .then(function(reviews) {
      $scope.reviews = reviews;
    });
  }

  getReviews();

  $scope.sendComment=function(){
    if(!$scope.review){
      console.log('Hiii');
      $scope.newReview.byWhome = 'Bharath Raj';
      $scope.newReview.blogId = $scope.blogId;
      $scope.newReview.date = new Date();
      $scope.newReview.rating = $scope.newCommentRating;
      $scope.newReview.iconPath = 'dist/img/user2-160x160.jpg';
      console.log($scope.newReview);
      BlogReview.create(
        $scope.newReview
      )
      .$promise
      .then(function(reviews) {
        getReviews();
      });

      $scope.newReview = {};
    }

  };
  $scope.courseTittle ='Angular Js';
  $scope.Author = 'Kevin Jhon';
  $scope.IconPath='';
  $scope.ReleasedDate='02-Jan-2016';
  $scope.OverAllRating=4;
  $scope.NumberOfSubscrptions='343';
  $scope.selected=null;
  $scope.Description='The voice consists of sound made by a human being using the vocal folds for talking, reading, singing, laughing, crying, screaming etc. The human voice is specifically a part of human sound production in which the vocal folds (vocal cords) are the primary sound source.The voice consists of sound made by a human being using the vocal folds for talking, reading, singing, laughing, crying, screaming etc. The human voice is specifically a part of human sound production in which the vocal folds (vocal cords) are the primary sound source.The voice consists of sound made by a human being using the vocal folds for talking, reading, singing, laughing, crying, screaming etc. The human voice is specifically a part of human sound production in which the vocal folds (vocal cords) are the primary sound source.';
  $scope.Reviews = [
    {
      ByWhome:'Jonathan Burke Jr.',
      Rating:4,
      Description:'Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise, but others ignore the hate as they create awesome tools to help create filler text for everyone from bacon lovers to Charlie Sheen fans.',
      Date:'02-Feb-2016'
    },
    {
      ByWhome:'Jonathan Burke Jr.',
      Rating:3,
      Description:'Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise, but others ignore the hate as they create awesome tools to help create filler text for everyone from bacon lovers to Charlie Sheen fans.',
      Date:'02-Feb-2016'
    },
    {
      ByWhome:'Jonathan Burke Jr.',
      Rating:5,
      Description:'Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise, but others ignore the hate as they create awesome tools to help create filler text for everyone from bacon lovers to Charlie Sheen fans.',
      Date:'02-Feb-2016'
    }
  ];
  $scope.newCommentRating=0;
  $scope.click2 = function (param) {
          $scope.newCommentRating=param;
        };

      $scope.mouseHover2 = function (param) {
        //  console.log('mouseHover(' + param + ')');
          $scope.hoverRating1 = param;
      };

      $scope.mouseLeave2 = function (param) {
        //  console.log('mouseLeave(' + param + ')');
          $scope.hoverRating2 = param + '*';
      };
$scope.playButtonClicked=function(param){
  $scope.selected=$sce.trustAsResourceUrl(param.Path)
};

$scope.textToVoice = function(){
  if(!$scope.isPlaying){
    responsiveVoice.speak($scope.blog.description);
    $scope.isPlaying=true;
  }
  else if($scope.isPlaying){
    responsiveVoice.cancel();
    $scope.isPlaying=false;
  }

};
}]);
