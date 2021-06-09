// MIT License
// Copyright (c) 2020 Luis Espino

function successors(n){
	if (n == 1) return [2, 4, 5];
	if (n == 2) return [1, 3, 4, 5, 6];
	if (n == 3) return [2, 5, 6];
	if (n == 4) return [1, 2, 5, 7, 8];
	if (n == 5) return [1, 2, 3, 4, 6, 7 ,8, 9];
	if (n == 6) return [2, 3, 5, 8 ,9];
	if (n == 7) return [4, 5, 8];
	if (n == 8) return [4, 5, 6 ,7, 9];
	if (n == 9) return [5, 6 , 8];
}


function costo(start, end){
	//document.getElementById("log").innerHTML+="<br><br>".concat("<h3>Depth First Search (reverse)</h3>");
	var dot = '{'
	var list = [start];
	while (list.length > 0){
		var current = list.shift();
		if (current == end) {			
			dot += '}'
			return dot
		}
		var temp = successors(current);
		temp.reverse();
		temp.forEach(val => dot+=current+'->'+val+';')
		list = temp.concat(list);
	}
	dot += '}'
	return dot
}

