import gulp from 'gulp';
import browserify from 'browserify';
import ngAnnotate from 'gulp-ng-annotate';
import vinylBuffer from 'vinyl-buffer';
import CacheBuster from 'gulp-cachebust';
import vinylSourceStream from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import gutil from 'gulp-util';
import babelify from 'babelify';
import * as project from '../project.json';

let cachebust = new CacheBuster();

gulp.task('build-js', ['jshint'], function() {
    var b = browserify({
        entries: project.src.entry,
        debug: true
    }).transform(babelify.configure({
        // configure babel here
        // https://babeljs.io/docs/usage/options/
        presets:['es2015']
    }));

    return b.bundle()
        .pipe(vinylSourceStream(project.out.jsout))
        .pipe(vinylBuffer())
        //.pipe(cachebust.resources())
        .pipe(sourcemaps.init({
            loadMaps: true // Load the sourcemaps browserify already generated
        }))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./', {includeContent: true}))
        .pipe(gulp.dest('./'));
});