#!/usr/bin/env node
const fs = require('fs')
const fsPromises = fs.promises
const path = require('path')

const srcDir = path.join(__dirname, 'data')
const newDir = path.join(__dirname, 'docs/api')

async function copyDir (dir = '/') {
  const baseDir = path.join(srcDir, dir)
  const files = await fsPromises.readdir(baseDir, { withFileTypes: true })

  for (const dirent of files) {
    const direntPath = path.join(dir, dirent.name)
    const srcPath = path.join(srcDir, direntPath)
    const newPath = path.join(newDir, direntPath)
    if (dirent.isFile()) {
      const data = await fsPromises.readFile(srcPath)
      console.log('wrote new file', srcPath)
      fsPromises.writeFile(newPath, data)
    } else if (dirent.isDirectory()) {
      fsPromises.stat(newPath).catch(() => {
        fsPromises.mkdir(newPath)
        console.log('created new directory', newPath)
      }).finally(() => {
        copyDir(direntPath)
      })
    }
  }
}

copyDir()