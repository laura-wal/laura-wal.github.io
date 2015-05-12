$(document).ready(function() {
  console.log('readytoroll');

     var player1 = true
     var player2 = false
    // // var player1 = 
    // // var player2 = 
    // currentplayer = 
    
    // var row 1 = [1, 2, 3]
    // var row 2 = [4 ,5 ,6]
    // var row 3 = [7, 8, 9]

//who is playing ?

// var turn = function(){
//   if player1
// }

//click function for the different table posistions
    $('.box').on('click', function(){
     console.log("hello1", player1, player2);
     if (player1) {
        $(this).addClass('cross');
        player1 = false;
        player2 = true;
      } else { 
        $(this).addClass('circle');
        player1 = true;
        player2 = false;
      }
    });


 


});