function prepareGallery() {							//onclick事件绑定
	var gallery = document.getElementById('imagegallery');
	var links = gallery.getElementsByTagName('a');
	for (var i = links.length - 1; i >= 0; i--) {
		links[i].onclick = function(){
			if (showPic(this)) {
				return false;
			}else{
				return true;
			}
		}
	}
}
function showPic(whichpic){
	var source = whichpic.getAttribute('href');
	var placeholder = document.getElementById('placeholder');
	if (placeholder.nodeName != 'IMG') return false;	//检测placeholder元素是否存在，nodeName 返回的值为大写字母
	placeholder.setAttribute('src',source);		//设置src 属性为source
	if (document.getElementById('description')) {
		var text = whichpic.getAttribute('title') ? whichpic.getAttribute("title") : '';
		var description = document.getElementById('description');
		if (description.firstChild.nodeType == 3) {		//检测第一个子元素是否为文本节点3，1-元素节点，2-属性节点
			description.firstChild.nodeValue = text;
		}
	}
	return true;
}

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

addLoadEvent(prepareGallery);