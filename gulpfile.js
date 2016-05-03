var gulp = require('gulp');

var angularFilesort = require('gulp-angular-filesort'),
    inject = require('gulp-inject'),
    bowerFiles = require('main-bower-files'),
    es = require('event-stream');

gulp.task('filesort', function() {

    var target = gulp.src('./app/index.html');

    return target

      // Inject bower dependencies
      .pipe(inject(gulp.src(bowerFiles(), { read: false}), { name: 'bower'}))
      // Inject app dependecies
      .pipe(inject(
        gulp.src([
          './app/components/**/*.js'
        ])
        .pipe(angularFilesort())
      ))
      .pipe(gulp.dest('./app'));
});

gulp.task('default', ['filesort']);
