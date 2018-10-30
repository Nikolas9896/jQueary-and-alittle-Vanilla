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
	if(event.which===13)
	{
		alert("You hit ENTER!!! Are you kidding?");
	}
});

$("h2").on("click", function(){

	$(this).css("color", "steelblue");
});

$("button").on("mouseenter", function(){
	$(this).css("font-weight", "bold");
})
$("button").on("mouseleave", function(){
	$(this).css("font-weight", "normal");
})