const path = require("path");
const pathResolve = pathUrl => path.join(__dirname, pathUrl)
module.exports = {
    resolve: {
        alias:  {
            '@@': pathResolve('.'),
            '@': pathResolve('src'),
            '@assets': pathResolve('src/assets'),
            '@common': pathResolve('src/common'),
            '@components': pathResolve('src/components'),
            '@hooks': pathResolve('src/hooks'),
            '@pages': pathResolve('src/pages'),
            '@store': pathResolve('src/store'),
            '@utils': pathResolve('src/utils'),
            '@styles': pathResolve('src/styles'),
            '@api': pathResolve('src/api')
        }
    }
}
