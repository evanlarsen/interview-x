import gulp from 'gulp';
import * as project from '../project.json';

gulp.task('watch', function() {
    gulp.watch(project.src.html, ['build-html']);
    gulp.watch(project.src.scss, ['build-css']);
    gulp.watch(project.src.js, ['build-js']);
    gulp.watch(project.src.index, ['build-index']);
});
