import { readFile } from 'fs'

readFile('../lib/corpus/data.json', (err, data) => {
  if (!err) {
    console.log(data.toString('utf-8'))
  } else {
    console.log(err)
  }
})
