import gulp from 'gulp';
import runSequence from 'run-sequence';
import CacheBuster from 'gulp-cachebust';
import * as project from '../project.json';

let cachebust = new CacheBuster();

gulp.task('build', (cb) => {
    runSequence('clean', ['build-css','build-html', 'build-js'], cb);
});