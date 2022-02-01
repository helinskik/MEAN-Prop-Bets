var gulp = require('gulp');
sequence = require('run-sequence');

gulp.task('copy:libs', function (done) {
    sequence('clean', 'copy:vendor', 'copy:rxjs', 'copy:angular', done);
})

gulp.task('clean', function (done) {
    sequence('clean', 'copy:vendor', 'copy:rxjs', 'copy:angular', done);
})