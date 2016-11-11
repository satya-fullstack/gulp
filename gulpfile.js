var gulp = require('gulp'),
    uglify = require('gulp-uglify',
    sass = require('gulp-ruby-sass')); //importing gulp node package

//Scripts Task
//Uglifies
gulp.task('scripts',function(){
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
});

gulp.task('styles',function(){
    gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
});

//Watch Task
//Watches JS
gulp.task('watch',function(){
   gulp.watch('js/*.js',['scripts']);
});

gulp.task('default',['scripts','styles','watch']);
//gulp.task('default',function(){
//    gulp.src('js/*.js')
//        .pipe(uglify())
//        .pipe(gulp.dest('minjs'))
//    //console.log('Hello World');
//});



