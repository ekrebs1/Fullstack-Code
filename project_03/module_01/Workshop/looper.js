for (let index = 0; index < 12; index = index + 1) {
  const newImage = $('<img>');
  const newImageSrc = 'http://placeimg.com/640/480/nature?' + index;

  newImage.attr('src', newImageSrc)

  $('body').append(newImage)
}
