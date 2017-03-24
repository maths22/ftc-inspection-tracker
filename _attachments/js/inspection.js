
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


function updateSymbol(item, noUpdate) {
    var checkbox = $(item).children("input").first();
    var isChecked = checkbox.is(":checked");

    if($(item).hasClass('hidden')) {
      $(item).removeClass('hidden');
    }

    if(isChecked) {
        $(item).addClass("success");
        $(item).removeClass("danger");
    } else {
        $(item).addClass("danger");
        $(item).removeClass("success");
    }

    if(!noUpdate) {
      var updateFunction = function() {
        if(window.session) {
          $('#loginModalButton').html('Logout');
          $.retryAjax({
            url:"./updateStatus",
            retryLimit: 10,
            type:"POST",
            data:JSON.stringify({'node': checkbox.attr('name'), 'completed': isChecked}),
            contentType:"application/json; charset=utf-8",
            dataType:"json",
          });
        }
      }

      if(window.session) {
        updateFunction();
      } else {
        login(updateFunction);
      }
    }
}

function updateStatus(selectedItems) {
  $('.statusCheckbox').each(function(idx, item) {
    $(item).trigger('change');
    if(selectedItems) {
      if(selectedItems.indexOf(item.id) >= 0) {
        if(!item.checked) {
          item.checked = true;
          $(item).trigger('change');
        }
      } else {
        if(item.checked) {
          item.checked = false;
          $(item).trigger('change');
        }
      }
    }
  });
}


var lastSeq;
function pollServer()
{
      window.setTimeout(function () {
          var url = "./statusFeed";
          if(lastSeq !== undefined) {
            url += "?since=" + lastSeq;
          }
          $.ajax({
              url: url,
              type: "GET",
              success: function (result) {
                  lastSeq = result['last_seq'];
                  $.getJSON('./getStatus', function(data) {
                    updateStatus(data['completed']);
                  });
                  pollServer();
              },
              error: function () {
                  //ERROR HANDLING
                  pollServer();
              }});
      }, 100);
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

    $('.statusCheckbox').change(function(evt) {
        updateSymbol(evt.target.parentElement, evt.isTrigger);
    });

    $('td').click(function(evt) {
        $(evt.target).children("input").first().trigger('click');
    });

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

    $('#editModalButton').click(function(evt) {
      if(!window.session) {
        login(function() {
          if(window.session) {
            $('#loginModalButton').html('Logout');
            $('#editModal').modal('show');
          }
        });
      } else {
        $('#editModal').modal('show');
      }
    })

    $('#editForm').submit(function(evt) {
      var data = $( "#editForm" ).serializeObject();
      data.teams = data.teams.split(',').map(function(str) {
        return str.trim().replace(/\s+/g, " ");
      });
      data.categories = data.categories.split(',').map(function(str) {
        return str.trim().replace(/\s+/g, " ");
      });

      $.ajax({
        url:"./updateConfig",
        type:"POST",
        data:JSON.stringify({'config': data}),
        contentType:"application/json; charset=utf-8",
        dataType:"json",
      })
        .done(function(data) {
          location.reload();
        });

      // $.post( "./_session", $( "#loginForm" ).serialize() )
      //   .done(function(data) {
      //     if(data.ok) {
      //       delete data.ok;
      //       window.session = data;
      //       $('#loginError').html('');
      //       $('#loginModal').modal('hide');
      //     }
      //   })
      //   .fail(function(data) {
      //     if(data.responseJSON.error) {
      //       $('#loginError').html(data.responseJSON.reason);
      //     } else {
      //       $('#loginError').html("An unknown error occured. Please try again later.");
      //     }
      //     window.session = false;
      //   });

      return false;
    });

    $.getJSON('./getStatus', function(data) {
      updateStatus(data['completed']);
    });
    pollServer();


});
