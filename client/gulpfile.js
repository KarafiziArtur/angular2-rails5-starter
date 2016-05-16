let gulp = require('gulp');

// HTML copy task
gulp.task('html', function() {
  return gulp.src('./src/app/**/*.html')
      .pipe(gulp.dest('../public/app'));
});

// Watching
gulp.task('watch', function() {
  gulp.watch(['./src/app/**/*.html'], ['html']);
});

// Default task
gulp.task('default',['html', 'watch']);
