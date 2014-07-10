function Calculator(){
	this.curvalue = 0;
	this.value = function(){
		return this.curvalue;
	}
	this.add = function(sumnum){
		this.curvalue=this.curvalue+sumnum;
	}
	this.subtract = function(subnum) {
		this.curvalue=this.curvalue-subnum;
	}
}