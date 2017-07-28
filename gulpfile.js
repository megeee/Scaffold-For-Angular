var gulp = require('gulp');
var webserver = require('gulp-webserver'); 

gulp.task('run', function(){
    gulp.src('./')
    .pipe(webserver({
        port: 8088,
        host: '127.0.0.1',
        liveload: true,
        directoryListing: {
            path: './',
            enable: true
        }
    }))
});