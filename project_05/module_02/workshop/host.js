const GUEST_LIST = [
    { name: 'Leonard', count: 6 },
    { name: 'Sharon', count: 4 }
  ];
  
  // Interface Functions
  function buildGuestCard(guest) {
    return $(`
      <div class="guest-card">
        <span>${ guest.name }, party of ${ guest.count }</span>
      </div> 
    `);
  }
  
  function renderGuestList() {
    $('.guest-list').empty();
  
    GUEST_LIST.forEach(function (guest) {
      $('.guest-list').append( buildGuestCard(guest) );
    })
  }
  
  // Interface Listeners
  function addGuestToList(event) {
    event.preventDefault();
  
    const nextGuest = {
      count: $('#guest-count').val(),
      name: $('#guest-name').val()
    }
  
    $(this).trigger('reset')
  
    GUEST_LIST.push(nextGuest);
    renderGuestList();
  }
  
  
  function serveNextGuest() {
    GUEST_LIST.shift();
    renderGuestList();
  }
  
  $('.guest-form').submit(addGuestToList);
  $('#serve').click(serveNextGuest);
  
  renderGuestList();


 $(this).trigger('reset')

$('.guest-form').submit(addGuestToList);


function serveNextGuest() {
GUEST_LIST.shift(serveNextGuest)
}

$('#serve').click(serveNextGuest);

