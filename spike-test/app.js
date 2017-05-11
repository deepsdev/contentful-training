const SpikeUtils = require('spike-util')
const Contentful = require('spike-contentful')
const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const locals = {}
module.exports = {
  plugins: [
    new Contentful({
      addDataTo: locals,
      accessToken: 'f7a6daf40798c3f14c84806d2a694d77e869650dd87c614d80e35432740702f3',
      spaceId: '8djth153uid9',
      contentTypes: [
        {
          name: 'menu',
          id: 'menu',
          filters: {
            order: 'fields.menuOrder'
        },
          
        transform: (post) => {
            // do your transformation here...
            return post
        },
        template: {
            path: 'views/index.sgr',
            output: (post) => { 
              return `index.html` 
            }
          }
        },
        {
            name: 'contentText',
            id: 'contentText',
            transform: (post) => {
              // do your transformation here...
              return post
            },
            template: {
              path: 'views/index.sgr',
              output: (post) => { 
                console.log(post)
                return `index.html` 
              }
            }

        },
      ]
    })
  ],
  devtool: 'source-map',
  matchers: {
    html: '*(**/)*.sgr',
    css: '*(**/)*.sss'
  },
  ignore: ['**/*.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    locals
  }),
  postcss: cssStandards(),
  babel: jsStandards()
}
