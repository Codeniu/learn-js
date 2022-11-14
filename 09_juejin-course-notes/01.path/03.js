import { readFileSync, mkdir } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const url = import.meta.url

const path = resolve(dirname(fileURLToPath(url)), '../lib/corpus/data.json')

const data = readFileSync(path, { encoding: 'utf-8' })

console.log(data)

mkdir(resolve(dirname(fileURLToPath(url)), 'test'), err => {
  if (!err) {
    console.log('yes')
  } else {
    console.log(err)
  }
})
