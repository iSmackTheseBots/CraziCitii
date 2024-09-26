function refreshAP(){
	if(apMenu.classList.contains('hidden')) return;
	apMenu.innerHTML = ``;
	let apTitle = document.createElement('h1');
	apMenu.appendChild(apTitle)
	apTitle.innerText = `${player.city.name} Airlines`;
	for (const [key, value] of Object.entries(cities)) {
		if(value.id == player.city.id) {
			}else{
		for (const [key1, value1] of Object.entries(player.city.canGo)) {
			if(value1 == value.id){
				let container = document.createElement('div');
				container.classList.add('flyCont')
				apMenu.appendChild(container)
				let cityName = document.createElement('h2');
				cityName.innerText = `${value.name}`
				container.appendChild(cityName)
				let flyCost = document.createElement('p');
				flyCost.innerText = `$${value.flyPrice.toLocaleString()}`
				flyCost.classList.add('flyCost')
				container.appendChild(flyCost)
				let flyButton = document.createElement('button');
				flyButton.innerText = `Go!`
				flyButton.classList.add('flyButton')
				container.appendChild(flyButton)
				flyButton.addEventListener('click', () => {
					fly(value)
				})
			}else{}}}}
}
function fly(city){
	cost = city.flyPrice
	if(player.money < cost){
		showToast(`You need $${cost - player.money} more`,1250)
		return
	}
	if(city == player.city){
		showToast(`You nare already in ${city.name} more`,1250)
		return
	}
	
	player.money -= cost
	player.city = city;
	updateStats();
}

let cities = {
	home: {
		name:'Crazi Citi',
		
		weapons: {
			ars:ars.home,
			handguns:handguns.home,
			snipers:snipers.home,
			shotguns:shotguns.home,
			melees:melees.home,
		},
		armours:armours.home,
		tools:tools.home,
		consumables:consumables.home,
		flyPrice:100,
		id: 0,
		canGo: [1,3,4,8,9]
	},
	lasVegas: {
		name:'Las Vegas',
		
		weapons: {
			ars:ars.lasVegas,
			handguns:handguns.lasVegas,
			snipers:snipers.lasVegas,
			shotguns:shotguns.lasVegas,
			melees:melees.lasVegas,
		},
		armours:armours.lasVegas,
		tools:tools.lasVegas,
		consumables:consumables.lasVegas,
		flyPrice:200,
		id: 1,
		canGo: [0,3,4,8],
	},
	rome: {
		name:'Rome',
		
		weapons: {
			ars:ars.rome,
			handguns:handguns.rome,
			snipers:snipers.rome,
			shotguns:shotguns.rome,
			melees:melees.rome,
		},
		armours:armours.rome,
		tools:tools.rome,
		consumables:consumables.rome,
		flyPrice:1000,
		id: 2,
		canGo: [5,7,9,10],
	},
	ny: {
		name:'New York',
		
		weapons: {
			ars:ars.ny,
			handguns:handguns.ny,
			snipers:snipers.ny,
			shotguns:shotguns.ny,
			melees:melees.ny,
		},
		armours:armours.ny,
		tools:tools.ny,
		consumables:consumables.ny,
		flyPrice:500,
		id:3,
		canGo: [0,1,8]
	},
	bj: {
		name:'Beijing',
		
		weapons: {
			ars:ars.bj,
			handguns:handguns.bj,
			snipers:snipers.bj,
			shotguns:shotguns.bj,
			melees:melees.bj,
		},
		armours:armours.bj,
		tools:tools.bj,
		consumables:consumables.bj,
		flyPrice:300,
		id:4,
		canGo: [0,1,5,6,10],
	},
	rio: {
		name:'Rio',
		
		weapons: {
			ars:ars.rio,
			handguns:handguns.rio,
			snipers:snipers.rio,
			shotguns:shotguns.rio,
			melees:melees.rio,
		},
		armours:armours.rio,
		tools:tools.rio,
		consumables:consumables.rio,
		flyPrice:1500,
		id:5,
		canGo: [2,4,6],
	},
	sn: {
		name:'Sydney',
		
		weapons: {
			ars:ars.sn,
			handguns:handguns.sn,
			snipers:snipers.sn,
			shotguns:shotguns.sn,
			melees:melees.sn,
		},
		armours:armours.sn,
		tools:tools.sn,
		consumables:consumables.sn,
		flyPrice:1500,
		id:6,
		canGo: [4,5,7,8],
	},
	paris: {
		name:'Paris',
		
		weapons: {
			ars:ars.paris,
			handguns:handguns.paris,
			snipers:snipers.paris,
			shotguns:shotguns.paris,
			melees:melees.paris,
		},
		armours:armours.paris,
		tools:tools.paris,
		consumables:consumables.paris,
		flyPrice:1500,
		id:7,
		canGo: [2,6,9,10],
	},
	tk: {
		name:'Tokyo',
		
		weapons: {
			ars:ars.tk,
			handguns:handguns.tk,
			snipers:snipers.tk,
			shotguns:shotguns.tk,
			melees:melees.tk,
		},
		armours:armours.tk,
		tools:tools.tk,
		consumables:consumables.tk,
		flyPrice:400,
		id:8,
		canGo: [0,1,3,6],
	},
	db: {
		name:'Dubai',
		
		weapons: {
			ars:ars.db,
			handguns:handguns.db,
			snipers:snipers.db,
			shotguns:shotguns.db,
			melees:melees.db,
		},
		armours:armours.db,
		tools:tools.db,
		consumables:consumables.db,
		flyPrice:1000,
		id:9,
		canGo: [0,2,7,10],
	},
	london: {
		name:'London',
		
		weapons: {
			ars:ars.london,
			handguns:handguns.london,
			snipers:snipers.london,
			shotguns:shotguns.london,
			melees:melees.london,
		},
		armours:armours.london,
		tools:tools.london,
		consumables:consumables.london,
		flyPrice:1500,
		id:10,
		canGo: [2,4,7,9],
	},  
};



