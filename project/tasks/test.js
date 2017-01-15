
import gulp from 'gulp';
import karma from 'gulp-karma';
import jasmine from 'gulp-jasmine';

gulp.task('test-client', ['build-js'], () => {
    return gulp.src('./foobar')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run' //watch
        }))
        .on('error', err => {
            console.log(`karma tests failed ${err}`);
        });
});

gulp.task('test-api', () => {
    return gulp.src('src/api/**/*.spec.js')
        .pipe(jasmine());
});

gulp.task('test', ['test-api', 'test-client']);