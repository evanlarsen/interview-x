import gulp from 'gulp';
import * as project from '../project.json';

gulp.task('watch', function() {
    gulp.watch(project.client.src.html, ['build-html']);
    gulp.watch(project.client.src.scss, ['build-scss']);
    gulp.watch(project.client.src.js, ['build-client-js']);
    gulp.watch(project.server.src, ['build-server-js']);
    gulp.watch(project.api.src.js, ['build-api-js']);
});
