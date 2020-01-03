var postcss = require("gulp-postcss");
var gulp = require("gulp");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var sass = require("gulp-sass");

gulp.task("sass", function() {
  var plugins = [autoprefixer({ browsers: ["last 1 version"] })];
  return gulp
    .src("index.scss")
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(gulp.dest("./dest"));
});

gulp.task("watch:sass", function() {
  gulp.watch("**/*.scss", gulp.series("sass"));
});
