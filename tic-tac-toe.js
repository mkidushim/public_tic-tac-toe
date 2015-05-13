var score_array = ['', '', '', '', '', '', '', '', ''];
$(document).ready(function() {
    console.log('initiating')
    var player1 = true;
    console.log('assigning click handler to', $('#parent > .row'))
    $('#main_container').on('click', '.box', function() {



        if (player1) {
            $(this).addClass('selected1');
            console.log("button was clicked");
            score_array[$(this).attr('index')] = 'g';
            console.log(score_array);
            $('#player2').removeClass('border');
            $('#player1').addClass('border');
            player1 = false;
        } else if (!player1) {
            $(this).addClass("selected2");
            console.log("button was clicked")
            score_array[$(this).attr('index')] = "o";
            $('#player1').removeClass('border');
            $('#player2').addClass('border');
            player1 = true;
        }
    });
});
var win_conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 3, 6],
    [0, 4, 8],
    [6, 4, 2]
];
