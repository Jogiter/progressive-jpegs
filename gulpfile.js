const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

gulp.task('images', function () {
    return gulp.src('images/*.jpg')
        .pipe(imagemin([
            imagemin.jpegtran({progressive: true})
        ]))
        .pipe(gulp.dest('dist/progressive/'));
});

gulp.task('webp', () =>
    gulp.src('images/*.jpg')
    .pipe(webp({
        quality: 80,
        preset: 'photo',
        method: 6
    }))
    .pipe(gulp.dest('dist/webp/'))
);
