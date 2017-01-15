
import gulp from 'gulp';
import karma from 'gulp-karma';

gulp.task('test', ['build-js'], () => {
    return gulp.src('./foobar')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', err => {
            console.log(`karma tests failed ${err}`);
        });
});