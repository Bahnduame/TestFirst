function translate(junk){
	var translation;
	var words = junk.split(" ");
	var letters =[];
	var numcons, numLetters;
	var qsearch;
	for(var i=0;i<words.length;i++){
		letters = words[i].split("");
		numLetters=letters.length;
		for(var j=0;j<numLetters;j++){
			if(isCons(letters[j])){
				if(letters[j]=="q"){
					qsearch=true;
				}else{
					qsearch=false;
				}
				letters[letters.length]=letters[j];
				letters[j]="";
			}else if(qsearch==true && letters[j]=="u"){
				letters[letters.length]=letters[j];
				letters[j]="";	
				qsearch=false;
			}else{
				break;
			}
		}
		words[i] = letters.join("")+"ay";
	}
	translation=words.join(" ");
	return translation;
}

function isCons(letter){
	var consonants=['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z'];
	for(var i=0; i<consonants.length;i++){
		if(letter==consonants[i]){
			return true;
		}
	}

	return false;
}