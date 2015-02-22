var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var serve = require('gulp-serve');
var rimraf = require('rimraf');

gulp.task('copy', function() {
  gulp.src('{css,html,fonts,js,mail}/**/*').pipe(gulp.dest('dist'));
});

gulp.task('img', function () {
  return gulp.src('img/**/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('root', function() {
  gulp.src('{index,sitemap}.{ht,x}ml').pipe(gulp.dest('dist'));
});

gulp.task('clean', function (cb) { rimraf('dist', cb); });

gulp.task('serve', serve({root: __dirname, port: 8000}));

gulp.task('serve:dist', ['default'], serve({root: 'dist', port: 8000}));

gulp.task('build', ['copy', 'img', 'root']);

gulp.task('default', ['clean'], function () { gulp.start('build'); });
