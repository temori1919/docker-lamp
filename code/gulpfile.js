var gulp = require('gulp');
var phpunit = require('gulp-phpunit');
var configFile = require('config');

gulp.task('default', [
    'phpunit',
]);

// lead configuration
var observe = configFile.config.targets;
var cmd = configFile.config.phpunitCmd;
var file = configFile.config.phpunitFile;

gulp.task("watch", function () {
    var gaze_option = {
        debounceDelay: 1000 // wait 1 sec after the last run
    };
    gulp.watch(observe, [
        'phpunit',
    ], gaze_option);
});

gulp.task('phpunit', function () {
    var options = {debug: false};
    gulp.src(file)
    .pipe(phpunit(cmd, options, function(err, msg) {
    }));
});