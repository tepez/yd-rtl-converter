var Gulp = require('gulp'),
  GulpLoadPlugins = require('gulp-load-plugins'),
  plugins = GulpLoadPlugins();

Gulp.task('default', ['flip-css', 'copy-others']);

Gulp.task('flip-css', function () {
  return Gulp.src('src/**/*.css')
    .pipe(plugins.cssjanus({}))
    .pipe(Gulp.dest('dst'));
});

Gulp.task('copy-others', function () {
  return Gulp.src(['src/**/*', '!src/**/*.css'])
    .pipe(Gulp.dest('dst'));
});



