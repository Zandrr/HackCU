var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var serve = require('gulp-serve');
var rimraf = require('rimraf');

gulp.task('css', function() {
   gulp.src('css/**/*').pipe(gulp.dest('dist/css'));
});

gulp.task('fonts', function() {
   gulp.src('fonts/**/*').pipe(gulp.dest('dist/fonts'));
});

gulp.task('html', function() {
   gulp.src('html/**/*').pipe(gulp.dest('dist/html'));
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

gulp.task('index.html', function() {
   gulp.src('index.html').pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
   gulp.src('js/**/*').pipe(gulp.dest('dist/js'));
});

gulp.task('less', function() {
   gulp.src('less/**/*').pipe(gulp.dest('dist/less'));
});

gulp.task('mail', function() {
   gulp.src('mail/**/*').pipe(gulp.dest('dist/mail'));
});

gulp.task('sitemap.xml', function() {
   gulp.src('sitemap.xml').pipe(gulp.dest('dist'));
});

gulp.task('serve', serve({
    root: __dirname,
    port: 8000
}));

gulp.task('serve:dist', serve({
    root: 'dist',
    port: 8000
}));

gulp.task('default', function(){
  var options = {
    url: 'http://localhost:3000'
  };
  gulp.src('./index.html')
});

gulp.task('clean', function (cb) { rimraf('dist', cb); });

gulp.task('build', [
    'css',
    'fonts',
    'html',
    'img',
    'index.html',
    'js',
    'less',
    'mail',
    'sitemap.xml'
]);
