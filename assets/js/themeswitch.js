function toggle (t) {
var x = document.getElementsByClassName("well");
var y = document.getElementsByClassName("white-popup");
var z = document.getElementsByClassName("social-contact-icon");
var u = document.getElementsByClassName("icon");
var j = document.getElementsByClassName("inner");
var k = document.getElementsByTagName("hr");

var color;

if (t.childNodes[0].innerHTML == "Dark Theme")
{
    t.childNodes[0].innerHTML = "Bright Theme";
    document.body.style.backgroundColor = "gray";
	document.getElementById("button").style.backgroundColor = "#f5f5f5";
	color = "gray";
	color2 = "black";
	color3 = "#BDBDBD";
}
else
{
    t.childNodes[0].innerHTML = "Dark Theme";
    document.body.style.backgroundColor = "white";
	document.getElementById("button").style.backgroundColor = "gray";
	color = "#f5f5f5";
	color2 = "#e3e3e3"
	color3 = "#f5f5f5";
}

var i;
for (i = 0; i < x.length; i++)
{
	x[i].style.backgroundColor = color3;
	x[i].style.borderColor = color2;
}
for (i = 0; i < y.length; i++)
{
	y[i].style.backgroundColor = color;
}
for (i = 0; i < z.length; i++)
{
	z[i].style.backgroundColor = color;
}
for (i = 0; i < u.length; i++)
{
	u[i].style.borderColor = color;
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