function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof window.onload !="function") {    ///如果处理函数中未绑定任何函数，就直接执行
		window.onload = func;
	}else{
		window.onload=function(){	///如果已经绑定函数，就将新函数添加到末尾执行
			oldonload();
			func();
		}
	}
}

