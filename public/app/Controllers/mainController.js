app.controller('MainCtrl', ['$scope',
function ($scope, posts) {
    $scope.title = '';
    //$scope.posts = [];
    $scope.posts = posts.posts;
    $scope.addPost = function () {
        if ($scope.title === '') {
            return;
        }
        $scope.posts.push({
            title: $scope.title,
            url: 'https://cdn.vectorstock.com/i/composite/19,59/sugar-skull-vector-1541959.jpg',
            upvotes: 0,
            comments: [
              { author: 'Joe', body: 'Cool post!', upvotes: 0 },
              { author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0 }
            ]
        });
        //clear the values
        $scope.title = '';
        $scope.url = '';
    };

    $scope.upvote = function (post) {
        posts.upvote(post);
    };
    $scope.downvote = function (post) {
        posts.downvote(post);
    };
}]);