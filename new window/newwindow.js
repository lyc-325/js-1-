window.onload=function prepareLinks(){
	var links = document.getElementsByTagName("a");
	for (var i = links.length - 1; i >= 0; i--) {
		links[i].onclick=function(){
			openWeb(this.getAttribute("href"));
			return false;
		}
	}
}
function openWeb(webURL){
	window.open(webURL,"popup","width=500,height=500")
}
