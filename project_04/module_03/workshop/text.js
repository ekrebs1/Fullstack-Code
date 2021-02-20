function reverse(text) {
    return text.split('').reverse().join('');
  }
  
  function scream(text) {
    return text.toUpperCase() + "!!!";
  }
  
  function drawOut(text) {
    return text.split('').join(" _ ");
  }
  
  let textFunction = reverse; // default value
  
  function updateText() {
    const inputText = $('#user-input').val();
    const outputText = textFunction(inputText);
  
    $('#transformed').text( outputText );
  }
  
  
  $('input[type=radio]').click(function () {
    const id = $(this).attr('id')
  
    if (id === "reverse") {
      textFunction = reverse;
    } else if (id === "scream") {
      textFunction = scream;
    } else {
      textFunction = drawOut;
    }
  
    updateText();
  });
  
  $('#user-input').on('input', updateText)