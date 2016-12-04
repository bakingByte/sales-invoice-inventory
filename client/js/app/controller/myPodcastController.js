myApp.controller('myPodcastController', ['$scope', '$sce', '$location',
'Profile','CourseDetail','Course', function($scope, $sce, $location,Profile,CourseDetail,Course) {
  console.log($scope.localVideo);
  $scope.courseclk= null;
  $scope.SelectedCourse = null;
  $scope.pageTittle="My PodCasts";
  $scope.selected = null;
  $scope.MandatoryCourses=[];
  $scope.SubscribedCourses=[];
  $scope.courseDetails = [];
  $scope.load = function() {
    $scope.SelectedCourse = $scope.MandatoryCourses[0];
  };
  $scope.courses = [
    {
      "title": "Angular JS",
      "author": "Kavin John",
      "iconPath": "dist/img/courses/angularjs.png",
      "releasedDate": "2016-02-07T00:00:00.000Z",
      "overallRating": 3,
      "numberOfSubscriptions": 343,
      "description": "HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.",
      "id": 1
    },
    {
      "title": "Backbone Js Fundamentals",
      "author": "John Smith",
      "iconPath": "dist/img/courses/backbonejs.png",
      "releasedDate": "2015-04-10T00:00:00.000Z",
      "overallRating": 4,
      "numberOfSubscriptions": 20,
      "description": "Backbone.js gives structure to web applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface.",
      "id": 2
    },
    {
      "title": "Bootstrap Layouts",
      "author": "Ray John",
      "iconPath": "dist/img/courses/bootstrap.png",
      "releasedDate": "2013-02-08T00:00:00.000Z",
      "overallRating": 3,
      "numberOfSubscriptions": 40,
      "description": "Bootstrap makes front-end web development faster and easier. It's made for folks of all skill levels, devices of all shapes, and projects of all sizes.",
      "id": 3
    },
    {
      "title": "Big data Analytics",
      "author": "Sema Acharya",
      "iconPath": "dist/img/courses/bigdata.jpg",
      "releasedDate": "2014-07-10T00:00:00.000Z",
      "overallRating": 2,
      "numberOfSubscriptions": 10,
      "description": "Big data is a broad term for data sets so large or complex that traditional data processing applications are inadequate. Challenges include analysis, capture, data curation, search, sharing, storage, transfer, visualization, querying and information privacy. The term often refers simply to the use of predictive analytics or certain other advanced methods to extract value from data, and seldom to a particular size of data set. Accuracy in big data may lead to more confident decision making, and better decisions can result in greater operational efficiency, cost reduction and reduced risk.",
      "id": 4
    },
    {
      "title": "The art of Public Speaking",
      "author": "Stephen Lucas",
      "iconPath": "dist/img/courses/publicspeaking.jpg",
      "releasedDate": "2013-07-09T00:00:00.000Z",
      "overallRating": 5,
      "numberOfSubscriptions": 100,
      "description": "Public speaking (sometimes termed oratory or oration) is the process or act of performing a presentation (a speech) focused around an individual directly speaking to a live audience in a structured, deliberate manner in order to inform, influence, or entertain them. Public speaking is commonly understood as the formal, face-to-face talking of a single person to a group of listeners. It is closely allied to presenting, although the latter is more often associated with commercial activity. Most of the time, public speaking is to persuade the audience.",
      "id": 5
    },
    {
      "title": "Beyond the executive comfort zone",
      "author": "Frank Granara",
      "iconPath": "dist/img/courses/beyond.jpg",
      "releasedDate": "2013-07-09T00:00:00.000Z",
      "overallRating": 2,
      "numberOfSubscriptions": 10,
      "description": "Stepping out of the comfort zone raises anxiety and generates a stress response. This results in an enhanced level of concentration and focus.  White (2009) refers to the optimal performance zone, in which performance can be enhanced by some amount of stress.[4] Yerkes (1907) who reported, Anxiety improves performance until a certain optimum level of arousal has been reached. Beyond that point, performance deteriorates as higher levels of anxiety are attained. Beyond the optimum performance zone, lies the danger zone in which performance declines rapidly under the influence of greater anxiety.Optimal performance management requires maximizing time in the optimum performance.",
      "id": 6
    },
    {
      "title": "Hacking",
      "author": "Isaac Sharpe",
      "iconPath": "dist/img/courses/hacking.jpg",
      "releasedDate": "2012-08-09T00:00:00.000Z",
      "overallRating": 3,
      "numberOfSubscriptions": 100,
      "description": "The hacker culture is a subculture of individuals who enjoy the intellectual challenge of creatively overcoming and circumventing limitations of systems to achieve novel and clever outcomes. The act of engaging in activities (such as programming or other media) in a spirit of playfulness and exploration is termed hacking. However, the defining characteristic of a hacker is not the activities performed themselves (e.g. programming), but the manner in which it is done: hacking entails some form of excellence, for example exploring the limits of what is possible, thereby doing something exciting and meaningful. Activities of playful cleverness can be said to have hack value and are termed hacks (examples include pranks at MIT intended to demonstrate technical aptitude and cleverness). The hacker culture originally emerged in academia in the 1960s around the Massachusetts Institute of Technology (MIT)'s Tech Model Railroad Club (TMRC) and MIT Artificial Intelligence Laboratory.",
      "id": 7
    },
    {
      "title": "Data Science For Business",
      "author": "Foster Provost",
      "iconPath": "dist/img/courses/datascience.jpg",
      "releasedDate": "2012-08-09T00:00:00.000Z",
      "overallRating": 5,
      "numberOfSubscriptions": 100,
      "description": "Data Science is an interdisciplinary field about processes and systems to extract knowledge or insights from data in various forms, either structured or unstructured,[1][2] which is a continuation of some of the data analysis fields such as statistics, data mining, and predictive analytics, similar to Knowledge Discovery in Databases (KDD).",
      "id": 8
    },
    {
      "title": "Computer and Information Security",
      "author": "John R vacca",
      "iconPath": "dist/img/courses/security.jpg",
      "releasedDate": "2012-08-10T00:00:00.000Z",
      "overallRating": 3,
      "numberOfSubscriptions": 89,
      "description": "Information security, sometimes shortened to InfoSec, is the practice of defending information from unauthorized access, use, disclosure, disruption, modification, perusal, inspection, recording or destruction. It is a general term that can be used regardless of the form the data may take (e.g. electronic, physical).",
      "id": 9
    },
    {
      "title": "Measuring And Managing Infomation Risk",
      "author": "Jack Freund",
      "iconPath": "dist/img/courses/measuring.jpg",
      "releasedDate": "2012-04-10T00:00:00.000Z",
      "overallRating": 3,
      "numberOfSubscriptions": 20,
      "description": "Factor analysis of information risk (FAIR for short) is a taxonomy of the factors that contribute to risk and how they affect each other. It is primarily concerned with establishing accurate probabilities for the frequency and magnitude of loss events. It is not, per se, a “cookbook” that describes how to perform an enterprise (or individual) risk assessment.",
      "id": 10
    },
    {
      "title": "Agile Retrospecitve",
      "author": "Esther Drby",
      "iconPath": "dist/img/courses/agile.jpg",
      "releasedDate": "2012-02-08T00:00:00.000Z",
      "overallRating": 3,
      "numberOfSubscriptions": 48,
      "description": "Agility is also an important attribute in many role playing games, both computer games and pen-and-paper or tabletop games such as Dungeons & Dragons. Agility may affect the character's ability to evade an enemy's attack or land their own, move more quickly, navigate uneven terrain, or engage in stealthy activities such as lockpicking or pickpocketing.",
      "id": 11
    },
    {
      "title": "Pragmatic Programmer",
      "author": "Andrew Hunt",
      "iconPath": "dist/img/courses/pp.jpg",
      "releasedDate": "2012-02-08T00:00:00.000Z",
      "overallRating": 3,
      "numberOfSubscriptions": 48,
      "description": "The Pragmatic Programmer: From Journeyman to Master (ISBN 0-201-61622-X) is a book about software engineering by Andrew Hunt and David Thomas, published in October, 1999. The book is the first in a series of books under the The Pragmatic Bookshelf label.",
      "id": 12
    },
    {
      "title": "Design Patterns",
      "author": "Erich Gamma",
      "iconPath": "dist/img/courses/dp.jpg",
      "releasedDate": "2012-02-08T00:00:00.000Z",
      "overallRating": 3,
      "numberOfSubscriptions": 48,
      "description": "A design pattern is the re-usable form of a solution to a design problem. The idea was introduced by the architect Christopher Alexander and has been adapted for various other disciplines, most notably computer science.",
      "id": 13
    },
    {
      "title": "Strengths Finder",
      "author": "Esther Drby",
      "iconPath": "dist/img/courses/sf.jpg",
      "releasedDate": "2012-02-08T00:00:00.000Z",
      "overallRating": 3,
      "numberOfSubscriptions": 48,
      "description": "An attribute is a piece of data (a statistic) that describes to what extent a fictional character in a role-playing game possesses a specific natural, in-born characteristic common to all characters in the game. That piece of data is usually an abstract number or, in some cases, a set of dice. Some games use different terms to refer to an attribute, such as statistic, (primary) characteristic or ability. A number of role-playing games like Fate do not use attributes at all.",
      "id": 14
    },
    {
      "title": "Node Js",
      "author": "Steve John",
      "iconPath": "dist/img/courses/node.jpg",
      "releasedDate": "2012-02-08T00:00:00.000Z",
      "overallRating": 5,
      "numberOfSubscriptions": 148,
      "description": "Node.js is an open-source, cross-platform runtime environment for developing server-side Web applications. Node.js is not a JavaScript framework, but its applications are written in JavaScript and can be run within the Node.js runtime on a wide variety of platforms, including FreeBSD, IBM AIX, IBM i, IBM System z, Linux, Microsoft Windows, NonStop and OS X. Its work is hosted and supported by the Node.js Foundation, a collaborative project at the Linux Foundation.",
      "id": 15
    },
    {
      "title": "HTML 5 Fundamentals",
      "author": "Esther Drby",
      "iconPath": "dist/img/courses/html5.jpg",
      "releasedDate": "2012-02-08T00:00:00.000Z",
      "overallRating": 4,
      "numberOfSubscriptions": 48,
      "description": "HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It was finalized, and published, on 28 October 2014 by the World Wide Web Consortium (W3C). This is the fifth revision of the HTML standard since the inception of the World Wide Web. The previous version, HTML 4, was standardized in 1997. Its core aims are to improve the language with support for the latest multimedia while keeping it easily readable by humans and consistently understood by computers and devices (web browsers, parsers, etc.). HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.",
      "id": 16
    },
    {
      "title": "Yoga",
      "author": "Shiva Kumar",
      "iconPath": "dist/img/courses/yoga.jpg",
      "releasedDate": "2012-02-08T00:00:00.000Z",
      "overallRating": 5,
      "numberOfSubscriptions": 198,
      "description": "Yoga  is a physical, mental, and spiritual practice or discipline which originated in India. There is a broad variety of schools, practices, and goals in Hinduism, Buddhism and Jainism.[Among the most well-known types of yoga are Hatha yoga and Rāja yoga.",
      "id": 17
    },
    {
      "title": "Leadership Skills",
      "author": "Esther Drby",
      "iconPath": "dist/img/courses/leader.jpg",
      "releasedDate": "2012-02-08T00:00:00.000Z",
      "overallRating": 3,
      "numberOfSubscriptions": 48,
      "description": "Leadership is both a research area and a practical skill, regarding the ability of an individual or organization to lead or guide other individuals, teams, or entire organizations. Controversial viewpoints are present in the literature, among Eastern and Western approaches to leadership, and also within the West, on US vs. European approaches. In US academic environments leadership is defined as a process of social influence in which a person can enlist the aid and support of others in the accomplishment of a common task.",
      "id": 18
    },
    {
      "title": "Communication skills",
      "author": "Esther Drby",
      "iconPath": "dist/img/courses/cs.jpg",
      "releasedDate": "2012-02-08T00:00:00.000Z",
      "overallRating": 3,
      "numberOfSubscriptions": 48,
      "description": "Communication is the purposeful activity of information exchange between two or more participants in order to convey or receive the intended meanings through a shared system of signs and semiotic rules. The basic steps of communication are the forming of communicative intent, message composition, message encoding, transmission of signal, reception of signal, message decoding and finally interpretation of the message by the recipient.",
      "id": 19
    },
    {
      "title": "CSS Fundamentals",
      "author": "Jack Sparrow",
      "iconPath": "dist/img/courses/css.jpg",
      "releasedDate": "2012-02-08T00:00:00.000Z",
      "overallRating": 3,
      "numberOfSubscriptions": 48,
      "description": "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. Although most often used to set the visual style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL, and is applicable to rendering in speech, or on other media. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications.",
      "id": 20
    }
  ];



function getProfile() {
  Profile
    .find({id:1})
    .$promise
    .then(function(profile) {
      $scope.profile = profile[0];
      console.log($scope.profile.mandatoryCourses);
      for(var i=0;i<$scope.profile.mandatoryCourses.length;i++){
        $scope.MandatoryCourses.push($scope.courses[$scope.profile.mandatoryCourses[i]-1]);
      }
      for(var i=0;i<$scope.profile.mandatoryCourses.length;i++){
      $scope.SubscribedCourses.push($scope.courses[$scope.profile.subscribedCourses[i]-1]);
      }
      $scope.load();
      getCourseDetails($scope.MandatoryCourses[0].id);
    });
}



getProfile();

$scope.load = function() {
  $scope.SelectedCourse = $scope.MandatoryCourses[0];
};
function getCourseDetails(id) {
  Course.courseDetails({id:id})
    .$promise
    .then(function(courseDetails) {
     //console.log(courseDetails[0]);
      $scope.courseDetails = courseDetails;
      console.log($scope.courseDetails);
    });
}


$scope.courseClicked=function(param){
  console.log(param);
  $scope.courseclk= param;
  $scope.SelectedCourse = param;
  getCourseDetails(param.id);
  console.log ($scope.courseDetails);
};

$scope.playButtonClicked=function(param){
  $scope.selected=$sce.trustAsResourceUrl(param.onlinePath)
};

$scope.playOfflineButtonClicked=function(param){

  window.open(param.offlinePath);
};
}]);
