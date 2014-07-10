function Calculator(){
	this.curpos=0;
	this.stack=[];
	var x,y=0;
	
	this.value = function(){
		return this.stack[this.curpos-1];
	}

	this.push = function(num){
		this.stack[this.curpos]=num;
		this.curpos=this.curpos+1;
	}
	
	this.plus = function(){
		if(this.curpos<=1){
			throw "calculator is empty";
		}else{
			this.curpos=this.curpos-1;
			this.stack[this.curpos-1]+=	this.stack[this.curpos];
		}
	}
	
	this.minus = function(){
		if(this.curpos<=1){
			throw "calculator is empty";
		}else{
			this.curpos=this.curpos-1;
			this.stack[this.curpos-1]-=this.stack[this.curpos];
		}	
	}

	this.divide = function(){
		if(this.curpos<=1){
			throw "calculator is empty";
		}else{
			this.curpos=this.curpos-1;
			this.stack[this.curpos-1]=this.stack[this.curpos-1] / this.stack[this.curpos];
		}
	}

	this.times = function(){
		if(this.curpos<=1){
			throw "calculator is empty";
		}else{
			this.curpos=this.curpos-1;
			this.stack[this.curpos-1]*=this.stack[this.curpos];
		}
	}
}