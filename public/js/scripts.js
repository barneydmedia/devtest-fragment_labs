$('#submit-client').on('click', function(event) {
  event.preventDefault();
  storeClient();
})

function storeClient() {
  var first_name = $('#form-first-name').val();
  var last_name = $('#form-last-name').val();
  var email = $('#form-email').val();
  var phone_number = $('#form-phone-number').val().replace('/\D+/', '');

  // validate the client info
  var valid = true;
  if (!first_name.match(/^[A-Za-z ,.\'\-]+$/i)) {
    $('#error-first-name').show();
    valid = false;
  } else {
    $('#error-first-name').hide();
  }
  if (!last_name.match(/^[A-Za-z ,.\'\-]+$/i)) {
    $('#error-last-name').show();
    valid = false;
  } else {
    $('#error-last-name').hide();
  }
  if ( !email.match(/^\S+@\S+\.\S+$/i) ) {
    $('#error-email').show();
    valid = false;
  } else {
    $('#error-email').hide();
  }
  if (phone_number.length < 7) {
    $('#error-phone-number').show();
    valid = false;
  } else {
    $('#error-phone-number').hide();
  }

  var fields = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    phone_number: phone_number,
  }

  if (valid) {

    // store the info
    $.post('/api/v1/clients', fields, function(data, textStatus, xhr) {
      $('#form').fadeOut(400, function() {
        $('#success').fadeIn(400);
      });
    });
  } else {
    console.log('Invalid input.');
  }
}
