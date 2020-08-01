import JapaneseTranslation from '../../../src/components/JapaneseTranslation'
import translationData from '../../../data/japanese/konosuba_ed_2'

export default () => (
  <div>
    Konosuba
    <JapaneseTranslation {...translationData}/>
  </div>
)