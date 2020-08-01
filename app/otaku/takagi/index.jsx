import JapaneseTranslation from '../../../src/components/JapaneseTranslation'
import translationData from '../../../data/japanese/takagi_op_2'

export default () => (
  <div>
    Karakai Jouzu no Takagi-san
    <JapaneseTranslation {...translationData}/>
  </div>
)