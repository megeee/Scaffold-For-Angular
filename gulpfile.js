var gulp = require('gulp');
var webserver = require('gulp-webserver'); 

gulp.task('webserver', function(){
    gulp.src('./')
    .pipe(webserver({
        port: 8088,//端口
        host: '127.0.0.1',//域名
        liveload: true,//实时刷新代码。不用f5刷新
        directoryListing: {
            path: './',
            enable: true
        }
    }))
});