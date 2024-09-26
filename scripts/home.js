let elems = document.querySelectorAll(".item");
createTT();
function createTT() {
	elems.forEach(function(element, index) {
		const tooltip = document.createElement('div');
		tooltip.className = 'tooltip';
		tooltip.id = 'tt' + index;
	  bgrid.appendChild(tooltip);
  	element.addEventListener('mouseenter', () => {
		tooltip.style.display = 'block';
		});
		element.addEventListener('mousemove', (e) => {
			tooltip.style.left = e.pageX+6+'px';
			tooltip.style.top = e.pageY+6+'px';
  	});
  	element.addEventListener('mouseleave', () => {
  	tooltip.style.display = 'none';
  	});
	});
}
// Back Buttons
shopBack.addEventListener('click', () => {
  categoryMenu.classList.remove('hidden');
	weaponsMenu.classList.add('hidden');
	itemList.style.display = 'none';
  shopBack.classList.add('hidden');
});
crimeBack.addEventListener('click', () => {
  selectCrime.classList.remove('hidden');
	crimeList.style.display = 'none'
  crimeBack.classList.add('hidden');
});
// Buttons
shopButton.addEventListener('click', () => {
  shopMenu.classList.toggle('hidden');
	if(!healMenu.classList.contains('hidden')) healMenu.classList.add('hidden');
	if(!crimeMenu.classList.contains('hidden')) crimeMenu.classList.add('hidden');
	if(!apMenu.classList.contains('hidden')) apMenu.classList.add('hidden');
});
crimeButton.addEventListener('click', () => {
  crimeMenu.classList.toggle('hidden');
	if(!healMenu.classList.contains('hidden')) healMenu.classList.add('hidden');
	if(!shopMenu.classList.contains('hidden')) shopMenu.classList.add('hidden');
	if(!apMenu.classList.contains('hidden')) apMenu.classList.add('hidden');
});
healButton.addEventListener('click', () => {
  healMenu.classList.toggle('hidden');
	if(!shopMenu.classList.contains('hidden')) shopMenu.classList.add('hidden');
	if(!crimeMenu.classList.contains('hidden')) crimeMenu.classList.add('hidden');
	if(!apMenu.classList.contains('hidden')) apMenu.classList.add('hidden');
});
apButton.addEventListener('click', () => {
  apMenu.classList.toggle('hidden');
	mapcontainer.classList.toggle('hidden')
	refreshAP();
	if(!healMenu.classList.contains('hidden')) healMenu.classList.add('hidden');
	if(!crimeMenu.classList.contains('hidden')) crimeMenu.classList.add('hidden');
	if(!shopMenu.classList.contains('hidden')) shopMenu.classList.add('hidden');
});
// Menus
// Weapons
weaponsButton.addEventListener('click', () => {
  categoryMenu.classList.add('hidden');
  weaponsMenu.classList.remove('hidden');
  shopBack.classList.remove('hidden'); 
});
hgButton.addEventListener('click', () => {
    weaponsMenu.classList.add('hidden');
	  itemList.style.display = 'inline-flex'
    itemList.innerHTML = ''; 
    displayItems(player.city.weapons.handguns);
    shopBack.classList.remove('hidden'); 
});
meleeButton.addEventListener('click', () => {
  weaponsMenu.classList.add('hidden');
	itemList.style.display = 'inline-flex'
  itemList.innerHTML = ''; 
  displayItems(player.city.weapons.melees);
  shopBack.classList.remove('hidden'); 
});
shotgunButton.addEventListener('click', () => {
    weaponsMenu.classList.add('hidden');
	itemList.style.display = 'inline-flex'
    itemList.innerHTML = ''; 
    displayItems(player.city.weapons.shotguns);
    shopBack.classList.remove('hidden'); 
});
arButton.addEventListener('click', () => {
    weaponsMenu.classList.add('hidden');
	itemList.style.display = 'inline-flex'
    itemList.innerHTML = ''; 
    displayItems(player.city.weapons.ars);
    shopBack.classList.remove('hidden');
});
sniperButton.addEventListener('click', () => {
    weaponsMenu.classList.add('hidden');
	itemList.style.display = 'inline-flex'
    itemList.innerHTML = ''; 
    displayItems(player.city.weapons.snipers);
    shopBack.classList.remove('hidden');
});
// Armours
armoursButton.addEventListener('click', () => {
    categoryMenu.classList.add('hidden');
	itemList.style.display = 'inline-flex'
    itemList.innerHTML = ''; 
    displayItems(player.city.armours);
    shopBack.classList.remove('hidden'); 
});
// Tools
toolsButton.addEventListener('click', () => {
    categoryMenu.classList.add('hidden');
	itemList.style.display = 'inline-flex'
    itemList.innerHTML = ''; 
    displayItems(player.city.tools);
    shopBack.classList.remove('hidden'); 
});
// Consumables
consumablesButton.addEventListener('click', () => {
    categoryMenu.classList.add('hidden');
	itemList.style.display = 'inline-flex'
    itemList.innerHTML = ''; 
    displayItems(player.city.consumables);
    shopBack.classList.remove('hidden'); 
});
// Crimes
scavage0.addEventListener('click', () => {
  selectCrime.classList.add('hidden');
	crimeList.style.display = 'inline-flex'
  crimeList.innerHTML = ''; 
  displayCrime(crimes.scavage);
  crimeBack.classList.remove('hidden'); 
});
hustle0.addEventListener('click', () => {
  selectCrime.classList.add('hidden');
	crimeList.style.display = 'inline-flex'
  crimeList.innerHTML = ''; 
  displayCrime(crimes.hustle);
  crimeBack.classList.remove('hidden'); 
});
shoplift0.addEventListener('click', () => {
  selectCrime.classList.add('hidden');
	crimeList.style.display = 'inline-flex'
  crimeList.innerHTML = ''; 
  displayCrime(crimes.shoplift);
  crimeBack.classList.remove('hidden'); 
});
robbery0.addEventListener('click', () => {
  selectCrime.classList.add('hidden');
	crimeList.style.display = 'inline-flex'
  crimeList.innerHTML = ''; 
  displayCrime(crimes.robbery);
  crimeBack.classList.remove('hidden'); 
});
healUpButton.addEventListener('click', () => {
	heal();
});



		begbtn.addEventListener('click', function() {
  if (!this.classList.contains('itemanim') && player.energy >= 1) {
    // Add the class to trigger the animation
    this.classList.add('itemanim');

    // Add any other actions you want to perform when the button is clicked
  } 
			
  // Listen for the end of the animation
  this.addEventListener('animationend', function() {
    // Remove the class after the animation is complete
    begbtn.classList.remove('itemanim');
  }, { once: true });
});

