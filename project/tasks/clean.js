import gulp from 'gulp';
import del from 'del';
import * as project from '../project.json';

gulp.task('clean', (cb) => {
    return del([project.out.dist], cb);
});