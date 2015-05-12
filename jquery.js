$(document).ready(function() {
  
  var player1 = true;
  var player2 = false;
  board = ["", "", "", "", "", "", "", "", ""];
  winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8],
    [1, 4, 7],
    [0, 3, 6],
    [2, 4, 6],
    [0, 4, 8]
    ];


  var checkForWin = function(){
    // debugger;
      $.each(winningCombo, function(index, win_array){
        console.log(index, win_array);

     
    })
  }



//click function for the different table posistions dependant on the player
    $('.box').on('click', function(){
     console.log("hello1", player1, player2);
     if (player1) {
     
        $(this).addClass('cross');
        player1 = false;
        player2 = true;
        board[$(this).attr('id')]="x";
        checkForWin();
      } else { 
        $(this).addClass('circle');
        player1 = true;
        player2 = false;
        board[$(this).attr('id')]="o";
        checkForWin();
      }
    });


// //check if a win has happened

  //   var winner = false;
  //   for (var i = 0; i < check.length; i++) {
  //       if (arr.indexOf(check[i]) > -1) {
  //           found = true;
  //           break;
  //       }
  //   }
  // }


  //_.contains([1, 2, 3], 3);
  //_.each(list, iteratee, [context])
 
  




  //alert winner
 


});