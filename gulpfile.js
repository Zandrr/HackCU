var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var serve = require('gulp-serve');
var del = require('del');

gulp.task('css', function() {
   gulp.src('css/**/*').pipe(gulp.dest('dist/css'));
});

gulp.task('fonts', function() {
   gulp.src('fonts/**/*').pipe(gulp.dest('dist/fonts'));
});

gulp.task('font-awesome-4.1.0', function() {
   gulp.src('font-awesome-4.1.0/**/*').pipe(gulp.dest('dist/font-awesome-4.1.0'));
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

gulp.task('serve', serve(__dirname));

gulp.task('serve:dist', serve('dist'));

gulp.task('clean', function (cb) { del(['dist'], cb); });

gulp.task('build', [
    'css',
    'font-awesome-4.1.0',
    'fonts',
    'html',
    'img',
    'index.html',
    'js',
    'less',
    'mail',
    'sitemap.xml'
]);
