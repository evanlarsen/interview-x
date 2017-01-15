import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import * as project from '../project.json';

gulp.task('build-scss', () => {
    return gulp.src(project.client.src.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write(project.client.out.dist))
        .pipe(gulp.dest(project.client.out.dist));
});

gulp.task('build-css', ['build-scss'], () => {
    return gulp.src(project.client.src.css)
        .pipe(gulp.dest(project.client.out.dist));
});