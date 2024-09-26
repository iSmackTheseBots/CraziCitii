// Gets Player Data
let player = JSON.parse(localStorage.getItem('player'));
if (!player) {
	player = {
		// Player
		name: prompt('What will be your Username?'),
		img: '../img/player/player.jpg',
		city: cities.home,
		// Stats
		strength: 25.0,
		accuracy: 25.0,
		defense: 25.0,
		dexterity: 25.0,
		happy: 100,
		// Levels
		xp: 0,
  	xpNeeded: 15,
  	level: 1,
		begxp: 0,
  	begxpNeeded: 45,
  	begLevel: 1,
		begxpReward:1,
		// Attributes
		timer: {
			Energy: 15,
			Courage: 30,
			Morality: 100,
			Health: 15,
		},
  	energy: 100,
  	eCap: 100,
  	courage: 20,
  	cCap: 20,
  	morality: 100, 
  	mCap: 100,
  	health: 100, 
  	healthCap: 100,
		// Currency
		money: 0,
		gold: 0,
		// Inventory
		inventory: [],
		equipped: {
	 	weapon: fist,
	 	armour: nothing,
	 		thirdEquip: null,
		},
	};
	createStatBar();
  updateStats();
} else {
  updateStats();
  createStatBar();
	updateStats();
}
//Static Stat Bar
function createStatBar() {
  const statContainer = document.getElementById("stat-cont");
  const statDiv = document.createElement("div");
  statDiv.classList.add("stat");

  const energyDiv = document.createElement("div");
  energyDiv.classList.add("energy");
	energyDiv.id = 'energyStat';
	energyDiv.classList.add("element");
	const energySpan = document.createElement("span");
	energySpan.id = "energy";
  energySpan.innerHTML = `Energy: ${player.energy}/${player.eCap}`;
	energyDiv.appendChild(energySpan)
  const energyBar = document.createElement("div");
  energyBar.classList.add('e-bar-container');
	const energyProg = document.createElement("div");
	energyProg.classList.add('e-bar')
	energyProg.style.width = (player.energy / player.eCap) * 100 + '%';

  const courageDiv = document.createElement("div");
  courageDiv.classList.add("courage");
	courageDiv.id = 'courageStat';
	courageDiv.classList.add("element");
  const courageSpan = document.createElement("span");
	courageSpan.id = "courage";
  courageSpan.innerHTML = `Courage: ${player.courage}/${player.cCap}`;
	courageDiv.appendChild(courageSpan)
	const courageBar = document.createElement("div");
  courageBar.classList.add('c-bar-container');
	const courageProg = document.createElement("div");
	courageProg.classList.add('c-bar')
	courageProg.style.width = (player.courage / player.cCap) * 100 + '%';

  const moralityDiv = document.createElement("div");
  moralityDiv.classList.add("morality");
	moralityDiv.id = 'moralityStat';
	moralityDiv.classList.add("element");
  const moralitySpan = document.createElement("span");
	moralitySpan.id = "morality";
  moralitySpan.innerHTML = `Morality: ${player.morality}/${player.mCap}`;
	moralityDiv.appendChild(moralitySpan)
	const moralityBar = document.createElement("div");
  moralityBar.classList.add('m-bar-container');
	const moralityProg = document.createElement("div");
	moralityProg.classList.add('m-bar')
	moralityProg.style.width = (player.morality / player.mCap) * 100 + '%';

  const healthDiv = document.createElement("div");
  healthDiv.classList.add("health");
	healthDiv.id = 'healthStat';
	healthDiv.classList.add("element");
  const healthSpan = document.createElement("span");
	healthSpan.id = "health";
  healthSpan.innerHTML = `Health: ${player.morality}/${player.mCap}`;
	healthDiv.appendChild(healthSpan)
	const healthBar = document.createElement("div");
  healthBar.classList.add('h-bar-container');
	const healthProg = document.createElement("div");
	healthProg.classList.add('hp-bar')
	healthProg.style.width = (player.health / player.healthCap) * 100 + '%';

  const currency = document.createElement("div");
  currency.classList.add("currency")               ;
  currency.id = "currency"                         ;
	
	const moneyDiv = document.createElement("div");
  moneyDiv.classList.add("money")               ;
	const moneySpan = document.createElement("span");
  moneySpan.id = "money"                          ;
  moneySpan.innerHTML = `${player.money}`        ;

	const goldDiv = document.createElement("div");
  goldDiv.classList.add("gold")                ;
	const goldSpan = document.createElement("span");
  goldSpan.id = "gold"                           ;
  goldSpan.innerHTML = `${player.gold}`          ;

  statDiv.appendChild(energyDiv)       		;
	energyDiv.appendChild(energyBar)     		;
	energyBar.appendChild(energyProg)    		;
  statDiv.appendChild(courageDiv)      		;
	courageDiv.appendChild(courageBar)   		;
	courageBar.appendChild(courageProg)  		;
  statDiv.appendChild(moralityDiv)     		;
	moralityDiv.appendChild(moralityBar) 		;
	moralityBar.appendChild(moralityProg)		;
  statDiv.appendChild(healthDiv)       		;
	healthDiv.appendChild(healthBar)     		;
	healthBar.appendChild(healthProg)    		;
	statDiv.appendChild(currency)           ;
  currency.appendChild(moneyDiv)          ;
	currency.appendChild(goldDiv)           ;
	moneyDiv.appendChild(moneySpan)      		;
	goldDiv.appendChild(goldSpan)        		;

  statContainer.appendChild(statDiv);
  return statContainer;
}

