/* 
 * @指定，组件，筛选
 * @author: Jeff Guo
 * @https://github.com/megeee
 */

//这里放点filter
App.filter('splitCard', [function() {  
    return function(content) {  
        return content ? content.replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1-") : content;  
    }  
}]);

//这里定义一些公共方法
App.value("publicData", function(){
    
    return {

    };

});