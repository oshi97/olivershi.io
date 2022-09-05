/* eslint-disable */
import sheetsJson from '../data/sheets.json'

/**
 * @param {string || Object} dirEntry
 * @param {string} root
 */
function routeDirEntry(
  dirEntry: any & { contents: any; name: any; full_path: any; className: any },
  rootDir: string
) {
  if (typeof dirEntry === 'string' && dirEntry.split('.')[0]) {
    return (
      <File name={dirEntry} full_path={rootDir + dirEntry} key={rootDir + dirEntry} />
    )
  } else if (typeof dirEntry === 'object') {
    return <Directory {...dirEntry} key={dirEntry.full_path} />
  }
}

function compareDirEntries(
  first: { name: string; localeCompare: (arg0: any) => any },
  second: { name: any }
) {
  const firstIsDir = typeof first === 'object'
  const secondIsDir = typeof second === 'object'
  if (firstIsDir && secondIsDir) {
    return first.name.localeCompare(second.name)
  }
  if (firstIsDir) return -1
  if (secondIsDir) return 1
}

const Directory = (props: {
  contents: any
  name: any
  full_path: any
  className: any
}) => {
  const { contents, name, full_path, className } = props
  contents.sort(compareDirEntries)
  return (
    <div className={className ? 'dir ' + className : 'dir'}>
      {name || './'}
      <div className='dir-content'>
        {contents && contents.map((dirEntry: any) => routeDirEntry(dirEntry, full_path))}
      </div>
    </div>
  )
}

const File = ({ name, full_path }: { name: string; full_path: string }) => {
  return (
    <div className='file'>
      <a href={full_path}>{name}</a>
    </div>
  )
}

export default () => <Directory className='sheets' {...sheetsJson} />
