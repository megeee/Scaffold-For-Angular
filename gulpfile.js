var gulp = require('gulp');
var webserver = require('gulp-webserver'); 

gulp.task('webserver', function(){
    gulp.src('./')
    .pipe(webserver({
        port: 8088,//�˿�
        host: '127.0.0.1',//����
        liveload: true,//ʵʱˢ�´��롣����f5ˢ��
        directoryListing: {
            path: './',
            enable: true
        }
    }))
});