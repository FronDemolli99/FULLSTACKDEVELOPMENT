var circle = document.getElementById('circle')
var square = document.getElementById('square')
var rectangle = document.getElementById('rectangle')
var triangle = document.getElementById('triangle')
var shape = document.getElementById('shape')

circle.onclick = function () {
    shape.setAttribute("class", "circle")
}

square.onclick = function () {
    shape.setAttribute("class", "square")
}

rectangle.onclick = function () {
    shape.setAttribute("class", "rectangule")
}

triangle.onclick = function () {
    shape.setAttribute("class", "triangle")
}
