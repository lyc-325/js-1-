
function moveElement(elementID,finalx,finaly,interval){
	var elem = document.getElementById("elementID");
	if (elem.movement) {		//将movement设置为elem的属性
		clearTimeout(elem.movement)
	}
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos == finalx && ypos == finaly) {
		return true;
	}if (xpos<finalx) {
		xpos++;
	}if (xpos>finalx) {
		xpos--;
	}if (ypos>finaly) {
		ypos--;
	}if (xpos<finaly) {
		ypos++;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos +"px";
	var repeat = "moveElement('"+elementID+"',"+finalx+","+finaly+","+interval+")";
	elem.movement = setTimeout(repeat,interval);
}





