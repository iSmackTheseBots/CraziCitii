function displayCrime(crimeType) {
	const crimeList = document.getElementById("crimeList");
  crimeList.innerHTML = "";
	
	crimeType.forEach(item => {
		const object = player.inventory.find((invItem) => invItem.name === item.item.name);
		if(object){
			objectAmount = object.amountOwned
		} else {
			objectAmount = 0;
			}
		
    const doCrime = document.createElement("button");
    doCrime.classList.add("doCrime");

		if(crimes[item.type][item.id].attempts <= 20){
			crimes[item.type][item.id].bg = 'a22'
		}else if(crimes[item.type][item.id].attempts <= 50){
			crimes[item.type][item.id].bg = 'aa2'
		}else{
			crimes[item.type][item.id].bg = '2a2'
		}
			
		if(item.minCash){
		doCrime.innerHTML = `
		<img src="${item.img}">
		<div><h3>${item.name}</h3>
		<div class='flex'><div class='crimerewards'><h3>xp: ${item.xpEarned}</h3></div>
		<div class='crimerewards'><h3>Cash: ${item.minCash}-${item.maxCash}</h3></div></div>
		<div class='crimerewards'><h3 style='background-color: #${crimes[item.type][item.id].bg}'>Courage: ${item.courage}</h3></div>
		<div class='flex'><img src="${item.item.img}" alt="${item.item.name}">
		<h5>x${objectAmount}</h5></div></div>`;
		} else {
		doCrime.innerHTML = `
		<img src="${item.img}">
		<div><h3>${item.name}</h3>
		<div class='flex'><div class='crimerewards'><h3>xp: ${item.xpEarned}</h3></div>
		<div class='crimerewards'><h3>Reward: Some Items</h3></div></div>
		<div class='crimerewards'><h3 style='background-color: #${crimes[item.type][item.id].bg}'>Courage: ${item.courage}</h3></div>
		<div class='flex'><img src="${item.item.img}" alt="${item.item.name}">
		<h5>x${objectAmount}</h5></div></div>`;
		}			
		doCrime.addEventListener('click', () => {
			crime(item, item.type)
		});
		crimeList.appendChild(doCrime);
	});
	crimeList.classList.remove('hidden');
};

