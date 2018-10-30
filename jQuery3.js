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
	console.log(event);
});