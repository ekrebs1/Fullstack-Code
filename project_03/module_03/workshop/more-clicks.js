$('.task-input button').click (function () {
    const input =  $('.task-input input');
    const value = input.val()
  
    if (value.length > 0) {
      const listItem = $('<li>').text(value)
      $('.task-input').append(listItem)
      input.val("")
    }
  })

  $('.decider button').click (function () {
    $('.status').toggleClass('active');
})

$('.decider button').click (function () {
    $(".status").toggleClass("active");
    
    if ( $(".status").hasClass("active") ) {
      $(".status").text ("on")
       } else {
          $(".status").text ("off") 
  }
    
})

$('.decider button').click (function () {
    $(".status").toggleClass("active");
    
    if ( $(".status").hasClass("active") ) {
        $(".status").text ("on")
        $('.decider button').text('Turn off')
        $(".decider img").attr ('src',"https://media.giphy.com/media/szmSyB2PnehgY/giphy.gif")
             
         } else {
            $(".status").text ("off") 
            $('.decider button').text('Turn on')
            $(".decider img").attr ("src", "https://i.postimg.cc/sfJ7J3Wn/test.png");
              // .attr ("target attribute", "what it changes to")
         }
    })




    $('.cool-kids button:nth-child(1)').click (function () {
        const input = $('red')
        if ($('red')) {
            $('.cool-kids main').css('background','red')
            }
    })
    $('.cool-kids button:nth-child(2)').click (function () {
        const input = $('green')
        if ($('green')) {
            $('.cool-kids main').css('background','green')
            }
    })
    $('.cool-kids button:nth-child(3)').click (function () {
        const input = $('blue')
        if ($('blue')) {
            $('.cool-kids main').css('background','blue')
            }
    })
