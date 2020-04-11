#!/usr/bin/env node
const fsPromises = require('fs').promises
const path = require('path')

const publicDir = 'public/sheets'
const srcDir = path.join(__dirname, 'docs', publicDir)
const dataDir = path.join(__dirname, 'data/sheets')

function metadataFromPath (currentPath) {
  const splitPath = currentPath.split('/').filter(el => el)
  const metadata = {};
  if (splitPath.length > 0) {
    metadata.category = splitPath[0]
  }
  if (splitPath.length > 1) {
    metadata.origin = splitPath[1]
  }
  return metadata
}

async function createFileMetadata (currentPath, name, defaultMetadata = {}) {
  const fileName = name + '.json'
  const filePath = path.join(dataDir, currentPath, fileName)
  let metadata = {
    ...defaultMetadata,
    path: path.join(publicDir, currentPath, name + '.pdf'),
    name: name
  };
  try {
    const data = await fsPromises.readFile(filePath)
    metadata = { ...metadata, ...JSON.parse(data) }
  } catch {}
  return fsPromises
    .writeFile(filePath, JSON.stringify(metadata, null, 2))
    .catch(e => console.error(e))
}

function copyDir (currentPath, directoryName) {
  const nextDir = path.join(currentPath, directoryName)
  const newPath = path.join(dataDir, currentPath, directoryName)
  return fsPromises.mkdir(newPath, { recursive: true })
    .then(() => nextDir)
    .catch(e => console.error(e))
}

async function createSheetsMetadata (currentPath = '/') {
  const srcPath = path.join(srcDir, currentPath)
  const files = await fsPromises.readdir(srcPath, { withFileTypes: true })
  const ops = []
  for (const dirent of files) {
    if (dirent.isFile()) {
      const splitDir = dirent.name.split('.')
      const extension = splitDir[splitDir.length - 1]
      if (extension === 'pdf') {
        splitDir.splice(-1, 1)
        const name = splitDir.join('')
        const metadata = metadataFromPath(currentPath)
        ops.push(createFileMetadata(currentPath, name, metadata))
      }
    } else if (dirent.isDirectory()) {
      const nextDir = await copyDir(currentPath, dirent.name)
      ops.push(createSheetsMetadata(nextDir))
    }
  }
  return Promise.all(ops).then(() => ops.length);
}

createSheetsMetadata().then(() => console.log('sheets metadata generated!'))