// MIT License
// Copyright (c) 2021 Luis Espino

function succesorrs(n, e){
	var suc = []
	for (var i = 0; i < n.length - 1; i++) {
		let child = n.substring(0,i)+n.substring(i,i+1)+n.substring(i+1)
		alert(child)
		
	}



	return [[n[1]+n[0]+n[2]+n[3],,inc()],[[n[0]+n[2]+n[1]+n[3],heuristic([n[0]+n[2]+n[1]+n[3],e),inc()],[[n[0]+n[1]+n[3]+n[2],,inc()]]
    if (n[0]=='A')
        return [['B', n[1]+5,inc()], ['C', n[1]+6,inc()]]
    if (n[0]=='B')
        return [['A', n[1]+5,inc()], ['C', n[1]+6,inc()], ['D', n[1]+3,inc()], ['E', n[1]+5,inc()]]
    if (n[0]=='C')
        return [['A', n[1]+6,inc()], ['B', n[1]+6,inc()], ['E', n[1]+2,inc()]]
    if (n[0]=='D')
        return [['B', n[1]+3,inc()], ['E', n[1]+3,inc()], ['F', n[1]+4,inc()]]
    if (n[0]=='E')
        return [['B', n[1]+5,inc()], ['C', n[1]+2,inc()], ['D', n[1]+3,inc()], ['F', n[1]+1,inc()]]
    if (n[0]=='F')
        return [['D', n[1]+4,inc()], ['E', n[1]+1,inc()]]
}

function heuristic(start, end) {
	var tiles_out = 0
	for (var i = 0; i < start.length; i++){
		if (start[i] != end[i]) tiles_out++
	}
	return tiles_out
}

function bestfirst(start, end){
	var dot = '{'
	var list = [[start,heuristic(start, end),inc()]];
	dot+=list[0][2]+' [label="'+list[0][0]+'"];'
	while (list.length > 0){
		var current = list.shift();
		if (current[0] == end) {			
			dot += '}'
			return dot
		}
		var temp = successors(current, end);
		//temp.reverse();
		temp.forEach(val => dot+=val[2]+' [label="'+val[0]+'"];'+current[2]+'--'+val[2]+' [label="'+val[1]+'"] ;')
		list = temp.concat(list);
		list = list.sort( function(a,b) { return a[1] - b[1] });
	}
	dot += '}'
	return dot
}

var id = 1
function inc() {
	return id++
}

function puzzle() {
	alert('inicio')
	var nodes = prompt("Ingrese texto inicial y final separado por un espacio, (texto mismo tamaño)", "halo hola")
	if (nodes == null || nodes == '') nodes = 'halo hola'
	nodes = nodes.split(' ')
	//return bestfirst(nodes[0], nodes[1])
}
