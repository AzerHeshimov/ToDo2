
"use strict";
$(document).ready(function () {
    
    $('.btn').click(function (e) { 
        e.preventDefault();
        if (!$.trim($('input').val()) == '') {
            let a = b => {
                for (let i=0 ; i<b ; i++) {$('.box').append(`<h2>${b}</h2>`)}
            }
            let v = f => Number(f) ? a(f) : $('.box').append(`<h2>${f}</h2>`);
            v($('input').val())
        }
        $('input').val('')
    })
})
























// $(document).ready(function () {
//     $('.btn').click(function (e) {
//         e.preventDefault();
//         if (!$.trim($('input').val()) == '') {
//             let a = b => {
//                 for (let i=0; i<b; i++) {$('.box').append(`<h2>${b}</h2>`)}
//             }
//             let v = f => Number(f) ? a(f) : $('.box').append(`<h2>${f}</h2>`);
//             v($('#myInput').val();)
//         }
//         $('#myInput').val(' ')
//     })
// });





// let a =$('input').val();
//         $('#myInput').val('');
//         if ( (a/2)> 0 ) {
//             for (let i = 0; i < a; i++) {
                
//                 $(".box").append(`<h2>${a}</h2>`);
//             }
           
//         } else {
//             $(".box").append(`<h2>${a}</h2>`);
//         }
        







