import React from 'react'
import Japanese from '../components/Japanese'

const lyrics = '何も言わずに家を出て'

export default class Konosuba_ed_2 extends React.Component {
  render() {
    return (
      <div className='konosuba-ed-2'>
        <Japanese text={lyrics} file='konosuba_ed_2'/>
      </div>
    )
  }
}