////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////



const nodes = [
  { id: 'Crazi Citi', name: 'Crazi Citi', imagePath: 'cc.jpg' },
  { id: 'Las Vegas', name: 'Las Vegas', imagePath: 'lv.jpg' },
  { id: 'New York', name: 'New York', imagePath: 'ny.jpg' },
  { id: 'Beijing', name: 'Beijing', imagePath: 'bj.jpg' },
  { id: 'Tokyo', name: 'Tokyo', imagePath: 'tokyo.jpg' },
  { id: 'Dubai', name: 'Dubai', imagePath: 'dubai.jpg' },
  { id: 'London', name: 'London', imagePath: 'london.jpg' },
  { id: 'Rio', name: 'Rio', imagePath: 'rio.jpg' },
  { id: 'Rome', name: 'Rome', imagePath: 'rome.jpg' },
  { id: 'Paris', name: 'Paris', imagePath: 'paris.jpg' },
  { id: 'Sydney', name: 'Sydney', imagePath: 'sydney.jpg' },
];


const connections = [
  { from: 'Crazi Citi', to: 'Las Vegas' },
  { from: 'Crazi Citi', to: 'New York' },
  { from: 'Crazi Citi', to: 'Beijing' },
  { from: 'Crazi Citi', to: 'Tokyo' },
  { from: 'Crazi Citi', to: 'Dubai' },
  { from: 'Las Vegas', to: 'New York' },
  { from: 'Las Vegas', to: 'Beijing' },
  { from: 'Las Vegas', to: 'Tokyo' },
  { from: 'Rome', to: 'Rio' },
  { from: 'Rome', to: 'Paris' },
  { from: 'Rome', to: 'Dubai' },
  { from: 'Rome', to: 'London' },
  { from: 'New York', to: 'Tokyo' },
  { from: 'Beijing', to: 'Rio' },
  { from: 'Beijing', to: 'Sydney' },
  { from: 'Beijing', to: 'London' },
  { from: 'Rio', to: 'Sydney' },
  { from: 'Sydney', to: 'Paris' },
  { from: 'Sydney', to: 'Tokyo' },
  { from: 'Paris', to: 'Dubai' },
  { from: 'Paris', to: 'London' },
  { from: 'Dubai', to: 'London' },
];

