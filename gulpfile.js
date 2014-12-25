var gulp = require('gulp'),
	gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins();

// 编译sass
gulp.task('sass', function(){
	gulp.src('web/styles/sass/*.scss')
	.pipe(plugins.watch('web/styles/sass/*.scss'))
	.pipe(plugins.sass())
	.pipe(gulp.dest('web/styles/css'));
});