function crime(crime){
	const hasItem = player.inventory.find((invItem) => invItem.name === crime.item.name);
	let passRate,lItemRate;
    
	if(!hasItem || hasItem.amountOwned < 1){
		showToast(`You need ${crime.item.name}`, 1250);
    return;}
	if(player.courage < crime.courage){
		showToast(`You don't have enough courage.`, 1250);
    return;}

	player.courage-= crime.courage;
	crimes[crime.type][crime.id].attempts++;

	switch(crime.type){
			case 'scavage':
			passRate = 0.49;
			lItemRate = .04;
			break;
			case 'hustle':
			passRate = 0.46;
			lItemRate = .06;
			break
			case 'shoplift':
			passRate = 0.43;
			lItemRate = .08;
			break;
			case 'robbery':
			passRate = 0.40;
			lItemRate = .10;
			break;
			default:
			console.log('error')
			break;
	}
	switch(crime.bg){
			case 'aa2':
			passRate *= 1.5;
			lItemRate /= 1.25;
			break;
			case '2a2':
			passRate *= 2;
			lItemRate /= 2;
			break;
	}

	let rand = Math.random();//Pass
	let rand2 = Math.random();//Drop Item

	if(rand < passRate){
		droppedItem = rand2 < lItemRate
		if(droppedItem) removeFromInventory(hasItem, 1);
		gainXP(crime.xpEarned);

		if(!crime.reward){
			let cashReward = Math.floor(Math.random() * (crime.maxCash - crime.minCash + 1)) + crime.minCash;
  		player.money += cashReward;
			droppedItem ? showToast(`+$${cashReward} -${hasItem.name}`, 3000) : showToast(`+$${cashReward}`, 3000); 
  	}else{
			let rIndex = Math.floor(Math.random() * crime.reward.length);// set between 0 and 1 and causes if else statement to trigger and cause array to be added
			crime.reward[rIndex] ? addToInventory(crime.reward[rIndex],1) : addToInventory(crime.reward,1)
			if(droppedItem){
				crime.reward[rIndex] ? showToast(`+${crime.reward[rIndex].name} -${hasItem.name}`, 3000) : showToast(`+${crime.reward.name} -${hasItem.name}`, 3000)
			}else{
				crime.reward[rIndex] ? showToast(`+${crime.reward[rIndex].name}`, 3000) : showToast(`+${crime.reward.name}`, 3000); 
				}
		}
	}else{
		showToast(`You Failed`, 3000);
		if(rand2 < lItemRate){
			removeFromInventory(hasItem, 1);
			showToast(`You Failed And Dropped ${crime.item.name}`, 3000)
			}
		}

	updateStats();
	saveCrimes();
	switch(crime.type){
			case 'scavage':
			displayCrime(crimes.scavage)
			break;
			case 'hustle':
			displayCrime(crimes.hustle)
			break;
			case 'shoplift':
			displayCrime(crimes.shoplift)
			break;
			case 'robbery':
			displayCrime(crimes.robbery)
			break;
			default:
			console.log('error')
			break;
	}
}
let sunglasses = tools.home.find(x => x.name == 'Sun Glasses')
let busPass = tools.home.find(x => x.name == 'Bus Pass')
let bike = tools.lasVegas.find(x => x.name == 'Mountain Bike')
let shank = tools.rio.find(x => x.name == 'Shank')

let tanktop = shRewards.find(x => x.name == 'Tank Top')
let trainers = shRewards.find(x => x.name == 'Trainers')
let necklace = shRewards.find(x => x.name == 'Necklace')
let bracelet = shRewards.find(x => x.name == 'Bracelet')
let earings = shRewards.find(x => x.name == 'Pair Of Earings')
let jacket = shRewards.find(x => x.name == 'Jacket')


