function countWords(sent){
	var words=sent.split(" ");
	var numwords = words.length;
	return numwords;
}

function makeAdder(num1){ 
  var returnfunction = function(num2){
    return num1+num2;
  };

  return returnfunction;
}

function forEach(arr, func){
	for(var i=0;i<arr.length;i++){
		func(arr[i]);
	}
}

function map(arr, func){
	var returnarr=[];
	for(var i=0;i<arr.length;i++){
		returnarr[i] = func(arr[i]);
	}
	return returnarr;
}	

function filter(arr, func){
	var j=0;
	var returnarr=[];
	for(var i=0;i<arr.length;i++){
		if(func(arr[i])){
			returnarr[j]=arr[i];
			j++;
		}
	}
	return returnarr;
}

function contains(arr, val){
	var sol=false;
	for(var i=0;i<arr.length;i++){
		if(val==arr[i]){
			sol = true;
		}
	}
	for (var key in arr) {
        if(arr[key]==val){
        	sol=true;
        }
    }
	return sol;
}

var countWordsInReduce = function(words1, words2){
	var words;
	var word_array1 = [];
	var word_array2 = [];
	word_array2=words2.split(" ");
	if(isNaN(words1)){
		word_array1=words1.split(" ");
		words=word_array1.length+word_array2.length;
	
	}else{
		words=words1+word_array2.length;
	}
	return words;
};

function reduce(arr, from, func){
	var reduceVal=0;
	var curpos=from;
	var to = arr.length-1;
	for(curpos; curpos<to; curpos++){
		reduceVal = func(arr[curpos],arr[curpos+1]);
		arr[curpos+1] = reduceVal;
	}
	return reduceVal;
}


var fillerfunc = function(a, b) {
      return a+b;
 };

function sum(arr){
	var num = reduce(arr,0,fillerfunc);
	return num;
}

function every(arr,func){
	var sol=true;
	for(var i=0;i<arr.length;i++){
		if(!func(arr[i])){
			sol = false;
		}
	}
	return sol;
}

function any(arr,func){
	var sol=false;
	for(var i=0;i<arr.length;i++){
		if(arguments.length>1){
			if(func(arr[i])){
				sol = true;
			}
		}else{
			if(arr[i]){
				sol=true;
			}
		}	
	}
	return sol;
}

function once(func){
	var hasrun = false;	
	return function(){
		if(!hasrun){
			func();
			hasrun=true;
		}
	};
}

function wrapper(func1, func2){
	var retfunc = function(){
		return func2(func1);
	};
	return retfunc;
}
