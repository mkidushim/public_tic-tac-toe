$(document).ready(function() {
    console.log('initiating')
    var score_array = ['', '', '', '', '', '', '', '', ''];
    var player1 = true;
    console.log('assigning click handler to', $('#parent > .row'))
    $('#main_container').on('click', '.box', function() {

        if (player1) {
            $(this).addClass('selected1');
            console.log("button was clicked");
            score_array[$(this).attr('index')] = 'x';
            console.log(score_array)

            player1 = !player1;
        } else {
            $(this).addClass("selected2");
            score_array[$(this).attr('index')] = "o";
            player1 = !player1;
        }
    });
});
