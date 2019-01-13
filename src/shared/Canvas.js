import React from "react"

let ctx = null
let canvas = null
let animationFrameId = null
let innerWidth = null
let innerHeight = null
let initialized = false

let circleArray = []
// pastel theme from https://color.adobe.com/Pastels-color-theme-11835052/edit/?copy=true
let colors = ["rgb(248,177,149)", "rgb(246,114,128)","rgb(192,108,132)","rgb(108,91,123)","rgb(53,92,125)"]
// from https://color.adobe.com/Copy-of-FIT-1-color-theme-11779072/edit/?copy=true not given as rgb
let strokeColors = ["#0063B0","#0CBAE8","#00FFFA","#0CE8AE","#0DFF82"]
let mouseDownArrow = null
let gravity = 1
let useUpperWall = true
let useLowerWall = true
let shouldDrawGrass = true
let shouldDrawSky = true
const skyHeight = 20
const grassHeight = 20

function initializeVariables() {
  if (!initialized) {
    initialized = true
    circleArray = []
    const numCircles = 25
    const speed = 8
    for (let i = 0; i < numCircles; i++) {
      let radius = 40 * Math.random() + 5
      const x = (Math.random() * (innerWidth-radius*2)) + radius
      const y = (Math.random() * (innerHeight-radius*2)) + radius
      const dx = (Math.random()-0.5) * speed
      const dy = (Math.random()-0.5) * speed
      const color = getRandomFromArray(colors)
      const strokeColor = getRandomFromArray(strokeColors)
      circleArray.push(new Circle(x, y, dx, dy, radius, color, strokeColor))
    }
    sortCircles()
  }
}

function loadFromUpload(data) {
  circleArray = []
  for (let i = 0; i < data.length; i++) {
    let radius = 40 * Math.random() + 5
    const x = data[i].x
    const y = data[i].y
    const dx = data[i].dx
    const dy = data[i].dy
    const color = data[i].color
    const strokeColor = data[i].strokeColor
    circleArray.push(new Circle(x, y, dx, dy, radius, color, strokeColor))
  }
  sortCircles()
}

function sortCircles() {
  circleArray.sort((a,b) => {
    return b.radius-a.radius
  })
}

class MouseDownArrow {
  constructor(startX, startY, time) {
    this.startX = startX
    this.startY = startY
    this.x = startX
    this.y = startY
    this.time = time
    this.ballColor = getRandomFromArray(colors)
    this.ballRadius = 0
  }
  draw() {
    ctx.beginPath()
    ctx.moveTo(this.startX, this.startY)
    ctx.lineTo(this.x, this.y)
    ctx.lineWidth = 2
    const dt = new Date().getTime() - this.time
    const dx = (this.x-this.startX)*20/dt
    const dy = (this.y-this.startY)*20/dt
    const dist = dx**2 + dy**2 - 5
    const red = dist
    const blue = 255 - dist*1.5 - 10
    const green = 255 - dist*1.5 - 10
    const arrowColor = `rgb(${red},${blue},${green})`
    ctx.strokeStyle = arrowColor
    ctx.stroke()

    ctx.beginPath()
    this.ballRadius = dt/10
    if (dt/10 > Math.min(innerHeight-skyHeight-grassHeight, innerWidth)/2 * 0.9) {
      this.ballRadius = Math.min(innerHeight-skyHeight-grassHeight, innerWidth)/2 * 0.9
    }
    ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2, false)
    ctx.strokeStyle = arrowColor
    ctx.lineWidth = this.ballRadius/10 < 1 ? 0 : this.ballRadius/10  
    ctx.stroke()
    ctx.fillStyle = this.ballColor
    ctx.fill()
  }
  shoot(x, y) {
    const dt = new Date().getTime() - this.time
    const dx = (x-this.startX)*20/dt
    const dy = (y-this.startY)*20/dt
    circleArray.push(new Circle(x, y, dx, dy, this.ballRadius, this.ballColor, getRandomFromArray(strokeColors)))
    sortCircles()
  }
  update() {
    this.draw()
  }
}

function getRandomFromArray(arr) {
  return arr[Math.floor(arr.length*Math.random())]
}

