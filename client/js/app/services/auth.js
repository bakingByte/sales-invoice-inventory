//var app = angular.module('NatkhatBharat');
app.factory('AuthService', ['Person', '$q', '$rootScope', function(Person, $q,
      $rootScope) {
    function login(email, password) {
      return Person
        .login({email: email, password: password})
        .$promise
        .then(function(response) {
          console.log("auth.js login() then");
          $rootScope.currentUser = {
            id: response.user.id,
            tokenId: response.id,
            email: email
          };
        });
    }

    function logout() {
      return Person
       .logout()
       .$promise
       .then(function() {
         $rootScope.currentUser = null;
       });
    }

    function register(email, password) {
      return Person
        .create({
         email: email,
         password: password
       })
       .$promise;
    }

    return {
      login: login,
      logout: logout,
      register: register
    };
  }]);
