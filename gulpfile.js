var gulp        = require('gulp'),
    webserver   = require('gulp-webserver'),
    sass        = require('gulp-sass'),
    cssmin      = require('gulp-cssmin'),
    uglify      = require('gulp-uglify'),
    imagemin    = require('gulp-imagemin'),
    spritesmith = require('gulp.spritesmith'),
    buffer      = require('vinyl-buffer'),
    merge       = require('merge-stream');

var ROOT_PATH       = './',
    SASS_PATH       = 'app/scss/**/*.scss',
    CSS_PATH        = 'public/css',
    JS_APP_PATH     = 'app/js/**/*.js';
    JS_PATH         = 'public/js',
    IMAGES_APP_PATH = 'app/images/*',
    IMAGES_PATH     = 'public/images',
    SPRITES_PATH    = 'app/sprites/*.png';

gulp.task('webserver', function() {
  gulp.src(ROOT_PATH)
    .pipe(webserver({
      livereload: true
    }));
});

gulp.task('sass', function() {
  gulp.src(SASS_PATH)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(CSS_PATH));
});

gulp.task('cssmin', function() {
  gulp.src(CSS_PATH + '/**/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest(CSS_PATH));
});

gulp.task('uglify', function() {
  gulp.src(JS_APP_PATH)
    .pipe(uglify())
    .pipe(gulp.dest(JS_PATH));
});

gulp.task('imagemin', function() {
  gulp.src(IMAGES_APP_PATH)
    .pipe(imagemin())
    .pipe(gulp.dest(IMAGES_PATH));
});

gulp.task('spritesmith', function() {
  var data = gulp.src(SPRITES_PATH)
    .pipe(spritesmith({
      imgName: 'sprites.png',
      imgPath: IMAGES_PATH + '/sprites.png',
      cssName: '_sprites.scss'
    }));

  var imgStream = data.img
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest(IMAGES_PATH));

  var cssStream = data.css
    .pipe(gulp.dest('app/scss'));

  return merge(imgStream, cssStream);
});

gulp.task('default', ['webserver'], function() {
  gulp.watch(SASS_PATH, ['sass']);
  gulp.watch(CSS_PATH + '/**/*.css', ['cssmin']);
  gulp.watch(JS_APP_PATH, ['uglify']);
  gulp.watch(IMAGES_APP_PATH, ['imagemin']);
  gulp.watch(SPRITES_PATH, ['spritesmith']);
});