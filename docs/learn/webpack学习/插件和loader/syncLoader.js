//  同步loader
const loaderUtils = require('loader-utils')
// 利用loader-utils获取loader options里面的配置
// module.exports = function (source) {
//     const options = loaderUtils.getOptions(this)
//     console.log(options)
//     source += options.message
//     // 可以传递更详细的信息
//     this.callback(null, source)
// }

// 异步loader
module.exports = function (source) {
    
    const options = loaderUtils.getOptions(this)
    console.log('source', source)
    console.log('options', options)
    // console.log('this', this)
    const asyncfunc = this.async()
    setTimeout(() => {
        source += '走上人生颠覆'
        asyncfunc(null, source)
    }, 5000)
}
