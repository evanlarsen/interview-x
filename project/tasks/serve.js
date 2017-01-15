
import gulp from 'gulp';
import webserver from 'gulp-webserver';

gulp.task('serve', ['watch','build'], function() {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: "http://localhost:8000/dist/index.html"
        }));
});