import gulp from 'gulp';
import del from 'del';
import * as project from '../project.json';

gulp.task('clean-client', cb => {
    return del([project.client.out.dist, "dist/server.js", "dist/server.js.map"], cb);
});

gulp.task('clean-api', cb => {
    return del([project.api.out.dist], cb);
});

gulp.task('clean', ['clean-client', 'clean-api']);