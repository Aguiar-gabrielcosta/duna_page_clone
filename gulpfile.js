const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

function sassCompiler() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./dist/styles/'))
}

function minifyImages() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images/'))
}

function minifyJS() {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts/'))
}

exports.default = gulp.parallel(sassCompiler, minifyImages, minifyJS)
exports.watch = function () {
    gulp.watch('./src/styles/**/*.scss', {ignoreInitial: false}, gulp.parallel(sassCompiler))
    gulp.watch('./src/scripts/**/*.js', {ignoreInitial: false}, gulp.parallel(minifyJS))
}