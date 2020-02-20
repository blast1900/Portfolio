var gulp = require('gulp');

//ブラウザリロード
var browserSync = require("browser-sync").create();

function buildServer(done){
  browserSync.init({
      server: {
          baseDir: "./src/",
          index: "index.html"
      }
  });
  done();
}

function browserReload(done){
  browserSync.reload();
  done();
}

// sassコンパイル
var sass = require('gulp-sass');
var plumber = require('gulp-plumber'); 
var postcss = require('gulp-postcss');
var postcssImport = require('postcss-import');
var autoprefixer = require('autoprefixer');
var sassGlob = require('gulp-sass-glob');


function sassCompile(done){
  gulp.src('./src/sass/*.scss', {sourcemaps: true})// コンパイルするscssのパスを指定
  .pipe(plumber()) //エラーによる強制停止を回避
  .pipe(sassGlob()) //パーシャルファイル一括読み込み
  .pipe(sass({ //sassコンパイル
    style: 'expanded' // 整形方式指定
  }))
  .pipe(postcss([
    postcssImport(),//cssファイルをコンパイルimport
    autoprefixer()//ベンダープレフィックス挿入
  ]))
  .pipe(gulp.dest('./src/css', {sourcemaps: './'}));// cssファイルとソースマップの書き出し先指定
  done();
}

// pugコンパイル
var pug = require('gulp-pug');

function pugCompile(done){
  gulp.src(['./src/pug/**/*.pug', '!./src/pug/**/_*.pug'])// コンパイル対象指定
  .pipe(plumber()) //エラーによる強制停止を回避
  .pipe(pug({ //pugコンパイル
    pretty: true // 整形有無指定
  }))
  .pipe(gulp.dest('./src'));// 書き出し先指定
  done();
}

// 監視ファイル
function watchFiles(done){
  gulp.watch("./src/sass/**", sassCompile);
  gulp.watch("./src/pug/**", pugCompile);
  gulp.watch("./src/*.html", browserReload);
  gulp.watch("./src/css/*.css", browserReload);
  gulp.watch("./src/js/*.js", browserReload);
  done();
}

// デフォルトタスク
exports.default = gulp.series(buildServer, watchFiles, function(done){
    done();
});