function displayItems(categoryItems) {
    categoryItems.forEach(item => {
        const itemElement = document.createElement('button');
        itemElement.classList.add('shitem');
			if(item.damage){
				itemElement.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>$${item.buyPrice.toLocaleString()}</p>
								<p>Damage:${item.damage.toLocaleString()}</p>
            </div>
        `;}else if(item.defense){
					itemElement.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>$${item.buyPrice.toLocaleString()}</p>
								<p>Defense:${item.defense.toLocaleString()}</p>
            </div>
        `;}else if(item.healAmount){
					itemElement.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>$${item.buyPrice.toLocaleString()}</p>
								<p>Heal Amount:${item.healAmount.toLocaleString()}</p>
            </div>
        `}else {
					itemElement.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>$${item.buyPrice.toLocaleString()}</p>
            </div>
        `
				};
        
			
			itemElement.addEventListener('click', () => {
				buy(item)
			});
        itemList.appendChild(itemElement);
    });
    itemList.classList.remove('hidden');
}
// Button Functions
let minBeg = 1,
	  maxBeg = 5;
function beg() {
  if (player.energy < 1) {
    showToast("You don't have any energy to beg.", 1250);
    return;
  }
	let xpEarned = 1;
	let moneyEarned;
	player.energy -= 1;
	gainBegXP(1);
	switch(player.begLevel) {
  case 1:
			//normal level
			gainXP(xpEarned);
  		moneyEarned = Math.floor(Math.random() * maxBeg) + 1;
		  player.money += moneyEarned;
    break;
  case 2:
			maxBeg = 10;
			gainXP(xpEarned);
			moneyEarned = Math.floor(Math.random() * maxBeg) + 1;
		  player.money += moneyEarned;
			//$10 Cap
			break;
  case 3:
			maxBeg = 15;
			moneyEarned = Math.floor(Math.random() * maxBeg) + 1;
			gainXP(xpEarned);
		  player.money += moneyEarned;
			//$15
			break;
	case 4:
			xpEarned = 2;
			maxBeg = 15;
			moneyEarned = Math.floor(Math.random() * maxBeg) + 1;
			gainXP(xpEarned);
		  player.money += moneyEarned;
			//+1 player xp
    	break;
	case 5:
			xpEarned = 2;
			maxBeg = 20;
			moneyEarned = Math.floor(Math.random() * maxBeg) + 1;
			gainXP(xpEarned);
		  player.money += moneyEarned;
			//$20 Cap
			break;
  case 6:
			xpEarned = 2;
			maxBeg = 25;
			moneyEarned = Math.floor(Math.random() * maxBeg) + 1;
			gainXP(xpEarned);
		  player.money += moneyEarned;
			//$25 Cap
			break;
	case 7:
			xpEarned = 3;
			maxBeg = 25;
			moneyEarned = Math.floor(Math.random() * maxBeg) + 1;
			gainXP(xpEarned);
		  player.money += moneyEarned;
			//+2 player xp
    	break;
	case 8:
			xpEarned = 3;
			maxBeg = 25;
			moneyEarned = Math.floor(Math.random() * maxBeg) + 1;
			moneyEarned *=2;
			gainXP(xpEarned);
		  player.money += moneyEarned;
			//x2 $
    	break;
	case 9:
			xpEarned = 3;
			maxBeg = 30;
			moneyEarned = Math.floor(Math.random() * maxBeg) + 1;
			moneyEarned *=2;
			gainXP(xpEarned);
		  player.money += moneyEarned;
			//$30 Cap
    	break;
	case 10:
			xpEarned = 3;
			maxBeg = 35;
			moneyEarned = Math.floor(Math.random() * maxBeg) + 1;
			moneyEarned *=2;
			gainXP(xpEarned);
		  player.money += moneyEarned;
			//$35 Cap
    	break;
	case 11:
			xpEarned = 3;
			maxBeg = 40;
			moneyEarned = Math.floor(Math.random() * maxBeg) + 1;
			moneyEarned *=2;
			gainXP(xpEarned);
		  player.money += moneyEarned;
			//$40 Cap
    	break;
	case 12:
			xpEarned = 6;
			maxBeg = 40;
			moneyEarned = Math.floor(Math.random() * maxBeg) + 1;
			moneyEarned *=2;
			gainXP(xpEarned);
		  player.money += moneyEarned;
			//x2 player XP
    	break;
  default:
    	xpEarned = 6;
			maxBeg = 40;
			moneyEarned = Math.floor(Math.random() * maxBeg) + 1;
			moneyEarned *=2;
			gainXP(xpEarned);
		  player.money += moneyEarned;
			break;
}
  showToast(`You earned $${moneyEarned} and ${xpEarned}XP`, 1500);
  updateStats();
	updateTT();
}