function toggle (t) {
var x = document.getElementsByClassName("well");
var y = document.getElementsByClassName("white-popup");
var z = document.getElementsByClassName("social-contact-icon");
var u = document.getElementsByClassName("icon");
var j = document.getElementsByClassName("inner");
var k = document.getElementsByTagName("hr");
var l = document.getElementById("button");


if (theswitch == true)
{
	theswitch = false;
    document.getElementById("button").innerHTML = n_bright;
	color1 = d_color1;
	color2 = d_color2;
	color3 = d_color3;
	color4 = d_color4;
    document.body.style.backgroundColor = color1;
	document.body.style.color = color3;
	document.getElementById("button").style.backgroundColor = color3;
}
else
{
	theswitch = true;
    document.getElementById("button").innerHTML = n_dark;
	color1 = b_color1;
	color2 = b_color2;
	color3 = b_color3;
	color4 = b_color4;
    document.body.style.backgroundColor = color1;
	document.getElementById("button").style.backgroundColor = color3;
	document.body.style.color = color3;
}

var i;
l.style.color = color1;
for (i = 0; i < x.length; i++)
{
	x[i].style.backgroundColor = color2;
	x[i].style.borderColor = color4;
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