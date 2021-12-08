// MIT License
// Copyright (c) 2020 Luis Espino

positionNodes = [
	{position: 'A', statusA: 'CLEAN', statusB: 'CLEAN', wasVisited: false},
	{position: 'A', statusA: 'CLEAN', statusB: 'DIRTY', wasVisited: false},
	{position: 'A', statusA: 'DIRTY', statusB: 'CLEAN', wasVisited: false},
	{position: 'A', statusA: 'DIRTY', statusB: 'DIRTY', wasVisited: false},
	{position: 'B', statusA: 'CLEAN', statusB: 'CLEAN', wasVisited: false},
	{position: 'B', statusA: 'CLEAN', statusB: 'DIRTY', wasVisited: false},
	{position: 'B', statusA: 'DIRTY', statusB: 'CLEAN', wasVisited: false},
	{position: 'B', statusA: 'DIRTY', statusB: 'DIRTY', wasVisited: false},
  ];
  
  function allLocationsWereVisited() {
	const wasVisited = positionNodes.find(node => !node.wasVisited);
	return wasVisited === undefined;
  }
  
  function mess(states) {
	if (Math.floor(Math.random() * (2))){
	  states[Math.floor(Math.random() * (2)) + 1] = 'DIRTY';
	}
  }
  
  function reflex_agent(location, state) {
	if (state === 'DIRTY') return 'CLEAN';
	else if (location === 'A') return 'RIGHT';
	else if (location === 'B') return 'LEFT';
  }
  
  function modifyStatePositionVisited(states) {
	positionNodes.find(node => {
	  if (node.position === states[0] && node.statusA === states[1] && node.statusB === states[2])
		node.wasVisited = true;
	});
  }
  
  function test(states) {
  
	const location = states[0];
	const state = states[0] === 'A' ? states[1] : states[2];
	const action_result = reflex_agent(location, state);
  
	document.getElementById(
		"log"
	).innerHTML += `<br> ----------- ESTADO ${JSON.stringify(states)} -----------`;
  
	document.getElementById('log').innerHTML += '<br>Location: '.concat(location).
		concat(' | Action: ').
		concat(action_result);
  
	modifyStatePositionVisited(states);
  
	if (action_result === 'CLEAN') {
	  if (location === 'A') states[1] = 'CLEAN';
	  else if (location === 'B') states[2] = 'CLEAN';
	}
	else if (action_result === 'RIGHT') states[0] = 'B';
	else if (action_result === 'LEFT') states[0] = 'A';
  
	mess(states);
  
	const timerId = setTimeout(function() {
	  test(states);
	}, 100);
  
	if (allLocationsWereVisited()) {
	  document.getElementById(
		  'log',
	  ).innerHTML += `<br> ----------- TODAS LAS UBICACIONES FUERON VISITADAS -----------`;
	  clearTimeout(timerId);
	}
  }
  
  const states = ['A', 'CLEAN', 'CLEAN'];
  test(states);
  