var elements = document.querySelectorAll(".element");
let timers = {
	eTimer: undefined,
	cTimer: undefined,
	mTimer: undefined,
	hTimer: undefined,
}
let oldeTimer;
let oldcTimer;
let oldmTimer;
let oldhTimer;

  function startTimers() {
		if(elements){ //if no elements it does nothing avoids error.
			oldeTimer = energyStat.querySelector('.timer');
			oldcTimer = courageStat.querySelector('.timer');
			oldmTimer = moralityStat.querySelector('.timer');
			oldhTimer = healthStat.querySelector('.timer');
			
			elements.forEach(function(element, index) {
				let timer = document.createElement("div");
      	timer.classList.add("timer");
				let initialTime;
			
				switch (index){
						
						case 0:
						if(player.energy >= player.eCap){
						clearTimer(oldeTimer, timers['eTimer']);
						delete player.timer.esec;
						break;
						}
						if(timers['eTimer'] || oldeTimer) return;
      			element.appendChild(timer);
						initialTime = player.timer.Energy;
						countdown(timer, initialTime, 0, 'eTimer');
						break;
						
						case 1:
						if(player.courage >= player.cCap){
						clearTimer(oldcTimer, timers['cTimer'])
						delete player.timer.csec;
						break;
						}
						if(timers['cTimer'] || oldcTimer) return;
      			element.appendChild(timer);
						initialTime = player.timer.Courage;
						countdown(timer, initialTime, 1, 'cTimer');
						break;
						
						case 2:
						if(player.morality >= player.mCap){
						clearTimer(oldmTimer, timers['mTimer'])				
						delete player.timer.msec;
						break;
						}
						if(timers['mTimer'] || oldmTimer) return;
      			element.appendChild(timer);
						initialTime = player.timer.Morality;
						countdown(timer, initialTime, 2, 'mTimer');
						break;
						
						case 3:
						if(player.health >= player.healthCap){
						clearTimer(oldhTimer, timers['hTimer'])
						delete player.timer.hsec;
						break;
						}
						if(timers['hTimer'] || oldhTimer) return;
      			element.appendChild(timer);
						initialTime = player.timer.Health;
						countdown(timer, initialTime, 3,'hTimer');
						break;
				}
				savePlayer();
  	});
	}
}
function clearTimer(element, interval) {
	if (element) {
		element.remove();
	}
	clearInterval(interval);
	switch(interval){
		case timers['eTimer']:
		timers['eTimer'] = undefined;
		break;
		case timers['cTimer']:
		timers['cTimer'] = undefined;
		break;
		case timers['mTimer']:
		timers['mTimer'] = undefined;
		break;
		case timers['hTimer']:
		timers['hTimer'] = undefined;
		break;
	}
}

  function countdown(timerElement, seconds, stat, inter) {
		switch(stat){
						case 0:
						if(timers['eTimer'] || oldeTimer) return;
						break;
						case 1:
						if(timers['cTimer'] || oldcTimer) return;
						break;
						case 2:
						if(timers['mTimer'] || oldmTimer) return;
						break;
						case 3:
						if(timers['hTimer'] || oldhTimer) return;
						break;
				}
		
		timers[inter] = setInterval(function() {
			switch(stat){
						case 0:
						if(player.timer.esec > -1){
							seconds = player.timer.esec;
							}
						break;
						case 1:
						if(player.timer.csec){
							seconds = player.timer.csec;
							}
						break;
						case 2:
						if(player.timer.msec){
							seconds = player.timer.msec;
							}
						break;
						case 3:
						if(player.timer.hsec){
							seconds = player.timer.hsec;
							}
						break;
				}
			let minutes = Math.floor(seconds / 60),
				  remainingSeconds = seconds % 60,
				  formattedTime = padWithZero(minutes) + ":" + padWithZero(remainingSeconds);
      timerElement.textContent = formattedTime;
      seconds--;
			switch(stat){
					case 0:
					player.timer.esec = seconds;
					if(player.energy >= player.eCap){
						clearTimer(oldeTimer, timers['eTimer']);
						delete player.timer.esec;
					}
					break;
					case 1:
					player.timer.csec = seconds;
					if(player.courage >= player.cCap){
						clearTimer(oldcTimer, timers['cTimer'])
						delete player.timer.csec;
					}
					break;
					case 2:
					player.timer.msec = seconds;
					if(player.morality >= player.mCap){
						clearTimer(oldmTimer, timers['mTimer'])
						delete player.timer.msec;
					}
					break;
					case 3:
					player.timer.hsec = seconds;
					if(player.health >= player.healthCap){
						clearTimer(oldhTimer, timers['hTimer'])
						delete player.timer.hsec;
					}
					break;
				}
			updateStats();
			
      if (seconds < 0) {
        clearTimer(timerElement,timers[inter])
				switch(stat){
						case 0:
						if(player.energy < player.eCap){
							player.energy++;
							timers['eTimer'] = undefined;
							delete player.timer.esec;
							}
						break;
						case 1:
						if(player.courage < player.cCap){
							player.courage++;
							delete player.timer.csec;
							}
						break;
						case 2:
						if(player.morality < player.mCap){
							player.morality++;
							delete player.timer.msec;
							}
						break;
						case 3:
						if(player.health < player.healthCap){
							player.health++;
							delete player.timer.hsec;
							}
						break;
				}
				updateStats();
      }
    }, 1000);
  }

