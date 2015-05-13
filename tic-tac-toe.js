$(document).ready()
{
	var input_array = [];
	var ex = 'X';
	var oh = 'O';
	input_array[0] = ex;
	input_array[1] = oh;

	function click()
	{
		if (input_array[0] == false)
		{
				input_array[input_index] = input_array[input_index] + ex;
				$("#square").val(ex);
				console.log('value: ', ex);
		}else
			{
				input_array[input_index] = input_array[input_index] + oh;
				$("#square").val(oh);
				console.log('value: ', oh);
			}
	}
}





//$(document).ready(function()
//{
	//var h1 = $("<h1>").addClass('container').text('Tic-Tac-Toe');
	//$('#banner').append(h1);
//}
