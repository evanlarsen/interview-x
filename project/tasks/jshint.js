import gulp from 'gulp';
import jshint from 'gulp-jshint';
import * as project from '../project.json';

let jshintOptions = {
    'esversion': 6
};

gulp.task('jshint', () => {
    return gulp.src(project.src.js)
        .pipe(jshint(jshintOptions))
        .pipe(jshint.reporter('default'));
});