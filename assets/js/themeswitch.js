function toggle (t) {
var x = document.getElementsByClassName("well");
var y = document.getElementsByClassName("white-popup");
var z = document.getElementsByClassName("social-contact-icon");
var u = document.getElementsByClassName("icon");
var j = document.getElementsByClassName("inner");
var k = document.getElementsByTagName("hr");
var l = document.getElementById("button");

var color1;
var color2;
var color3;
var color4;
var color5;

if (t.childNodes[0].innerHTML == "Dark Theme")
{
    t.childNodes[0].innerHTML = "Bright Theme";
	color1 = "#333";
	color2 = "black";
	color3 = "#222";
	color4 = "#d2d2d2";
	color5 = "#f5f5f5";
    document.body.style.backgroundColor = color1;
	document.body.style.color = color4;
	document.getElementById("button").style.backgroundColor = color5;
}
else
{
    t.childNodes[0].innerHTML = "Dark Theme";
	color1 = "#f5f5f5";
	color2 = "#e3e3e3"
	color3 = "#f5f5f5";
	color4 = "#333";
	color5 = "#333";
    document.body.style.backgroundColor = color1;
	document.getElementById("button").style.backgroundColor = color5;
	document.body.style.color = color4;
}

var i;
l.style.color = color1;
for (i = 0; i < x.length; i++)
{
	x[i].style.backgroundColor = color3;
	x[i].style.borderColor = color2;
}
for (i = 0; i < y.length; i++)
{
	y[i].style.backgroundColor = color1;
}
for (i = 0; i < z.length; i++)
{
	z[i].style.backgroundColor = color1;
}
for (i = 0; i < u.length; i++)
{
	u[i].style.borderColor = color1;
}
for (i = 0; i < j.length; i++)
{
	j[i].style.borderColor = color2;
}
for (i = 0; i < k.length; i++)
{
	k[i].style.borderColor = color2;
}


};