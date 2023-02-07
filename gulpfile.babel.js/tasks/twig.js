import gulp from "gulp";

// Config
import path from "../config/path.js";
import app from "../config/app.js";

// Plugins
import loadPlugins from "gulp-load-plugins";
import gulpif from "gulp-if";
import replace from "gulp-replace";

const gp = loadPlugins();

export default () => {
   return gulp.src(path.twig.src)
      .pipe(gp.plumber({
         errorHandler: gp.notify.onError(error => ({
            title: "TWIG",
            message: error.message
         }))
      }))
      .pipe(gp.size({
         title: `Before compression.`
      }))
      .pipe(gp.twig({
         data: app.twig.data
      }))
      // .pipe(gulpif(app.twig.setting.email, gp.inlineCss(app.inlineCss)))
      // .pipe(gulpif(!app.twig.setting.email, gp.webpHtml()))
      // .pipe(gulpif(app.isProd, gp.htmlmin(app.htmlmin)))
      // .pipe(gulpif(app.isProd && !app.twig.setting.email, gp.htmlmin(app.htmlmin)))
      .pipe(gulpif(app.isProd, replace('.css', '.min.css')))
      .pipe(gulpif(app.isProd, replace('.js', '.min.js')))
      .pipe(gp.size({
         title: "After compression"
      }))
      .pipe(gulp.dest(path.html.dest));
}