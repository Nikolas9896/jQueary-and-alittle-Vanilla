//****************** First file **************

var Mystyle = {
	color: "red",
	background: "pink",
	border: "2px solid blue"
}
$("h1").css(Mystyle); // SelectAll <h1>

$("div").css("background", "purple");
$("div.highlight").css("width", "200px");
$("#third").css("border", "2px solid orange");
$("div:first-of-type").css("color", "pink");