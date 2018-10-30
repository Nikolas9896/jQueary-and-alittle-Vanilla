$('h1').click(function()
	{
		alert("h1 clicked");
	});

$('button').click(function()
{
	alert("button clicked");
	$(this).css("background", "pink");
});

$('input[type="text"]').keypress(function(event){
	if(event.which===13);
	{
		aletr("You hit ENTER!!! Are you kidding?");
	}
});