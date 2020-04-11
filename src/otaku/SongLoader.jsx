import React from 'react'
import JapaneseTranslation from './JapaneseTranslation'

const SongLoader = (props) => {
  const { text, title, textTranslation, titleTranslation, songName } = props
  const translationData = require(`../../data/japanese/${songName}.json`)
  return (
    <JapaneseTranslation
      title={title}
      text={text}
      textTranslation={textTranslation}
      titleTranslation={titleTranslation}
      titleData={translationData.title}
      textData={translationData.text}
    />
  )
}
export default SongLoader
