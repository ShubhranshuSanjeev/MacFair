var i = 1;
function getSlider()
{
	var img = document.getElementById("slide");
	if(i<5)
	{
		img.src = "sliderImage/"+i+".jpg";
	    i++;
	}
	else 
	{
		img.src= "sliderImage/"+i+".png";
		i++;
	}

	if (i === 9)
		i=1;
	window.setTimeout("getSlider()", 5000);
}