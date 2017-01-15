import gulp from 'gulp';
import jshint from 'gulp-jshint';
import * as project from '../project.json';

let jshintOptions = {
    'esversion': 6
};

gulp.task('jshint-client', () => {
    return gulp.src([project.client.src.js, 
        `!${project.client.src.thirdparty}/**/*.js`,
        `!${project.client.src.tests}`])
        .pipe(jshint(jshintOptions))
        .pipe(jshint.reporter('default'));
});

gulp.task('jshint-api', () => {
    return gulp.src([project.api.src.js, `!${project.api.src.tests}`])
        .pipe(jshint(jshintOptions))
        .pipe(jshint.reporter('default'));
});

gulp.task('jshint', ['jshint-client', 'jshint-api']);