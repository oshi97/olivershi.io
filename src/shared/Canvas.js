import React from "react"

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
  }
  draw() {
    console.log("DRAW")
  }
}

var x = 200
let ctx = null
let canvas = null
let animationFrameId = null

class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = { width: 0, height: 0 }
    this.updateDimensions = this.updateDimensions.bind(this) 
    this.handleClick = this.handleClick.bind(this)
    this.animate = this.animate.bind(this)
  }
  componentDidMount() {
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
    cancelAnimationFrame(animationFrameId)
  }
  componentDidUpdate() {
    this.loadCanvas()
  }
  updateDimensions() {
    this.setState({ width:window.innerWidth-8, height:window.innerHeight-8})
  }
  animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.arc(x, 200, 30, 0, Math.PI*2, false)
    ctx.strokeStyle = 'blue'
    ctx.stroke()
    x += 1
    console.log(x)
    animationFrameId= requestAnimationFrame(this.animate)
  }
  loadCanvas() {
    if (!this.refs.canvas) { console.log("> Canvas not found for loadCanvas()") }
    canvas = this.refs.canvas
    ctx = canvas.getContext('2d')
    canvas.style.border = '4px solid #000000'
    this.animate()
  }

  handleClick(e) {
    ctx.fillRect(e.clientX, e.clientY, 100, 100)
  }
  render() {
    return (
      <div>
        Canvas here
        <canvas 
          ref="canvas" 
          width={this.state.width} 
          height={this.state.height} 
          onClick={e => this.handleClick(e)}
          style={{
            zIndex: -1,
            top: 0,
            left: 0,
            position: 'absolute'
            }}
          />
      </div>
    )
  }
}

export default Canvas