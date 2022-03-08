const pathSrc = "./src",
      pathDest = "./public";

export default {
   root: pathDest,
   html: {
      src: pathSrc + "/html/*.html",
      watch: pathSrc + "/html/**/*.html",
      dest: pathDest
   },
   twig: {
      src: pathSrc + "/twig/**/*.twig",
      watch: pathSrc + "/twig/**/*.twig",
      dest: pathDest,
      email: pathSrc + "/twig/emails/**/*.twig",
      pages: pathSrc + "/twig/pages/**/*.twig"
   },
   scss: {
      src: pathSrc + "/scss/*.{scss,sass}",
      watch: pathSrc + "/scss/**/*.{scss,sass}",
      dest: pathDest + "/css"
   },
   js: {
      src: pathSrc + "/js/*.js",
      watch: pathSrc + "/js/**/*.js",
      dest: pathDest + "/js"
   },
   img: {
      src: pathSrc + "/img/*.{jpg,jpeg,png,gif,svg}",
      watch: pathSrc + "/img/**/*.{jpg,jpeg,png,gif,svg}",
      dest: pathDest + "/img"
   },
   font: {
      src: pathSrc + "/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
      watch: pathSrc + "/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
      dest: pathDest + "/fonts"
   }
}