import { readFile } from 'fs'

readFile('../lib/corpus/data.json', { encoding: 'utf-8' }, (err, data) => {
  if (!err) {
    console.log(data)
  } else {
    console.log(err)
  }
})
