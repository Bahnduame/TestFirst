function repeat(repeatstring,num){
	var returnstring = "";
	for(var i=0; i<num; i++){
		returnstring=returnstring+repeatstring;
	}
	return returnstring;
}

function join(stuff,delimiter){
	var len=stuff.length;
	returnstring="";
	if(len!=0){
		if(delimiter){
			for(var i=0; i<len; i++){
				returnstring=returnstring+stuff[i]+delimiter;
			}
			returnstring=returnstring.slice(0, - 1);
		}else{
			for(var i=0; i<len; i++){
				returnstring=returnstring+stuff[i];
			}
		}
	}
	return returnstring;
}

function sum(nums){
	var len=nums.length;
	returnValue=0;
	if(len!=0){
		for(var i=0; i<len; i++){
			returnValue+=nums[i];
		}
	}
	return returnValue;
}

function paramify(inputhash){
	var returnstring="";
	var arr = [];
    for (var key in inputhash) {
        if (inputhash.hasOwnProperty(key)) {
            arr.push(key);
        }
    }
    arr.sort();

    for (i = 0; i < arr.length; i++) {
        returnstring=returnstring+arr[i]+"="+inputhash[arr[i]]+"&";
    }
	returnstring=returnstring.slice(0, - 1);
	return returnstring;
}

function factorial(num){
	returnValue=1;
	for(var i=1; i<=num; i++){
		returnValue=returnValue*i;
	}	
	return returnValue;
}

function concat_string(){
	var returnstring="";
	for (var i = 0; i < arguments.length; ++i){
		returnstring=returnstring+arguments[i];
	}
	return returnstring;
}

