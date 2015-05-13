$(document).ready(function() {
            $('html').html('<div class="container">');
            $('.container > div').append("<div class= row");
            var score_array = ['', '', '', '', '', '', '', '', ''];
            var player1 = true;
            $('#parent').on('click', '.box', function() {

                if (player1) {
                    $(this).addClass(selected1);
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
        }
