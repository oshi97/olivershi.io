import React from 'react'

// const x = 123
// const ctx = 345
// Yes! helper variables are isolated to each component, as well as saved between mount/unmount!
class Two extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    // console.log(x, ctx)
  }
  render() {
    return (
      <div onClick={e => this.handleClick(e)}>
        Two JS demo
      </div>
    )
  }
}

export default Two