var path = require('path');
var baseConfig = {
    src: path.resolve(__dirname, '../src'),
    lessSrc: path.resolve(__dirname, '../src/less/index.less'),
    cssSrc: path.resolve(__dirname, '../src/css/*.css'),
    backendTplSrc: path.resolve(__dirname, '../src/backend_templates/**.html'),
    frontendTplSrc: path.resolve(__dirname, '../src/templates/**/*.html'),
    imgSrc: path.resolve(__dirname, '../src/img/*'),
    dist: path.resolve(__dirname, '../dist/')
}
module.exports = {
    base: baseConfig,
    build: {
        dist: path.resolve(__dirname, '/path/to/static/[project_name]')
    },
    prePublish: {
        dist: path.resolve(__dirname, '../dist/')
    },
    preBuild: {
      assetsPublicPath: '/static/[project_name]/'
    }
}
