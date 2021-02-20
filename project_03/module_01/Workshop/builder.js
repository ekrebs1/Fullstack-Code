const sloHeading = $('<h3>')
sloHeading.text('Hello, World')

const sloPar = $('<p>')
sloPar.html('<b>This</b> is my text')

const sloImg = $('<img>')
sloImg.attr('src', 'http://placeimg.com/640/480/nature?1')

$('.slo-mo')
  .append(sloHeading)
  .append(sloPar)
  .append(sloImg)

$('.normal-speed').append(
  $('<h3>Hello, World</h3>'),
  $('<p><b>This</b> is my text</p>'),
  $('<img src="http://placeimg.com/640/480/nature?2" />')
)

$('.rewind').prepend(
  $('<img src="http://placeimg.com/640/480/nature?4" />')
).prepend(
  $('<p><b>This</b> is my text</p>')
).prepend(
  $('<h3>Hello, World</h3>')
)

$('.turbo').html(`
  <h3>Hello, World</h3>
  <p><b>This</b> is my text</p>
  <img src="http://placeimg.com/640/480/nature?1" />
`)


