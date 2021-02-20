$('.one button').click(function () {
    $('.one span').text("Good job!")
  })
  
  $('.two button').click(function () {
    $('.two').slideUp()
  })
  
  $('.three button').click(function () {
    $('.three').append(
      $('<div>Here is some new content</div>')
    )
  })
  
  $('.four button').click(function () {
    $('.template-target').html(
      $('template').html()
    )
  })
  
  $('.five button').click(function () {
    $('.prepend-target').prepend(
      $('main .five').clone()
    )
  })
  
  $('.six button').click(function () {
    $('main .six').css('transform', 'rotate(180deg)')
  })
  
  $('.seven button').click(function () {
    let newButton = $(
      '<button class="disappear">CLICK TO DISAPPEAR</button>'
    )
  
    newButton
      .css('margin', '3px 0')
      .css('padding', '4px')
  
    newButton.click(function () {
      $(this).fadeOut()
    })
  
    $('.seven').append(newButton)
  })









 