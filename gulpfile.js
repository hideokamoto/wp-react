var gulp = require('gulp');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var source = require('vinyl-source-stream')

gulp.task('default',
  ['browser-sync'],function(){
    gulp.watch("./*.html", ['bs-reload']);
    gulp.watch("./src/app.js",['browserify']);
    gulp.watch('./build/bundle.js',['bs-reload']);
  }
);

// Static server
gulp.task('browser-sync', function() {
   browserSync({
       server: {
           baseDir: "./"
       }
   });
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('browserify', function(){
  return browserify({
            entries: './src/app.js',
            transform: ['reactify']
          })
          .bundle()
          .pipe(source('bundle.js'))
          .pipe(gulp.dest('./build'));
})
