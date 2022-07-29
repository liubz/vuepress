const fs = require('fs')
// 同步读取文件
const data = fs.readFileSync('./index.html', 'utf-8')
console.log('data', data)
fs.readFile('./index.html', 'utf-8', (err, data) => {
  if (err) {
    console.log('读取失败')
  }
  // 文件数据
  console, log('data', data)
})
// 写入数据
fs.writeFile('./test.txt', '12312-123', (err) => {
  if (err) throw new Error('写入失败')
})
// 最加数据
fs.appendFile('')
// 读取目录
fs.readdir()

// 查看目录、文件信息

fs.stat
fs.lstat

// 检查文件获取目录是否存在

fs.exists(path, cb)
// t文件的访问时间及修改时间均修改为系统当前时间。
fs.utimes()
