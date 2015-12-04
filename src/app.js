// Setup

let canvas = document.querySelector(`canvas`)

function fitWindow () {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

fitWindow()

window.onresize = fitWindow

// The fun part!

let context = canvas.getContext(`2d`)

function render (time) {
  time = time / 200
  canvas.width = canvas.width

  let dots = 20

  let originX = canvas.width / 2
  let originY = canvas.height / 2

  for (let i = 0; i < dots; i += 1) {
    let hue = time * 10 % 360

    let coordinates = [
      originX + Math.sin(i) * 200,
      originY + Math.cos(i) * 200
    ]

    let radius = Math.max(0, Math.sin(time)) * 100
    let angle = [ 0, 360 ]

    context.beginPath()
    context.fillStyle = `hsl(${hue}, 75%, 50%)`
    context.arc(
      ...coordinates,
      radius / 5,
      ...angle
    )
    context.fill()
  }

  window.requestAnimationFrame(render)
}

render()
