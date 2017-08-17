console.log(primo(18));
function primo(num){
	var cont= num;
	if(num < 1){return false;}
	if(num == 1){return true;}
	else{
		var i=2;
		for(i<num;i++;){
			var res =num % i
			if(res == 0){return false;}
			else{return true;}
		}
	}
}

