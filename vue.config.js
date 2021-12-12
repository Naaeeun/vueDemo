module.exports = {
    publicPath:'./',
    pages:{
        index:{
            entry:"src/main.js",
            title:"借口", //打包后网站名
        },
    },
    devServer:{
        proxy:{
            '/api':{
                target:'http://web.juhe.cn/constellation/getAll',
                pathRewrite:{'^/api':''}//重写地址
            },
            '/mv':{
                target:'https://api.iyk0.com/kgmv',
                pathRewrite:{'^/mv':''}//重写地址
            },
            '/video':{
                target:'https://api.iyk0.com/dsp',
                pathRewrite:{'^/video':''}//重写地址
            },
        }
    },
    configureWebpack:{
        externals: {
            BMap: 'BMap',
            BMapLib:'BMapLib',
            google:"google"
        },
    }
    
}
  