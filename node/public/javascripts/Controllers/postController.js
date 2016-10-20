app.controller('PostsCtrl', ['$scope', 'posts', 'post',
function ($scope, postsh) {
    $scope.post = posts.posts[$stateParams.id];

    $scope.addComment = function () {
        if ($scope.body === '') { return; }
        $scope.post.comments.push({
            body: $scope.body,
            author: 'user',
            upvotes: 0
        });
        $scope.body = '';
    };
    $scope.upvote = function (comment) {
        posts.upvoteComment(post, comment);
    };

    $scope.downvote = function (comment) {
        posts.downvoteComment(post, comment);
    };

}]);

//Post Factory
app.factory('posts', ['$http',
function ($http) {
    var o = {
        posts: []
    };
    return o;
}]);
