function getNewContent(){
	var request = new XMLHttpRequest();
	if (request) {
		request.open("GET","txt.txt","true");
		request.onreadystatechange = function(){
			if (request.readyState == 4) {
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById("new").appendChild(para);
			}
		};
		request.send(null)
	}else{alert("sorry,i am boom");}
}
addLoadEvent(getNewContent);