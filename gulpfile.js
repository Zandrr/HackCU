var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var serve = require('gulp-serve');
var imageResize = require('gulp-image-resize');
var clean = require('gulp-clean');
var parallel = require('concurrent-transform');
var os = require('os');
var merge = require('merge-stream');
var revall = require('gulp-rev-all');
var awspublish = require('gulp-awspublish');
var cloudfront = require("gulp-cloudfront");

gulp.task('copy', function() {
  gulp.src('{css,html,fonts,js,mail}/**/*').pipe(gulp.dest('dist'));
});

gulp.task('img:compress', function() {
  var compressed = gulp.src('img/**/*.{jpg,jpeg,png,gif}')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [
        {removeViewBox: false},
        {removeUselessStrokeAndFill: false},
        {removeEmptyAttrs: false}
      ],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('.tmp/img'));

  var uncompressed = gulp.src('img/**/*.svg').pipe(gulp.dest('.tmp/img'));

  return merge(compressed, uncompressed);
});

gulp.task('img:resize:judges', ['img:compress'], function() {
  return gulp.src('.tmp/img/judges/*')
    .pipe(parallel(
      imageResize({width: 250}),
      os.cpus().length
    ))
    .pipe(gulp.dest('.tmp/img/judges'));
});

gulp.task('img:resize:header', ['img:compress'], function() {
  return gulp.src('.tmp/img/header-bg.png')
    .pipe(imageResize({width: 1500}))
    .pipe(gulp.dest('.tmp/img'));
});

gulp.task('img', ['img:resize:header', 'img:resize:judges'], function() {
  return gulp.src('.tmp/img/**/*')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('publish', function() {
  var aws = {
    "key": process.env.AWS_ACCESS_KEY,
    "secret": process.env.AWS_SECRET_KEY,
    "bucket": "hackcu",
    "distributionId": "E2EHAFBXJFNUF"
  };

  var headers = {"x-amz-acl" : "public-read"}

  var publisher = awspublish.create(aws);

  return gulp.src('dist/**/*')
    .pipe(revall())
    .pipe(awspublish.gzip())
    .pipe(parallel(publisher.publish(headers), os.cpus().length))
    .pipe(publisher.cache())
    .pipe(publisher.sync())
    .pipe(awspublish.reporter())
    .pipe(cloudfront(aws));
});

gulp.task('root', function() {
  gulp.src('{index,sitemap}.{ht,x}ml').pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
  return gulp.src('{dist,.tmp}', {read: false})
    .pipe(clean());
});

gulp.task('serve', serve({root: __dirname, port: 8000}));

gulp.task('serve:dist', ['default'], serve({root: 'dist', port: 8000}));

gulp.task('build', ['copy', 'img', 'root']);

gulp.task('default', ['clean'], function() { gulp.start('build'); });