function padWithZero(number) {
  return (number < 10 ? "0" : "") + number;
}

function updateEBar(playerE, eCap) {
  const eProgress = (playerE / eCap) * 100;
  const eBar = document.querySelector(".e-bar");
  if (eBar) {
    eBar.style.width = eProgress + "%";
  } 
}
function updateMBar(playerM, mCap) {
  const mProgress = (playerM / mCap) * 100;
  const mBar = document.querySelector(".m-bar");
  if (mBar) {
    mBar.style.width = mProgress + "%";
  } 
}
function updateCBar(playerC, cCap) {
  const cProgress = (playerC / cCap) * 100;
  const cBar = document.querySelector(".c-bar");
  if (cBar) {
    cBar.style.width = cProgress + "%";
  } 
}
function updateXPBar(playerXP, xpNeeded) {
  const xpProgress = (playerXP / xpNeeded) * 100;
  const xpBar = document.querySelector(".xp-bar");
  xpBar.style.width = xpProgress + "%";
}
function updateHPBar(hp, hpcap) {
  const hpProgress = (hp / hpcap) * 100;
  const hpBar = document.querySelector(".hp-bar");
	if(hpBar){
  hpBar.style.width = hpProgress + "%";
	}
}

function updateTT(){
	function checkMMB(){
	switch(player.begLevel){
			case 1:
			break;
			case 2:
			maxBeg = 10;
			break;
			case 3:
			maxBeg = 15;
			break;
			case 4:
			player.begxpReward = 2;
			maxBeg = 15
			break;
			case 5:
			maxBeg = 20;
			break;
			case 6:
			maxBeg = 25;
			break;
			case 7:
			player.begxpReward = 3
			maxBeg = 25;
			break;
			case 8:
			minBeg = 2;
			maxBeg = 50;
			break;
			case 9:
			minBeg = 2;
			maxBeg = 60;
			break;
			case 10:
			minBeg = 2
			maxBeg = 70;
			break;
			case 11:
			minBeg = 2;
			maxBeg = 80;
			break;
			case 12:
			player.begxpReward = 6;
			minBeg = 2;
			maxBeg = 80;
			default:
			player.begxpReward = 6;
			minBeg = 2;
			maxBeg = 80;
			break;
	}
}
	let bgrid = document.getElementById('bgrid');
	let elems;
	if(bgrid){
		elems = bgrid.querySelector(".item");
	}
	if(elems){
		checkMMB();
		let tt0 = document.getElementById('tt0'),tt1 = document.getElementById('tt1'),tt2 = document.getElementById('tt2'),tt3 = document.getElementById('tt3'),tt4 = document.getElementById('tt4'),tt5 = document.getElementById('tt5'),tt6 = document.getElementById('tt6');
		tt0.innerText = `Beg Lv:${player.begLevel} \n${Math.trunc(player.begxp).toLocaleString()} / ${Math.trunc(player.begxpNeeded).toLocaleString()}\n$${minBeg} - $${maxBeg}\nXP: ${player.begxpReward}`;
		tt1.innerText = `Get Felonies!`;
		tt2.innerText = `We Got The Goods!`;
		if(player.health >= player.healthCap){
			tt3.innerText = `Are you serious right now bro?`;
		}else{
			tt3.innerText = `Heal Your Boo Boos`;
		}
		tt4.innerText = `Are you ready to handle business?`;
		tt5.innerText = `DMG:${player.equipped.weapon.damage}\nDEF:${player.equipped.armour.defense}`;
		tt6.innerText = `Your Goods`;
		tt7.innerText = `${player.city.name} Airlines`;
		tt8.innerText = 'working';
		}
}

