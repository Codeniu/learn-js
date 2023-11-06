const fs = require('fs')
const resolve = require('path').resolve

function saveCorpus(title) {
  const outputDir = resolve(__dirname, 'output');
  const outputFile = resolve(outputDir, `${title}.txt`);

  // 检查outputDir是否存在，没有则创建一个
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  let text = '';

  for (let i = 1000; i <= 2000; i++) {
    text += `test${String(i).padStart(3, '0')}` + '\n'
  }

  fs.writeFileSync(outputFile, text); // 将text写入outputFile文件中

  return outputFile;
}

saveCorpus('1000username')