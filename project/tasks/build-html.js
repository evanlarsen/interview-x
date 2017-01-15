import gulp from 'gulp';
import * as project from '../project.json';

gulp.task('build-html', function() {
    return gulp.src(project.client.src.html)
        .pipe(gulp.dest(project.client.out.dist));
});