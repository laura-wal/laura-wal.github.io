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

  var draw = function(){
    return board.filter(function(element){
      return element
    }).length;
  }

  var checkForWin = function(){ 
    $.each(winningCombo, function(index, win_array){ 
      if(board[win_array[0]] == board[win_array[1]] && board[win_array[1]] ==  board[win_array[2]] && board[win_array[0]] !== '') { 
        //$('div.result').text('You have won!');
        $('.box').off('click');
        console.log('win')

        //animates the boxes once game won
        $('#t0, #t3, #t6, #t1, #t2, #t7, #t8, #0, #1, #2, #5, #6, #7, #8').addClass('zoomOut').delay(500).css('opacity', 0);

        //below changes to the winning gold colurs      
        $('#t4').addClass('win').text('W').css('backgroundColor', '#DAA520').delay(1000);

        $('#t5').addClass('win').text('I').css('backgroundColor', '#DAA520').delay(1000);

        $('#3').addClass('win').text('N').css('backgroundColor', '#DAA520').delay(1000);

        $('#4').addClass('win').text('!').css('backgroundColor', '#DAA520').delay(1000);
     

      } else if (draw() === 9) {
        console.log('draw');
        $('#t0, #t3, #t6, #t1, #t2, #t7, #t8, #0, #1, #2, #5, #6, #7, #8').addClass('zoomOut').delay(500).css('opacity', 0);
        //below changes to the draw grey colours      
        $('#t4').addClass('win').text('D').css('backgroundColor', '#DAA520').delay(1000);

        $('#t5').addClass('win').text('R').css('backgroundColor', '#DAA520').delay(1000);

        $('#3').addClass('win').text('A').css('backgroundColor', '#DAA520').delay(1000);

        $('#4').addClass('win').text('W').css('backgroundColor', '#DAA520').delay(1000);
      } //animates the boxes once game draw
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
setInterval(function(){
  $('#t0').css('backgroundColor', '#85FFBA').text('T').addClass('letters');
  }, 900)
  
  $('#t1').on('click', function(){
    $(this).css('backgroundColor', 'blue').text('I').addClass('letters');
  })

  $('#t2').on('click', function(){
    $(this).css('backgroundColor', '#85FFBA').text('C').addClass('letters');
  })

  $('#t3').on('click', function(){
    $(this).css('backgroundColor', 'blue').text('T').addClass('letters');
  })

  $('#t4').on('click', function(){
    $(this).css('backgroundColor', '#85FFBA').text('A').addClass('letters');
  })

  $('#t5').on('click', function(){
    $(this).css('backgroundColor', 'blue').text('C').addClass('letters');
  })

  $('#t6').on('click', function(){
    $(this).css('backgroundColor', '#85FFBA').text('T').addClass('letters');
  })

  $('#t7').on('click', function(){
    $(this).css('backgroundColor', 'blue').text('O').addClass('letters');
  })

  $('#t8').on('click', function(){
    $(this).css('backgroundColor', '#85FFBA').text('E').addClass('letters');
  })

}); //END DOM READY
