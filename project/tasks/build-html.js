import gulp from 'gulp';
import ngHtml2Js from 'gulp-ng-html2js';
import concat from 'gulp-concat';
import path from 'path';
import * as project from '../project.json';

// fills in the Angular template cache, to prevent loading the html templates via
// separate http requests

gulp.task('build-index', () => {
    return gulp.src(project.src.index)
        .pipe(gulp.dest(project.out.dist));
});

gulp.task('build-html', ['build-index'], function() {
    return gulp.src(project.src.html)
        .pipe(ngHtml2Js({
            moduleName: function (file) {
                var pathParts = file.path.split(path.sep);
                var folder = pathParts[pathParts.length - 2];
                return folder.replace(/-[a-z]/g, function (match) {
                    return match.substr(1).toUpperCase();
                });
            }
        }))
        .pipe(concat("templateCachePartials.js"))
        .pipe(gulp.dest(project.out.dist));
});