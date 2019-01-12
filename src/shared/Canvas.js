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
  }
}

let ctx = null
let canvas = null
let animationFrameId = null
let innerWidth = null
let innerHeight = null
let initialized = false

let dx = 10
let dy = 10
let xScalar = 1
let yScalar = 1
let x = null
let y = null
let radius = 30
function initializeVariables() {
  if (!initialized) {
    x = Math.random()*innerWidth
    y = Math.random()*innerHeight
    initialized = true
  }
}


function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.beginPath()
  ctx.arc(x, y, radius, 0, Math.PI*2, false)
  ctx.strokeStyle = 'blue'
  ctx.stroke()
  // parenthesis not needed but for clarity
  if (x+radius > innerWidth) {
    xScalar = -1
  } else if (x-radius < 0){
    xScalar = 1
  }
  if (y+radius > innerHeight) {
    yScalar = -1
  } else if (y-radius < 0){
    yScalar = 1
  }
  dx += xScalar*(Math.random()-0.5)
  dy += yScalar*(Math.random()-0.5)
  x += xScalar*(dx+Math.random()-0.5)
  y += yScalar*(dy+Math.random()-0.5)
  animationFrameId=requestAnimationFrame(animate)
}

class Canvas extends React.Component {
  constructor(props) {
    super(props)

    this.updateDimensions = this.updateDimensions.bind(this) 
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.updateDimensions()
    this.loadCanvas()
    window.addEventListener("resize", this.updateDimensions)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
    cancelAnimationFrame(animationFrameId)
  }
  componentDidUpdate() {

  }
  updateDimensions() {
    innerHeight = window.innerHeight
    innerWidth = window.innerWidth
    this.refs.canvas.height = window.innerHeight
    this.refs.canvas.width = window.innerWidth
  }
  loadCanvas() {
    if (!this.refs.canvas) { console.log("> Canvas not found for loadCanvas()") }
    canvas = this.refs.canvas
    ctx = canvas.getContext('2d')
    canvas.style.border = '0px solid #000000'
    initializeVariables()
    animate()
  }

  handleClick(e) {
    console.log(window)
  }
  
  render() {
    return (
      <div>
        Canvas here
        <canvas 
          ref="canvas" 
          width={0}
          height={0}
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