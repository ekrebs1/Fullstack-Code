const cssOptions = {
    width: '360px',
    height: '360px',
    border: '1px solid black'
  }
  
  $('#backgroundColor input').on('input', function (event) {
    let target = $(event.target);
    cssOptions['backgroundColor'] = target.val();
    updatePreview();
  });
  
  $('#height input').on('input', function (event) {
    let target = $(event.target);
    cssOptions['height'] = `${ target.val() }px`;
    updatePreview();
  });
  
  $('#borderRadius input').on('input', function (event) {
    let target = $(event.target);
    cssOptions['borderRadius'] = `${ target.val() }%`;
    updatePreview();
  });
  
  $('#fontFamily input').on('input', function (event) {
    let target = $(event.target);
    cssOptions['fontFamily'] = `${ target.val() }`;
    updatePreview();
  });
  
  $('#lift input').on('input', function (event) {
    let target = $(event.target);
    let value = target.val();
  
    if (value === 0) {
      cssOptions['boxShadow'] = 'none'
    } else {
      cssOptions['boxShadow'] = `0 ${ Math.floor(value / 2) }px ${ value }px black`;
    }
    updatePreview();
  });
  
  function updatePreview() {
    $('#preview').css(cssOptions);
  }
  
  updatePreview();