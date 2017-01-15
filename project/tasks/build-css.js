import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import CacheBuster from 'gulp-cachebust';
import * as project from '../project.json';

let cachebust = new CacheBuster();

gulp.task('build-css', function() {
    return gulp.src(project.src.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        //.pipe(cachebust.resources())
        .pipe(sourcemaps.write(project.out.dist))
        .pipe(gulp.dest(project.out.dist));
});