function updateStats() {
	let bgrid = document.getElementById('bgrid');
	if(bgrid){
		refreshAP();
		let healCost = player.healthCap - player.health;
		let healtx = document.getElementById('healcosttxt');
		healtx.textContent = healCost.toLocaleString(); 
		updateTT();
	}
	if(player.health <= 0){
		player.health = 0;
		}
	savePlayer();
	
  const stats = {
    health: `Health: ${player.health.toLocaleString()}/${player.healthCap.toLocaleString()}`,
    morality: `Morality: ${player.morality.toLocaleString()}/${player.mCap.toLocaleString()}`,
    energy: `Energy: ${player.energy.toLocaleString()}/${player.eCap.toLocaleString()}`,
    courage: `Courage: ${player.courage.toLocaleString()}/${player.cCap.toLocaleString()}`,
    money: `${player.money.toLocaleString()}`,
		gold: `${player.gold.toLocaleString()}`,
		level: `${player.level.toLocaleString()}`,
		xpamt: `${Math.trunc(player.xp).toLocaleString()}`,
		xpreq: `${Math.trunc(player.xpNeeded).toLocaleString()}`,
  };
  for (const [key, value] of Object.entries(stats)) {
    const element = document.getElementById(key);
    if (element) {
      element.innerHTML = value;
    }
  }

	updateLocation(player.city.name);

	updateXPBar(player.xp,player.xpNeeded);
	updateCBar(player.courage,player.cCap);
	updateMBar(player.morality,player.mCap);
  updateHPBar(player.health, player.healthCap);
	updateEBar(player.energy, player.eCap);
	startTimers();
}

