import gulp from 'gulp';
import ngAnnotate from 'gulp-ng-annotate';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import gutil from 'gulp-util';
import babel from 'gulp-babel';
import * as project from '../project.json';

gulp.task('build-server-js', () => {
    return gulp.src(project.server.src)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./', {includeContent: true}))
        .pipe(gulp.dest(project.server.out));
});

gulp.task('build-api-js', () => {
    return gulp.src([
        project.api.src.js,
        `!${project.api.src.tests}`])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./', {includeContent: true}))
        .pipe(gulp.dest(project.api.out.dist));
});

gulp.task('move-3rdparty-client-libs', () => {
    return gulp.src(`${project.client.src.thirdparty}/**/*.js`)
        .pipe(gulp.dest(project.client.out.thirdpartydist))
});

gulp.task('build-client-js', () => {
    return gulp.src([
        project.client.src.js, 
        `!${project.client.src.thirdparty}/**/*.js`,
        `!${project.client.src.tests}`])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(ngAnnotate())
        //.pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./', {includeContent: true}))
        .pipe(gulp.dest(project.client.out.dist));
});

gulp.task('build-js', ['jshint', 'build-client-js', 'build-api-js', 'build-server-js', 'move-3rdparty-client-libs']);