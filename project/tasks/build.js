import gulp from 'gulp';
import runSequence from 'run-sequence';
import * as project from '../project.json';

gulp.task('build', (cb) => {
    runSequence('clean', ['build-css','build-html', 'build-js'], cb);
});