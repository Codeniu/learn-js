const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')

const mime = require('mime') // 引入mime包

const server = http.createServer((req, res) => {
  let filePath = path.resolve(__dirname, path.join('www', req.url))

  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath)
    if (stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html')
    }
    if (fs.existsSync(filePath)) {
      // 1 MIME 类型
      // const { ext } = path.parse(filePath)
      // res.writeHead(200, {
      //   'Content-Type': mime.getType(ext),
      // })

      // const content = fs.readFileSync(filePath)
      // return res.end(content)

      // ------------------------------------------------------------------------

      // 2 stream 流
      // const { ext } = path.parse(filePath)
      // res.writeHead(200, {
      //   'Content-Type': mime.getType(ext),
      // })

      // const fileStream = fs.createReadStream(filePath) // 以流的方式读取文件内容
      // fileStream.pipe(res) // pipe 方法可以将两个流连接起来，这样数据就会从上游流向下游

      // ------------------------------------------------------------------------

      // 3 协商缓存与强缓存
      const { ext } = path.parse(filePath)
      const stats = fs.statSync(filePath)
      const timeStamp = req.headers['if-modified-since']
      let status = 200
      if (timeStamp && Number(timeStamp) === stats.mtimeMs) {
        // 如果timeStamp和stats.mtimeMS相等，说明文件内容没有修改
        status = 304
      }
      res.writeHead(status, {
        'Content-Type': mime.getType(ext),
        'Cache-Control': 'max-age=86400', // 强缓存一天
        'Last-Modified': stats.mtimeMs, // 协商缓存响应头
      })
      if (status === 200) {
        const fileStream = fs.createReadStream(filePath)
        fileStream.pipe(res)
      } else {
        res.end() // 如果状态码不是200，不用返回Body
      }

      // ------------------------------------------------------------------------
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.end('<h1>Not Found</h1>')
  }
})

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
})

server.listen(8080, () => {
  console.log('opened server on', server.address())
})
