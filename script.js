$(document).ready(function() {

  //actual game jquery

  
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
        $('.box').off('click');
        console.log('win')
        $('t0', 't1', 't3', 't6').addClass('animate');
      } else {
        console.log('draw')
      }
    });
  }

//click function for the different table posistions dependant on the player
  $('.box').on('click', function(){
   //  console.log("hello1", player1, player2);
    if (player1) { 
      $(this).text('X').addClass('cross');
        player1 = false;
        player2 = true;
        var cell = $(this).attr('id')
        board[$(this).attr('id')]="x";
        checkForWin(cell);
    } else { 
        $(this).text('O').addClass('circle'); 
        player1 = true;
        player2 = false;
        board[$(this).attr('id')]="o";
        checkForWin();
      }
    });

//fucntion that adds the tic tac toe letters in

$('#t0').on('click', function(){
  $(this).css('backgroundColor', 'red').text('T').addClass('letters');
})

$('#t1').on('click', function(){
  $(this).css('backgroundColor', 'blue').text('I').addClass('letters');
})

$('#t2').on('click', function(){
  $(this).css('backgroundColor', 'yellow').text('C').addClass('letters');
})

$('#t3').on('click', function(){
  $(this).css('backgroundColor', 'lime').text('T').addClass('letters');
})

$('#t4').on('click', function(){
  $(this).css('backgroundColor', 'aqua').text('A').addClass('letters');
})

$('#t5').on('click', function(){
  $(this).css('backgroundColor', 'teal').text('C').addClass('letters');
})

$('#t6').on('click', function(){
  $(this).css('backgroundColor', 'lightblue').text('T').addClass('letters');
})

$('#t7').on('click', function(){
  $(this).css('backgroundColor', 'violet').text('O').addClass('letters');
})

$('#t8').on('click', function(){
  $(this).css('backgroundColor', 'orange').text('E').addClass('letters');
})



});
