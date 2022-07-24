// postcss.config.js
const dotenvCra = require("dotenv-cra");
const {join} = require('path')
process.env.NODE_ENV = process.env.NODE_ENV || "development";
dotenvCra.config();
//
module.exports = {
 plugins :{
  tailwindcss: {
    config: join(__dirname, 'tailwind.config.js'),
  },
  autoprefixer: {},
  
  ...(process.env.NODE_ENV === 'production'
    ? {
        '@fullhuman/postcss-purgecss': {
          content: [
            './components/**/*.{js,jsx,ts,tsx}',
            './pages/**/*.{js,jsx,ts,tsx}',
            './containers/**/*.{js,jsx,ts,tsx}'
          ],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }
      }
    : {})

}

}