class Circle {
  constructor(x, y, dx, dy, radius, color, strokeColor) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.color = color
    this.strokeColor = strokeColor
  }
  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false)
    ctx.lineWidth = this.radius/10 < 1 ? 0 : this.radius/10
    ctx.strokeStyle = this.strokeColor
    ctx.stroke()
    ctx.fillStyle = this.color
    ctx.fill()
  }
  checkWallCollision() {
    const rightWall = this.x + this.radius + this.dx > innerWidth
    const leftWall = this.x - this.radius - this.dx < 0
    if ( rightWall && this.dx > 0 || leftWall && this.dx <0 ) {
      this.dx = -this.dx*0.6
    } 
    // upper wall here means upper on the screen
    const lowerWall = (this.y + this.radius + grassHeight + this.dy + 0.1 > innerHeight) && useLowerWall
    const upperWall = (this.y - this.radius - skyHeight -this.dy + 0.1 < 0) && useUpperWall
    if (lowerWall || upperWall&&this.dy<0 ) {
      this.dy = -this.dy*0.6
    } 
    // something like static friction I guess
    const lowerWallStaticFriction = lowerWall && this.dy<0.1 &&this.dy>-0.1 
    const upperWallStaticFriction = upperWall && this.dy<0.1 &&this.dy>-0.1 
    if (lowerWallStaticFriction || upperWallStaticFriction) {
      this.dy = 0
    }
    // screw it lol
    if (lowerWall) {
      this.y = innerHeight-grassHeight-this.radius
    } else if (upperWall) {
      this.y = skyHeight + this.radius
    } else {
      this.dy += gravity
    }
  }

  move() {
    this.x += this.dx
    this.y += this.dy
  }
  update() {
    this.checkWallCollision()
    this.move()
    this.draw()
  }
}

function drawGrass() {
  if(shouldDrawGrass) {
    ctx.fillStyle = "rgb(0,255,0)"
    ctx.fillRect(0, innerHeight-grassHeight, innerWidth, grassHeight)
  }
}
function drawSky() {
  if (shouldDrawSky) {
    ctx.fillStyle = "lightblue"
    ctx.fillRect(0, 0, innerWidth, skyHeight)
  }
}
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update()
  }
  if (mouseDownArrow) { mouseDownArrow.update() }
  drawGrass()
  drawSky()
  animationFrameId=requestAnimationFrame(animate)
}

