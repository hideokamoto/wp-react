var gulp = require('gulp');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var source = require('vinyl-source-stream')

gulp.task('default', function(){
  return browserify({
            entries: './src/app.js',
            transform: ['reactify']
          })
          .bundle()
          .pipe(source('bundle.js'))
          .pipe(gulp.dest('./build'));
});
