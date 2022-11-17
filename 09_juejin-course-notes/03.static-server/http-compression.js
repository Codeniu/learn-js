const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')

const mime = require('mime') // 引入mime包

const server = http.createServer((req, res) => {
  let filePath = path.resolve(__dirname, path.join('www', req.url))

  if (fs.existsSync(filePath)) {
    const { ext } = path.parse(filePath)
    const stats = fs.statSync(filePath)
    const timeStamp = req.headers['if-modified-since']
    let status = 200
    if (timeStamp && Number(timeStamp) === stats.mtimeMs) {
      status = 304
    }

    const mimeType = mime.getType(ext)
    const responseHeaders = {
      'Content-Type': mimeType,
      'Cache-Control': 'max-age=86400', // 缓存一天
      'Last-Modified': stats.mtimeMs,
    }

    const compress = /^(text|application)\//.test(mimeType)

    if (compress) {
      responseHeaders['Content-Encoding'] = 'deflate'
    }
    res.writeHead(status, responseHeaders)

    if (status === 200) {
      const fileStream = fs.createReadStream(filePath)
      fileStream.pipe(zlib.createDeflate()).pipe(res)
    } else {
      res.end()
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
