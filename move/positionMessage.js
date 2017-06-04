function positionMessage(){
	var elem = document.getElementById("move");
	elem.style.position = "absolute";
	elem.style.left = "0px";
	elem.style.top = "0px";
	moveElement("move",500,500,10);
}
addLoadEvent(positionMessage);