app.controller('feedController',['Person','Post','$scope','$rootScope',
	function(Person,Post,$scope,$rootScope){
		$scope.posts = {};

		function getPost(){
			Post.find()
			.$promise
			.then(function(res){
				$scope.posts = res;
			});
		}
		getPost();
		$scope.createPost = function (){
			$scope.newPost.creationDate = "2015-10-12";
			//$scope.newPost.id = $rootScope.currentUser.id;
			console.log('newPost: '+$rootScope.currentUser.id+$scope.newPost.creationDate+$scope.newPost.content+$scope.newPost.isAlertOn);
			//Person.posts.create($scope.newPost)// in view ng-model=newPost.description, ng-model=newpost.location ...etc
			Person.posts.create(
			{id: $rootScope.currentUser.id},
			{
				
				creationDate: $scope.newPost.creationDate,
				content: $scope.newPost.content,
				isAlertOn: $scope.newPost.isAlertOn,
				category: $scope.newPost.category
				
			})
			.$promise
			.then(function(){
				$scope.newPost = '';
				//$scope.newPostForm.content.$setPristine();
				getPost();
				$('.feed-focus').focus();
			});
		}
	}
	]);
// get latest posts and show on marker.
// Next is to implement edge rank logic on posts.