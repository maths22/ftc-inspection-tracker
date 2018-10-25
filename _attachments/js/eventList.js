
function addSlashToUrl() {
    //If there is no trailing shash after the path in the url add it
    if (window.location.pathname.endsWith('/') === false) {
        var url = window.location.protocol + '//' +
                window.location.host +
                window.location.pathname + '/' +
                window.location.search;

        window.history.replaceState(null, document.title, url);
    }
}

$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$(function() {
   addSlashToUrl();

    $('#loginModalButton').click(function(evt) {
      if(window.session) {
        logout();
        $('#loginModalButton').html('Login');
      } else {
        login(function() {
          if(window.session) {
            $('#loginModalButton').html('Logout');
          }
        });
      }
    })

    $('#createModalButton').click(function(evt) {
      if(!window.session) {
        login(function() {
          if(window.session) {
            $('#loginModalButton').html('Logout');
            $('#createModal').modal('show');
          }
        });
      } else {
        $('#createModal').modal('show');
      }
    })

    $('#createForm').submit(function(evt) {
      var key = $("#createForm-key").val();
      if(!/^[A-Za-z0-9-_]+$/.test(key)) {
        $('#createError').html("An event key can only contain letters, numbers, '-', and '_'");
        return false;
      }
      
      var data = $( "#createForm" ).serializeObject();

      $.ajax({
        url:"/create",
        type:"POST",
        data:JSON.stringify({data}),
        contentType:"application/json; charset=utf-8",
        dataType:"json",
      })
        .done(function(response) {
         window.location.href = '/' + data['key'];
        })
        .fail(function(data) {
          if(data.status == 409) {
            $('#createError').html("Event key already in use");
          } else {
            $('#createError').html("An unknown error occured. Please try again later.");
          }
        });


      return false;
    });



});
