var gulp    = require('gulp'),
    cover   = require('gulp-coverage'),
    mocha   = require('gulp-mocha');

gulp.task('cover', function () {
    return gulp.src('test/api/*/*.js', {read: false})
        .pipe(cover.instrument({
            pattern: ['api/controllers/*.js'],
            debugDirectory: 'debug'
        }))
        .pipe(mocha({timeout: 10000}))
        .pipe(cover.gather())
        .pipe(cover.format())
        .pipe(gulp.dest('reports'));
});

gulp.task('test', function () {
    return gulp.src('test/api/controllers/*.js', {read: false})
        .pipe(mocha({reporter: 'spec', timeout: 10000}));
});