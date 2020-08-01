import sheetsJson from '../../data/sheets'

/**
 * @param {string || Object} dirEntry
 * @param {string} root
 */
function routeDirEntry(dirEntry, rootDir) {
  if (typeof dirEntry === 'string') {
    return <File
      name={dirEntry}
      full_path={rootDir + dirEntry}
      key={rootDir + dirEntry}
    />
  } else if (typeof dirEntry === 'object') {
    return (<Directory {...dirEntry} key={dirEntry.full_path} />)
  }
}

const Directory = (props) => {
  const { contents, name, full_path, className } = props
  return (
    <div className={className ? 'dir ' + className : 'dir'}>
      {name || './'}
      <div className='dir-content'>
        {contents && contents.map(dirEntry => routeDirEntry(dirEntry, full_path))}
      </div>
    </div>
  )
}

const File = ({ name, full_path }) => (
  <div className='file'>
    <a href={full_path}>{name.split('.')[0]}</a>
  </div>
)

const RootDirectory = () => (
  <Directory className='sheets' {...sheetsJson} />
)

export default RootDirectory