class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.updateDimensions = this.updateDimensions.bind(this) 
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.changeGravity = this.changeGravity.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.toggleUpperWall = this.toggleUpperWall.bind(this)
    this.toggleLowerWall = this.toggleLowerWall.bind(this)
    this.uploadBalls = this.uploadBalls.bind(this)
    this.zeroGravity = this.zeroGravity.bind(this)
    this.oneGravity = this.oneGravity.bind(this)
    this.state = {
      toggleUpperWallText: "Open the skies", 
      toggleLowerWallText: "AHH!!!",
      gravity: gravity
    }
  }
  componentDidMount() {
    this.updateDimensions()
    this.loadCanvas()
    initializeVariables()
    animate()
    window.addEventListener("resize", this.updateDimensions)
    this.refs.canvas.addEventListener("mouseleave", this.handleMouseLeave)  
    this.refs.canvas.addEventListener("mousedown", this.handleMouseDown)
    this.refs.canvas.addEventListener("mouseup", this.handleMouseUp)
    this.refs.canvas.addEventListener("mousemove", this.handleMouseMove)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
    this.refs.canvas.removeEventListener("mouseleave", this.handleMouseLeave)  
    this.refs.canvas.removeEventListener("mousedown", this.handleMouseDown)
    this.refs.canvas.removeEventListener("mouseup", this.handleMouseUp)
    this.refs.canvas.removeEventListener("mousemove", this.handleMouseMove)
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
  }
  handleMouseLeave(e) {
    if (mouseDownArrow) {
      mouseDownArrow.shoot(e.clientX, e.clientY)
    }
    mouseDownArrow = null
  }
  handleMouseDown(e) {
    if (!mouseDownArrow)
      mouseDownArrow = new MouseDownArrow(e.clientX, e.clientY, new Date().getTime())
  }
  handleMouseUp(e) {
    if (mouseDownArrow) {
      mouseDownArrow.shoot(e.clientX, e.clientY)
      mouseDownArrow = null
    }
  }
  handleMouseMove(e) {
    if (mouseDownArrow) {
      mouseDownArrow.x = e.clientX
      mouseDownArrow.y = e.clientY
    }
  }
  zeroGravity(e) {
    gravity = 0
    this.setState({gravity: 0})
  }
  oneGravity(e) {
    gravity = 1
    this.setState({gravity: 1})
  }
  changeGravity(e) {
    if (e.target.value && !isNaN(e.target.value)) {
      gravity = parseInt(e.target.value)
      this.setState({gravity: gravity})
    }
  }
  toggleUpperWall(e) {
    useUpperWall = !useUpperWall
    shouldDrawSky = !shouldDrawSky
    if (useUpperWall) {
      this.setState({toggleUpperWallText : "Open the skies"})
    } else {
      this.setState({toggleUpperWallText : "Gimme a roof"})
    }

  }
  toggleLowerWall(e) {
    useLowerWall = !useLowerWall
    shouldDrawGrass = !shouldDrawGrass
    if (useLowerWall) {
      this.setState({toggleLowerWallText : "AHH!"})
    } else {
      this.setState({toggleLowerWallText : "Beam me up"})
    }
  }
  boom(e) {
    for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].dx = (Math.random()*100+30)*(Math.random()<0.5 ? -1 : 1)
      circleArray[i].dy = (Math.random()*100+30)*(Math.random()<0.5 ? -1 : 1)
    }
  }
  reset(e) {
    initialized = false
    initializeVariables()
    if (!useLowerWall) {this.toggleLowerWall()}
    if (!useUpperWall) {this.toggleUpperWall()}
    gravity = 1
    this.setState({gravity: gravity})
  }
  downloadBalls(e) {
    var objectData = circleArray
    let filename = "big-round-balls.json";
    let contentType = "application/json;charset=utf-8;";
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      var blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(objectData)))], { type: contentType });
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      var a = document.createElement('a');
      a.download = filename;
      a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(objectData));
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }
  uploadBalls(e) {
    // console.log(e)
    const reader = new FileReader()
    reader.onload = function () {
      // console.log(reader.result);
      // console.log(JSON.parse(reader.result))
      // circleArray = JSON.parse(reader.result)
      loadFromUpload(JSON.parse(reader.result))
    }
    // console.log(this.refs.ballUpload.files[0])
    // console.log('array',reader.readAsArrayBuffer(this.refs.ballUpload.files[0]))
    // console.log('binstring', reader.readAsBinaryString(this.refs.ballUpload.files[0]))
    // console.log('text',reader.readAsText(this.refs.ballUpload.files[0]))
    // console.log('data url', reader.readAsDataURL(this.refs.ballUpload.files[0]))
    reader.readAsText(this.refs.ballUpload.files[0])
  }
  render() {
    return (
      <div style={{ 'user-select': 'none' }}>
        <label htmlFor="gravityInput" style={{ 'user-select': 'none' }}> Gravity Level: {this.state.gravity} </label>
        {/* <input 
          id="gravityInput" 
          type="text" 
          onChange={e => this.changeGravity(e)} 
          style={{ 'user-select': 'none' }}
          defaultValue={gravity} 
        /> */}
        <input type="range" min={-10} max={10} value={this.state.gravity} onChange={(e) => this.changeGravity(e)}/>
        <button onClick={e => this.toggleUpperWall(e)}> 
          {this.state.toggleUpperWallText} 
        </button>
        <button onClick={e => this.toggleLowerWall(e)}> 
          {this.state.toggleLowerWallText}
        </button>
        <button onClick={e => this.boom(e)}> 
          BOOM 
        </button>
        <button onClick={e => this.reset(e)}> 
          Random Reset!
        </button>
        <button onClick={e => this.downloadBalls(e)}>
          Download Current balls.json
        </button>
        <button onClick={e => this.zeroGravity(e)}>
          ZERO GRAVITY CONVENIENCE BUTTON
        </button>
        <button onClick={e => this.oneGravity(e)}>
          Default Gravity
        </button>
        <label htmlFor="ball-upload">Upload a saved layout</label>
        <input 
          type="file" accept="text/json" id="ball-upload" 
          ref="ballUpload" onChange={e => this.uploadBalls(e)}/>
        <canvas 
          ref="canvas" 
          width={0}
          height={0}
          style={{
            // borderTop: "5px solid blue",
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