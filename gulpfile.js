function defaultTask(cb) {
  // place code for your default task here
  console.log('hello');
  cb();
}

let gulp = require('gulp');
let uglify = require('gulp-uglify-es').default;
let pipeline = require('readable-stream').pipeline;
let rename = require("gulp-rename");
let gulpsync = require("gulp-sync")(gulp);
let exec = require('child_process').exec;

gulp.task('copy-mock', function() {
	return copyFiles("data/", "data/", "*.json");
});
 
 gulp.task('copy-template', function() {
	return copyFiles("", "", "*.html");
	
});

gulp.task('copy-style', function() {
	return copyFiles("style/", "style/", "*.css");
	
});


gulp.task('copy-server', function() {
	return copyFiles("", "", "*.js");
	
});

gulp.task('server', function (cb) {
  exec('node server-local.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
  
});

function copyFiles(src, dest, extension) {
	
	return gulp.src("src/"+src+""+extension)
        .pipe(gulp.dest("dist/"+dest));
}

gulp.task('compress', function () {
  return gulp.src("src/script/product.js")
        .pipe(uglify(/* options */))
        .pipe(gulp.dest("dist/script/"));
});

gulp.task('release', gulp.series(
'copy-mock',
'copy-template',
'copy-style',
'copy-server',
'compress'
));

gulp.task('start-local', gulp.series(
'copy-mock',
'copy-template',
'copy-style',
'compress',
'copy-server',
'server'));

exports.default = defaultTask