function showToast(message, duration) {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.textContent = message;
  const container = document.getElementById('toast-container');
  if (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  container.appendChild(toast);
  toast.style.visibility = 'visible';
  const timeoutId = setTimeout(() => {
    container.removeChild(toast);
  }, duration);
  // Reset the timer if another toast is displayed
  if (container.dataset.timeoutId) {
    clearTimeout(container.dataset.timeoutId);
  }
  container.dataset.timeoutId = timeoutId;
}
function lvToast(message, duration) {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.textContent = message;
  const container = document.getElementById('level-container');
  if (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  container.appendChild(toast);
  toast.style.visibility = 'visible';
  const timeoutId = setTimeout(() => {
    container.removeChild(toast);
  }, duration);
  // Reset the timer if another toast is displayed
  if (container.dataset.timeoutId) {
    clearTimeout(container.dataset.timeoutId);
  }
  container.dataset.timeoutId = timeoutId;
}
function gainXP(amount) {
  player.xp += amount;
  
  if (player.xp >= player.xpNeeded){
    player.level++;

		player.xp -= player.xpNeeded;
		
		switch(player.level){
				case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12: case 13: case 14: case 15:
				player.img = '../img/player/player.jpg'
				player.xpNeeded += 50;
				break;
				case 16: case 17: case 18: case 19: case 20: case 21: case 22: case 23: case 24: case 25: case 26: case 27: case 28:
				player.img = '../img/player/player1.jpg'
				player.xpNeeded += 250;
				break;
				case 29: case 30: case 31: case 32: case 33: case 34: case 35: case 36: case 37: case 38: case 39: case 40:
				player.img = '../img/player/player2.jpg'
				player.xpNeeded += 500;
				break;
				case 41: case 42: case 43: case 44: case 45: case 46: case 47: case 48: case 49: case 50: case 51:
				player.img = '../img/player/player3.jpg'
				player.xpNeeded += 750;
				break;
				case 52: case 53: case 54: case 55: case 56: case 57: case 58: case 59: case 60: case 61:
				player.img = '../img/player/player4.jpg'
				player.xpNeeded += 1000;
				break;
				case 62: case 63: case 64: case 65: case 66: case 67: case 68: case 69: case 70:
				player.img = '../img/player/player5.jpg'
				player.xpNeeded += 1250;
				break;
				case 71: case 72: case 73: case 74: case 75: case 76: case 77: case 78:
				player.img = '../img/player/player6.jpg'
				player.xpNeeded += 1250;
				break;
				case 79: case 80: case 81: case 82: case 83: case 84: case 85:
				player.img = '../img/player/player7.jpg'
				player.xpNeeded += 1750;
				break;
				case 86: case 87: case 88: case 89: case 90: case 91:
				player.img = '../img/player/player8.jpg'
				player.xpNeeded += 2000;
				break;
				case 92: case 93: case 94: case 95: case 96:
				player.img = '../img/player/player9.jpg'
				player.xpNeeded += 2250;
				break;
				case 97: case 98: case 99: case 100:
				player.img = '../img/player/player10.jpg'
				player.xpNeeded += 2500;
				break;
				case 101: case 102: case 103:
				player.img = '../img/player/player11.jpg'
				player.xpNeeded += 2750;
				break;
				case 104: case 105:
				player.img = '../img/player/player12.jpg'
				player.xpNeeded += 3000;
				break;
				case 106:
				player.img = '../img/player/player13.jpg'
				player.xpNeeded += 3250;
				break;
				default:
				player.xpNeeded += 3500;
				break;
				}
		
    player.healthCap += 1;
    player.health = player.healthCap;
		player.eCap += 1;
    player.energy = player.eCap;
		player.cCap += 1;
    player.courage = player.cCap;
    player.morality = player.mCap;
		
    lvToast(`Congrats, you reached level ${player.level}!`,3500);
  }
}
function gainBegXP(amount) {
  player.begxp += amount;
  // Check if player has reached enough XP to level up
	if(player.begxp >= player.begxpNeeded){
    player.begLevel++;
    player.begxp -= player.begxpNeeded;
    player.begxpNeeded = Math.trunc(player.begxpNeeded * 1.64)
    lvToast(`Congratulations, you reached beg level ${player.begLevel}!`,5000);
  }
}
function equip(item, player){
	if (item.isEquip){
		
		if (item.name == player.equipped.weapon.name){
			showToast(`Unequipped ${item.name}`,999);
			player.equipped.weapon = fist;
		}else if (item.type === 'weapon'){
			player.equipped.weapon = item;
			showToast(`You Equipped ${item.name}`,999);
		}
		if (item.name == player.equipped.armour.name){	
			showToast(`Unequipped ${item.name}`,999);
			player.equipped.armour = nothing;
		}  else if(item.type === 'armour'){
			player.equipped.armour = item;
			showToast(`You Equipped ${item.name}`,999);
	  }
		if (item.type === 'thirdEquip'){
			player.equipped.thirdEquip = item;
	  	showToast(`You Equipped ${item.name}`,999);
	  }
	  } else if(!item.isEquip){
	  	showToast(`Not Equipable.`,999);
	  }
  	updateStats();
	  renderInventory();
}
function heal() {
	let healCost = player.healthCap - player.health;
  if (player.money < healCost) {
    showToast(`You need $${healCost-player.money} more to heal.`,999);
    return;
  }
  if (player.health == player.healthCap) {
      showToast("You are at max health.",999);
      return;
  }

  player.money -= healCost;
  player.health = player.healthCap;
	showToast(`Healed for $${healCost.toLocaleString()}`,1500);
  updateStats();
}
document.addEventListener("DOMContentLoaded", function() {
  startTimers();
});