const svg = document.getElementById('node-map');

let currentLocation = 'cc';

// Helper function to get relative node positions based on percentage
function getNodePosition(index, totalNodes, radius, centerX, centerY) {
  const angle = (index / totalNodes) * 2 * Math.PI;
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);
  return { x, y };
}

// Place nodes in a circular layout (responsive, using percentages)
const radius = 40; // Relative radius as a percentage of the viewBox size
const centerX = 50; // Center X in percentage (middle of viewBox)
const centerY = 50; // Center Y in percentage (middle of viewBox)

nodes.forEach((node, index) => {
  const pos = getNodePosition(index, nodes.length, radius, centerX, centerY);
  node.x = pos.x;
  node.y = pos.y;
});

// Draw lines between connected nodes
connections.forEach(connection => {
  const fromNode = nodes.find(node => node.id === connection.from);
  const toNode = nodes.find(node => node.id === connection.to);

  if (fromNode && toNode) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', `${fromNode.x}%`);
    line.setAttribute('y1', `${fromNode.y}%`);
    line.setAttribute('x2', `${toNode.x}%`);
    line.setAttribute('y2', `${toNode.y}%`);
    line.id = `line-${connection.from}-${connection.to}`;
    svg.appendChild(line);
  }
});

// Now create nodes as SVG circles
// Now create nodes as images (after the lines)
function createNode(node) {
  const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
  image.setAttribute('href', '../img/city/' + node.imagePath); // Use the image path from the node object
  image.setAttribute('x', `${node.x - 5}%`); // Adjust for the image width
  image.setAttribute('y', `${node.y - 5}%`); // Adjust for the image height
  image.setAttribute('width', '10%'); // Set image size (width)
  image.setAttribute('height', '10%'); // Set image size (height)
  image.id = node.id;

  // Create a text label for the node
  const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  text.setAttribute('x', `${node.x}%`);
  text.setAttribute('y', `${node.y + 10}%`); // Adjust text positioning below the image
  text.setAttribute('text-anchor', 'middle'); // Center align text
  text.setAttribute('font-size', '25%');
	text.setAttribute('font-weight', 'bold');
  text.innerHTML = node.name;

  svg.appendChild(image); // Add image to SVG (after the lines)
  svg.appendChild(text);   // Add text to SVG (after the lines)
}


// Create the nodes and labels after lines
nodes.forEach(node => {
  createNode(node);
});


// Function to update the display of the current location and create movement buttons
function updateLocation(newLocation) {
  nodes.forEach(node => {
    const circle = document.getElementById(node.id);
    circle.setAttribute('fill', 'white');
  });

  const currentCircle = document.getElementById(newLocation);
  currentCircle.setAttribute('fill', 'green');
  currentLocation = newLocation;

  connections.forEach(connection => {
    const line = document.getElementById(`line-${connection.from}-${connection.to}`) ||
                 document.getElementById(`line-${connection.to}-${connection.from}`);
    if (line) {
      line.setAttribute('stroke', 'black');
      line.setAttribute('stroke-width', '0.20');
    }
  });

  connections.forEach(connection => {
    if (connection.from === newLocation || connection.to === newLocation) {
      const line = document.getElementById(`line-${connection.from}-${connection.to}`) ||
                   document.getElementById(`line-${connection.to}-${connection.from}`);
      if (line) {
        line.setAttribute('stroke', 'green');
        line.setAttribute('stroke-width', '.75');
      }
    }
  });

}

// Initialize starting location