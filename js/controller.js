/* 
 * @控制器模块
 * @author: Jeff Guo
 * @https://github.com/megeee
 */

//首页
App.controller("home", ['$scope','$http','publicData','$stateParams',function ($scope,$http,publicData) {
    $scope.title = "首页";
}]);


//新闻页面
App.controller("news", ['$scope','$http','publicData','$stateParams',function ($scope,$http,publicData) {
    $scope.title = "新闻页面";
}]);



//新闻内容页
App.controller("news_show", ['$scope','$http','publicData','$stateParams',function ($scope,$http,publicData,$stateParams) {
    $scope.title = "新闻内容";
    $scope.newsId = $stateParams.id;
}]);



//关于我们页面
App.controller("about", ['$scope','$http','publicData','$stateParams',function ($scope,$http,publicData) {
    $scope.title = "关于我们";
}]);