const gulp = require('gulp');
const notify = require('gulp-notify');  // �G���[�ʒm
const plumber = require('gulp-plumber'); // �G���[���̃^�X�N��~�h�~
const debug = require('gulp-debug'); // ���O�\��
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require("gulp-sass-glob-use-forward"); // sass��use��forward���g����悤�ɂ���
const dartSass = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer'); // �x���_�[�v���t�B�b�N�X�t�^
const sourcemaps = require('gulp-sourcemaps'); // �\�[�X�}�b�v�o��


const paths = {
  scss: {
    src: './sass/**/*.scss', // �R���p�C���Ώ�
    dest: './www/css' // �o�͐�
  }
}

/**
 * scss�^�X�N�Ŏ��s����֐�
 */
function scss() {
  return gulp.src(paths.scss.src)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sassGlob())                  // glob�@�\���g����@use��@forward���ȗ�����
    .pipe(sourcemaps.init())
    .pipe(dartSass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer({
      cascade: true
    }))
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(debug({title: 'scss dest:'}));
}

/**
 * watch�^�X�N�Ŏ��s����֐�
 */
function watch() {
  return gulp.watch(paths.scss.src, gulp.series(scss))
}

exports.scss = scss; // scss�^�X�N
exports.watch_sass = gulp.series(watch); // watch�^�X�N
exports.default = gulp.series(scss); // default�^�X�N
