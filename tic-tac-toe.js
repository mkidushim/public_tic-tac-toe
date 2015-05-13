var score_array = ['', '', '', '', '', '', '', '', ''];
$(document).ready(function() {
    console.log('initiating')
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
            console.log("button was clicked")
            score_array[$(this).attr('index')] = "o";
            player1 = !player1;
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

for (var i = 0; i < win_conditions.length; i++) {
    if (score_array[win_conditions[i][0]] == score_array[win_conditions[i][1]] && score_array[win_conditions[i][1]] == score_array[win_conditions[i][2]]) {
        console.log('you win!')
    }


}
