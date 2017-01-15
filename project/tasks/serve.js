
import gulp from 'gulp';
import browserSync from 'browser-sync';
import nodemon from 'gulp-nodemon';
import runSequence from 'run-sequence';
import * as project from '../project.json';

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: `http://localhost:${project.server.port}`,
        files: ["dist/**/*.*"],
        browser: "chrome",
        port: 7000,
	});
});

gulp.task('nodemon', function (cb) {
	
	var started = false;
	
	return nodemon({
		script: 'dist/server.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		if (!started) {
			cb();
			started = true; 
		} 
	});
});

gulp.task('serve', cb => {
    runSequence('clean', 'build', ['watch','browser-sync'], cb);
});