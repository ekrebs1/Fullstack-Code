let red, green, blue;

function updateValues() {
  red = $('#red').val()
  green = $('#green').val()
  blue = $('#blue').val()
}

function updatePage() {
  $('.red-value').text(red)
  $('.green-value').text(green)
  $('.blue-value').text(blue)

  $('.preview').css(
    'background',
    `rgb(${ red }, ${ green }, ${ blue })`
  )
}

function updateAll() {
  updateValues()
  updatePage()
}

$(document).ready(updateAll)

$('.controls input').on('input', updateAll)