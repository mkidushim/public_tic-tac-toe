var score_array = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
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
var player1 = true;
var click = true;
$(document).ready(function() {
    console.log('initiating')
    player1 = true;
    console.log('assigning click handler to', $('#parent > .row'))
    $('#main_container').on('click', '.box', function() {



        if (player1) {
            $(this).addClass('selected1');
            console.log("button was clicked");
            score_array[$(this).attr('index')] = 'g';
            console.log(score_array);
            $('#player2').removeClass('border_2');
            $('#player1').addClass('border_1');
            player1 = false;
            for (var i = 0; i < win_conditions.length; i++) {
                if (score_array[win_conditions[i][0]] == score_array[win_conditions[i][1]] && score_array[win_conditions[i][1]] == score_array[win_conditions[i][2]]) {
                    console.log('you win!')

                }


            }
        } else if (!player1) {
            $(this).addClass("selected2");
            console.log("button was clicked")
            score_array[$(this).attr('index')] = "o";
            $('#player1').removeClass('border_1');
            $('#player2').addClass('border_2');
            player1 = true;
            for (var i = 0; i < win_conditions.length; i++) {
                if (score_array[win_conditions[i][0]] == score_array[win_conditions[i][1]] && score_array[win_conditions[i][1]] == score_array[win_conditions[i][2]]) {
                    console.log('you win!')
                }


            }
        }
    });
});

function make_board() {

    if (click == true) {
        $('#main_container').html("<div id='main_container' class='container'>");
        $('#main_container').append('<h1>Tic-Tac-Toe</h1>');
        $('#main_container').append('<div id="main" class="row">');
        $('div .row').append('<div  class="col-md-9">');
        $('div .col-md-9').append("<div id='parent' class='game_board'>");
        $('#parent').append("<div class='row'>");
        $('.game_board > .row').append("<div index='0' class='box col-md-4'></div>").append("<div index='1' class='box col-md-4'></div>").append("<div index='2' class='box col-md-4'></div>");
        $('#parent').append("<div class='row row_2'>");
        $('.row.row_2').append("<div index='3' class='box col-md-4'></div>").append("<div index='4' class='box col-md-4'></div>").append("<div index='5' class='box col-md-4'></div>");
        $('#parent').append("<div class='row row_3'>");
        $('.row.row_3').append("<div index='6' class='box col-md-4'></div>").append("<div index='7' class='box col-md-4'></div>").append("<div index='8' class='box col-md-4'></div>");
        $('#box_container').append('<div class="player_info col-md-3"></div>');
        $('.player_info').append('<div id="player1">PLAYER_1: O</div>').append('<div id="player2">PLAYER_2: G</div>');

        click = false;
    }


};
