const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

gulp.task('images', function () {
    return gulp.src('images/*')
        .pipe(imagemin([
            imagemin.jpegtran({progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
        ]))
        .pipe(gulp.dest('dist/progressive/'));
});

gulp.task('webp', () =>
    gulp.src('images/*')
    .pipe(webp({
        quality: 80,
        preset: 'photo',
        method: 6
    }))
    .pipe(gulp.dest('dist/webp/'))
);
