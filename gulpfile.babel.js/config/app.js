import news from "../data/news.json";

const isProd = process.argv.includes("--production"),
      isDev = !isProd,
      isEmail = process.argv.includes("--email");

export default {

   isProd: isProd,
   isDev: isDev,
   isEmail: isEmail,

   htmlmin: {
      collapseWhitespace: isProd,
      data: {
         news: news
      }
   },

   twig: {
      data: {
         title: 'Gulp and Twig',
         benefits: [
             'Fast',
             'Flexible',
             'Secure'
         ]
     },
     setting: {
        email: isEmail
     }
   },

   imagemin: {
      vebrose: true
   },

   inlineCss: {
      applyStyleTags: true,
      applyLinkTags: true,
      removeStyleTags: true,
      removeLinkTags: true
   },

   webpack: {
      mode: isProd ? "production" : "development"
   },

   fonter: {
      formats: ["ttf", "woff", "eot", "svg"]
   }
}