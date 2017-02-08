import * as collatz from './src/collatz_grapher.js'
let canvas = document.getElementById('myCanvas')
canvas.width = 900
canvas.height = 500

collatz.setCanvas(canvas)
let arr = collatz.construct(8)
let drawData = collatz.draw(arr)


canvas.addEventListener('mousemove', (e)=> {

  let xOffset = canvas.getBoundingClientRect().left
  let yOffset = canvas.getBoundingClientRect().top
  let x = e.clientX - xOffset
  let y = e.clientY - yOffset

  let numPoints = drawData.pointsArray.length
  let width = canvas.width
  let widthDivision = width/(numPoints-1)


  console.log(Math.ceil( (x + widthDivision/2)/widthDivision ), y)
  canvas

})

console.log(canvas.getBoundingClientRect())
