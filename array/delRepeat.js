function array(){
	var n = new [];
    for (var i = this.length - 1; i >= 0; i--) {
    	if (n.indexOf(this[i] == -1)) {
    		n.push(this[i]);
    	}
    }
}