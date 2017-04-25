/* 
 * @页面路由及公共方法库
 * @author: Jeff Guo
 * @https://github.com/megeee
 */
var App = angular.module("App", ["ui.router"]);

//路由配置
App.config(["$stateProvider","$urlRouterProvider",function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');  
    $stateProvider
 
        //添加店铺
        .state("home", {
            url: "/home",
            templateUrl: "templates/home.html",
            controller:"home"
        })

        .state("news", {
            url: "/news",
            templateUrl: "templates/news.html",
            controller:"news"
        })

        .state("news_show", {
            url: "/news_show/{id}/",
            templateUrl: "templates/news_show.html",
            controller:"news_show"
        })

        .state("about", {
            url: "/about",
            templateUrl: "templates/about.html",
            controller:"about"
        })

}]);