// Scavage
let crimes = {
	// Scavage
	scavage: [{
	name: "The Train Station",
  img: '../img/crime/scavage/train.jpg',
	type: 'scavage',
	bg: 'a22',
	courage: 1,
	minCash: 5,
	maxCash: 10,
	xpEarned: 5,
	attempts: 0,
	id:0,
	item: sunglasses,
},
{
	name: "Under Bridges",
  img: '../img/crime/scavage/bridge.jpg',
	type: 'scavage',
	bg: 'a22',
	courage: 1,
	minCash: 7,
	maxCash: 8,
	xpEarned: 5,
	attempts: 0,
	id:1,
	item: sunglasses,
},
{
	name: "Trash Cans",
  img: '../img/crime/scavage/trashcan.jpg',
	type: 'scavage',
	bg: 'a22',
	courage: 1,
	reward: sRewards,
	xpEarned: 6,
	attempts: 0,
	id:2,
	item: sunglasses,
},
{
	name: "The Neighborhood",
  img: '../img/crime/scavage/hood.jpg',
	type: 'scavage',
	bg: 'a22',
	courage: 1,
	minCash: 5,
	maxCash: 13,
	attempts: 0,
	xpEarned: 6,
	id:3,
	item: sunglasses,
},
{
	name: "Dumpsters",
  img: '../img/crime/scavage/dump.jpg',
	type: 'scavage',
	bg: 'a22',
	courage: 1,
	reward: sRewards,
	xpEarned: 7,
	attempts: 0,
	id:4,
	item: sunglasses,
},
{
	name: "The Cinema",
  img: '../img/crime/scavage/movie.jpg',
	type: 'scavage',
	bg: 'a22',
	courage: 1,
	minCash: 1,
	maxCash: 20,
	xpEarned: 8,
	attempts: 0,
	id:5,
	item: sunglasses,
}],
	// Hustle
hustle: [{
	name: "Fake Designer Clothes",
  img: '../img/crime/hustle/clothes.jpg',
	type: 'hustle',
	bg: 'a22',
	courage: 3,
	minCash: 7,
	maxCash: 11,
	xpEarned: 20,
	attempts: 0,
 	id:0,
	item: busPass, 
},
{
	name: "Stolen CD's",
  img: '../img/crime/hustle/cd.jpg',
	type: 'hustle',
	bg: 'a22',
	courage: 3,
	minCash: 8,
	maxCash: 11,
	xpEarned: 22,
	attempts: 0,
	id:1,
	item: busPass,
},
{
	name: "Fake Designer Shoes",
  img: '../img/crime/hustle/shoes.jpg',
	type: 'hustle',
	bg: 'a22',
	courage: 3,
	minCash: 7,
	maxCash: 10,
	xpEarned: 24,
	attempts: 0,
	id:2,
	item: busPass,
},
{
	name: "Fake ID's",
  img: '../img/crime/hustle/id.jpg',
	type: 'hustle',
	bg: 'a22',
	courage: 3,
	minCash: 5,
	maxCash: 9,
	xpEarned: 26,
	attempts: 0,
	id:3,
	item: busPass,
},
{
	name: "Artifacts",
  img: '../img/crime/hustle/artifact.jpg',
	type: 'hustle',
	bg: 'a22',
	courage: 3,
	minCash: 7,
	maxCash: 10,
	xpEarned: 28,
	attempts: 0,
	id:4,
	item: busPass,
},
{
	name: "Firearms",
  img: '../img/weapon/handgun/glock.jpg',
	type: 'hustle',
	bg: 'a22',
	courage: 3,
	minCash: 9,
	maxCash: 15,
	xpEarned: 30,
	attempts: 0,
	id:5,
	item: busPass,
},
{
	name: "Drugs",
  img: '../img/crime/hustle/pill.jpg',
	type: 'hustle',
	bg: 'a22',
	courage: 3,
	minCash: 10,
	maxCash: 17,
	xpEarned: 32,
	attempts: 0,
	id:6,
	item: busPass,
},
{
	name: "Exotic Animals",
  img: '../img/crime/hustle/animal.jpg',
	type: 'hustle',
	bg: 'a22',
	courage: 3,
	minCash: 9,
	maxCash: 18,
	xpEarned: 34,
	attempts: 0,
	id:7,
	item: busPass,
},
{
	name: "Service Systems",
  img: '../img/crime/hustle/system.jpg',
	type: 'hustle',
	bg: 'a22',
	courage: 3,
	minCash: 9,
	maxCash: 18,
	xpEarned: 36,
	attempts: 0,
	id:8,
	item: busPass,
},
{
	name: "Human Organs",
  img: '../img/crime/hustle/organ.jpg',
	type: 'hustle',
	bg: 'a22',
	courage: 3,
	minCash: 9,
	maxCash: 20,
	xpEarned: 38,
	attempts: 0,
	id:9,
	item: busPass,
}],
	// Shoplift
shoplift: [{
	name: "Chocolate Bars",
  img: '../img/crime/shoplift/chocolate.jpg',
	type: 'shoplift',
	bg: 'a22',
	courage: 4,
	minCash: 17,
	maxCash: 23,
	xpEarned: 40,
	attempts: 0,
	id:0,
	item: bike,
},
{
	name: "Bonbons",
  img: '../img/crime/shoplift/bonbon.jpg',
	type: 'shoplift',
	bg: 'a22',
	courage: 4,
	minCash: 11,
	maxCash: 30,
	xpEarned: 45,
	attempts: 0,
	id:1,
	item: bike,
},
{
	name: "Extra Strong Mints",
  img: '../img/crime/shoplift/mint.jpg',
	type: 'shoplift',
	bg: 'a22',
	courage: 4,
	minCash: 15,
	maxCash: 17,
	xpEarned: 50,
	attempts: 0,
	id:2,
	item: bike,
},
{
	name: "Tank Top",
  img: '../img/crime/shoplift/tanktop.jpg',
	type: 'shoplift',
	bg: 'a22',
	courage: 4,
	reward: tanktop,
	xpEarned: 55,
	attempts: 0,
	id:3,
	item: bike,
},
{
	name: "Pair of Trainers",
  img: '../img/crime/shoplift/trainers.jpg',
	type: 'shoplift',
	bg: 'a22',
	courage: 4,
	reward: trainers,
	xpEarned: 60,
	attempts: 0,
	id:4,
	item: bike,
},
{
	name: "Jacket",
  img: '../img/crime/shoplift/jacket.jpg',
	type: 'shoplift',
	bg: 'a22',
	courage: 4,
	reward: jacket,
	xpEarned: 65,
	attempts: 0,
	id:5,
	item: bike,
},
{
	name: "Pair Of Earings",
  img: '../img/crime/shoplift/earings.jpg',
	type: 'shoplift',
	bg: 'a22',
	courage: 4,
	reward: earings,
	xpEarned: 70,
	attempts: 0,
	id:6,
	item: bike,
},
{
	name: "Necklace",
  img: '../img/crime/shoplift/necklace.jpg',
	type: 'shoplift',
	bg: 'a22',
	courage: 4,
	reward: necklace,
	xpEarned: 75,
	attempts: 0,
	id:7,
	item: bike,
},
{
	name: "Bracelet",
  img: '../img/crime/shoplift/bracelet.jpg',
	type: 'shoplift',
	bg: 'a22',
	courage: 4,
	reward: bracelet,
	xpEarned: 80,
	attempts: 0,
	id:8,
	item: bike,
}],
robbery: [{
	name: "Beggar's Food",
  img: '../img/crime/robbery/food.jpg',
	type: 'robbery',
	bg: 'a22',
	courage: 5,
	minCash: 10,
	maxCash: 20,
	xpEarned: 85,
	attempts: 0,
	id:0,
	item: shank,
},
	{
	name: "Woman's Money",
  img: '../img/crime/robbery/money.jpg',
	type: 'robbery',
	bg: 'a22',
	courage: 5,
	minCash: 20,
	maxCash: 50,
	xpEarned: 90,
	attempts: 0,
	id:1,
	item: shank,
},
	{
	name: "Grampa's Savings",
  img: '../img/crime/robbery/savings.jpg',
	type: 'robbery',
	bg: 'a22',
	courage: 5,
	minCash: 30,
	maxCash: 80,
	xpEarned: 95,
	attempts: 0,
	id:2,
	item: shank,
},
	{
	name: "Boy's Lunch Money",
  img: '../img/crime/robbery/lunchmoney.jpg',
	type: 'robbery',
	bg: 'a22',
	courage: 5,
	minCash: 200,
	maxCash: 300,
	xpEarned: 100,
	attempts: 0,
	id:3,
	item: shank,
},
	{
	name: "Lawyer's Briefcase",
  img: '../img/crime/robbery/briefcase.jpg',
	type: 'robbery',
	bg: 'a22',
	courage: 5,
	reward: bracelet,
	xpEarned: 105,
	attempts: 0,
	id:4,
	item: shank,
},
	{
	name: "Tycoon's Cash",
  img: '../img/crime/robbery/tycoon.jpg',
	type: 'robbery',
	bg: 'a22',
	courage: 5,
	reward: bracelet,
	xpEarned: 110,
	attempts: 0,
	id:5,
	item: shank,
},],}

let savedCrimes = JSON.parse(localStorage.getItem('crimes'));
if(savedCrimes){
	crimes = savedCrimes
	}