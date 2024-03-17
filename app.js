
"use strict";
$(document).ready(function () {
    
  $('.btn').click(function (e) { 
    e.preventDefault();
    if (!$.trim($('input').val()) == '') {
        var a = function(b) {
            for (var i = 0; i < b; i++) {
                $('.box').append(`<h2>${b}</h2>`);
            }
        };
        var x = function(y) {
            if (Number(y)) {
                return a(y);
            }
            else {
                $('.box').append(`<h2>${y}</h2>`); 
            }
        };
        x($('input').val());
    }
    $('input').val('');
  });
});


