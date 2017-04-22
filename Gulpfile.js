const gulp     = require('gulp');
const testcafe = require('gulp-testcafe');

gulp.task('run-testcafe-tests', () => {
    return gulp
        .src('tests/busca_test.js')
        .pipe(testcafe({ browsers: ['chrome', 'firefox', 'safari'] }));
});
