$(document).ready(function() {
  
  var player1 = true;
  var player2 = false;
  board = ["", "", "", "", "", "", "", "", ""];
  var winningCombo = [
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
    $.each(winningCombo, function(index, win_array){ 
      if(board[win_array[0]] == board[win_array[1]] && board[win_array[1]] ==  board[win_array[2]] && board[win_array[0]] !== '') { 
        console.log('I am being run!');
        //$('div.result').text('You have won!');
        $('.box').unbind('click');
        console.log('win')
      } else {
        console.log('draw')
      }
    });
  }

//click function for the different table posistions dependant on the player
  $('.box').on('click', function(){
   //  console.log("hello1", player1, player2);
    if (player1) { 
      $(this).addClass('cross');
        player1 = false;
        player2 = true;
        var cell = $(this).attr('id')
        board[$(this).attr('id')]="x";
        checkForWin(cell);
    } else { 
        $(this).addClass('circle'); 
        player1 = true;
        player2 = false;
        board[$(this).attr('id')]="o";
        checkForWin();
      }
    });
  });
