function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload !="function") { 
		window.onload = func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}

function moveElement(elementID,finalx,finaly,interval){
	var elem = document.getElementById("elementID");
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
	movement = setTimeout(repeat,interval);
}

function positionMessage(){
	var elem = document.getElementById("move");
	elem.style.position = "absolute";
	elem.style.left = "0px";
	elem.style.top = "0px";
	moveElement("move",500,500,10);
}
		
addLoadEvent(positionMessage);


