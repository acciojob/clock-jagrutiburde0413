//your JS code here. If required.
function displayTimer(){
	var date=new Date();
	var time=date.toLocaleTimeString();
	var option={
		day:'numeric',month:'numeric',year:'numeric'
	}
	var today=date.toLocaleDateString(undefined, option);
	document.getElementById("timer").innerHTML=today+", "+time;
}
setInterval(displayTimer,1000)
