// #!/usr/bin/env node
// const fsPromises = require('fs').promises
// const path = require('path')

// const srcDir = path.join(__dirname, 'data')
// const newDir = path.join(__dirname, 'docs/api')

// function transformJapanese(data) {
//   return data
// }

// async function copyDir (dir = '/') {
//   const baseDir = path.join(srcDir, dir)
//   const files = await fsPromises.readdir(baseDir, { withFileTypes: true })
//   try {
//     await fsPromises.mkdir(path.join(newDir, dir), { recursive: true })
//   } catch {}
//   const ops = []
//   for (const dirent of files) {
//     const direntPath = path.join(dir, dirent.name)
//     const srcPath = path.join(srcDir, direntPath)
//     const newPath = path.join(newDir, direntPath)

//     if (dirent.isFile()) {
//       const data = await fsPromises.readFile(srcPath)
//       const json = JSON.parse(data)
//       const jsonString = JSON.stringify(transformJapanese(json), null, 2)
//       const promise = fsPromises.writeFile(newPath, jsonString)
//         .catch(e => console.error(e))
//       ops.push(promise)
//     } else if (dirent.isDirectory()) {
//       ops.push(copyDir(direntPath))
//     }
//   }
//   return Promise.all(ops)
// }

// copyDir('japanese').then(() => console.log('japanese api generated!'))