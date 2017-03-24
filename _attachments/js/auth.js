$(function() {
  $.get("/_session", function(data) {
    if(data.userCtx.name) {
      window.session = data.userCtx;
      $('#loginModalButton').html('Logout');
    } else {
      window.session = false;
      $('#loginModalButton').html('Login');
    }
  });

  $('#loginForm').submit(function(evt) {
    $.post( "/_session", $( "#loginForm" ).serialize() )
      .done(function(data) {
        if(data.ok) {
          delete data.ok;
          window.session = data;
          $('#loginError').html('');
          $('#loginModal').modal('hide');
        }
      })
      .fail(function(data) {
        if(data.responseJSON.error) {
          $('#loginError').html(data.responseJSON.reason);
        } else {
          $('#loginError').html("An unknown error occured. Please try again later.");
        }
        window.session = false;
      });

    return false;
  });

  $('#registerForm').submit(function(evt) {
    var username = $('#registerForm-name').val();
    var password = $('#registerForm-password').val();
    var passwordConfirm = $('#registerForm-passwordConfirm').val();

    if(password != passwordConfirm) {
      $('#registerError').html("Passwords entered do not match");
      return false;
    }


    $.ajax( "/_users/org.couchdb.user:" + username,  {
      "method": "PUT",
      contentType:"application/json; charset=utf-8",
      dataType:"json",
      "data": JSON.stringify({
        "name": username,
        "password": password,
        "roles": [],
        "type": "user"
      })})
      .done(function(data) {
        if(data.ok) {
          $('#registerError').html('');
          $('#inputEmail').val(username);
          $('#loginTabHandle').tab('show');
        }
      })
      .fail(function(data) {
        if(data.responseJSON.error) {
          $('#registerError').html(data.responseJSON.reason);
        } else {
          $('#registerError').html("An unknown error occured. Please try again later.");
        }
        window.session = false;
      });

    return false;
  });
});

function login(callback) {
  $('#loginModal').modal('show');
  $('#loginModal').on('hide.bs.modal', function() {
    callback();
    $('#loginModal').off('hide.bs.modal');
  })
}

function logout() {
  $.ajax({
    url: '/_session',
    type: 'DELETE'
  });
  window.session = false;
}
