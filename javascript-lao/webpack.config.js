const path = require('path')

module.exports =
  { entry: './script/script.js'
  , devtool: 'eval-source-map'
  , output:
    { filename: 'bundle.js'
    , path: path.resolve(__dirname, 'dist')
    }
  }