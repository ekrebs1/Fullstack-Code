$('.app').click(function onMapClick(event) {
    const appElement = $(this);
    const target = $(event.target);
    const userPressedShiftKey = event.shiftKey;
  
    if ( target.hasClass('pin') && userPressedShiftKey ) {
      target.remove();
    } else if ( !target.hasClass('pin') ) {
      const pinX = event.offsetX;
      const pinY = event.offsetY;
  
      const pinElement = $('<div class="pin">');
      pinElement.css('left', pinX).css('top', pinY);
  
      appElement.append(pinElement);
    }
  });