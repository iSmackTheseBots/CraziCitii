// Sorting Functions
function byPrice(a, b) {
	return a.buyPrice - b.buyPrice;
}
// Default Equips
const fist = {
  name: "Fist",
  amountOwned: 2,
  isEquip: true,
  damage: 1,
  type: 'weapon',
},
	nothing = {
	name: 'nothing',
	isEquip: true,
	defense: 0,
	type: 'armour',
};
// Melee
let melees = {
// Crazi Citi
	home: [
	{
  	name: "Brass Knuckles",
  	img: '../img/weapon/melee/knuckles.jpg',
  	sellPrice: 3000,
  	buyPrice: 7000,
  	amountOwned: 0,
  	isEquip: true,
  	damage: 5,
  	type: 'weapon',
	},
	{
  	name: "Pocket Knife",
  	img: '../img/weapon/melee/pocketknife.jpg',
  	sellPrice: 4000,
  	buyPrice: 9000,
  	amountOwned: 0,
  	isEquip: true,
  	damage: 7,
  	type: 'weapon',
	},
	{
  	name: "Baseball Bat",
  	img: '../img/weapon/melee/baseballbat.jpg',
  	sellPrice: 5000,
  	buyPrice: 12000,
  	amountOwned: 0,
  	isEquip: true,
  	damage: 9,
  	type: 'weapon',
	},
	{
  	name: "Nunchaku",
  	img: '../img/weapon/melee/nunchaku.jpg',
  	sellPrice: 9000,
  	buyPrice: 16000,
  	amountOwned: 0,
  	isEquip: true,
  	damage: 11,
  	type: 'weapon',
	},
	],
// Las Vegas
	lasVegas: [
	{
  	name: "Machete",
  	img: '../img/weapon/melee/machete.jpg',
  	sellPrice: 12500,
  	buyPrice: 21000,
  	amountOwned: 0,
  	isEquip: true,
  	damage: 13,
  	type: 'weapon',
	},
	{
  	name: "Katana",
  	img: '../img/weapon/melee/katana.jpg',
  	sellPrice: 12000,
  	buyPrice: 27000,
  	amountOwned: 0,
  	isEquip: true,
  	damage: 15,
  	type: 'weapon',
	},
	],
// Rome
	rome: [
	{
  	name: "Ninja Star",
  	img: '../img/weapon/melee/ninjastar.jpg',
  	sellPrice: 16000,
  	buyPrice: 31000,
  	amountOwned: 0,
  	isEquip: true,
  	damage: 17,
  	type: 'weapon',
	},
	{
  	name: "Kunai",
  	img: '../img/weapon/melee/kunai.jpg',
  	sellPrice: 18000,
  	buyPrice: 35000,
  	amountOwned: 0,
  	isEquip: true,
  	damage: 19,
  	type: 'weapon',
	},
	{
  	name: "Taser",
  	img: '../img/weapon/melee/taser.jpg',
  	sellPrice: 20000,
  	buyPrice: 40000,
  	amountOwned: 0,
  	isEquip: true,
  	damage: 21,
  	type: 'weapon',
	},
	{
  	name: "Long Machete",
  	img: '../img/weapon/melee/machete2.jpg',
  	sellPrice: 25000,
  	buyPrice: 45000,
  	amountOwned: 0,
  	isEquip: true,
  	damage: 23,
  	type: 'weapon',
	},
	]
};
melees.home.sort(byPrice);
melees.lasVegas.sort(byPrice);
melees.rome.sort(byPrice);
// Handguns
let handguns = {
	home: [{
  		name: "Firestar M43",
  		img: '../img/weapon/handgun/firestar.jpg',
  		sellPrice: 750,
  		buyPrice: 1600,
  		amountOwned: 0,
  		isEquip: true,
  		damage: 12,
  		type: 'weapon',
		},
		{
 			name: "Glock",
  		img: '../img/weapon/handgun/glock.jpg',
  		sellPrice: 600,
  		buyPrice: 1300,
  		amountOwned: 0,
  		isEquip: true,
  		damage: 10,
  		type: 'weapon',
		},
	],
	lasVegas: [{
			name: "Glock w/Switch",
  		img: '../img/weapon/handgun/gswitch.jpg',
  		sellPrice: 9000,
  		buyPrice: 0,
  		amountOwned: 0,
  		isEquip: true,
  		damage: 999,
  		type: 'weapon',
		},
	],
	rome: [{
			name: "Draco",
  		img: '../img/weapon/handgun/draco.jpg',
  		sellPrice: 12000,
  		buyPrice: 24000,
  		amountOwned: 0,
  		isEquip: true,
  		damage: 75,
  		type: 'weapon',
		},
	],
};
handguns.home.sort(byPrice);
handguns.lasVegas.sort(byPrice);
handguns.rome.sort(byPrice);
// Shotguns
let shotguns = {
	home: [{
  	name: "Shotgun",
  	img: '../img/weapon/shotgun/shotgun.jpg',
  	sellPrice: 2500,
  	buyPrice: 4500,
  	amountOwned: 0,
  	isEquip: true,
  	damage: 25,
  	type: 'weapon',
	},],
	lasVegas: [{
		name: "Pump Shotgun",
  	img: '../img/weapon/shotgun/pumpshotgun.jpg',
  	sellPrice: 4000,
  	buyPrice: 10000,
  	amountOwned: 0,
  	isEquip: true,
  	damage: 45,
  	type: 'weapon',
	},],
	rome: [{
		name: "Shotgun MK2",
  	img: '../img/weapon/shotgun/shotgunmk2/shotgun1.jpg',
  	sellPrice: 5500,
  	buyPrice: 12000,
  	amountOwned: 0,
  	isEquip: true,
  	damage: 55,
  	type: 'weapon',
	},],
};
shotguns.home.sort(byPrice);
shotguns.lasVegas.sort(byPrice);
shotguns.rome.sort(byPrice);
// Assault Rifles
let ars = {
	home: [{
  	name: "Tommygun",
  	img: '../img/weapon/ars/tommygun.jpg',
  	sellPrice: 4000,
  	buyPrice: 10000,
  	amountOwned: 0,
  	isEquip: true,
  	damage: 35,
  	type: 'weapon',
	},],
	lasVegas: [{
  	name: "AK-47",
  	img: '../img/weapon/ars/ak47.jpg',
  	sellPrice: 15000,
  	buyPrice: 30000,
  	amountOwned: 0,
  	isEquip: true,
  	damage: 70,
  	type: 'weapon',
	},],
	rome: [{
		name: "Assault Rifle",
  	img: '../img/weapon/ars/ar1/ar1.jpg',
  	sellPrice: 10000,
  	buyPrice: 25000,
  	amountOwned: 0,
  	isEquip: true,
  	damage: 60,
  	type: 'weapon',
	},],
}
ars.home.sort(byPrice);
ars.lasVegas.sort(byPrice);
ars.rome.sort(byPrice);
// Snipers
let snipers = {
	home: [{
		name: "Sniper",
  	img: '../img/weapon/sniper/sniper.jpg',
  	sellPrice: 15000,
  	buyPrice: 35000,
  	amountOwned: 0,
  	isEquip: true,
  	damage: 100,
  	type: 'weapon',
},],
	lasVegas: [{
		name: "Hunting Rifle",
  	img: '../img/weapon/sniper/hunter.jpg',
  	sellPrice: 10000,
  	buyPrice: 22500,
  	amountOwned: 0,
  	isEquip: true,
  	damage: 75,
  	type: 'weapon',
	},],
	rome: [{
		name: "Sniper MK2",
  	img: '../img/weapon/sniper/sniper2.jpg',
  	sellPrice: 25000,
  	buyPrice: 55000,
  	amountOwned: 0,
  	isEquip: true,
  	damage: 115,
  	type: 'weapon',
	},],
};
snipers.home.sort(byPrice);
snipers.lasVegas.sort(byPrice);
snipers.rome.sort(byPrice);
// Armour
let armours = {
	home: [{
  	name: "Leather Jacket",
  	img: '../img/armour/leatherjacket.jpg',
  	sellPrice: 400,
  	buyPrice: 1000,
  	amountOwned: 0,
  	isEquip: true,
  	type: 'armour',
  	defense: 5,
},
{
  	name: "Helmet",
  	img: '../img/armour/helmet.jpg',
  	sellPrice: 550,
  	buyPrice: 2300,
  	amountOwned: 0,
  	isEquip: true,
  	type: 'armour',
  	defense: 9,
},
{
  	name: "Riot Shield",
  	img: '../img/armour/riotshield.jpg',
  	sellPrice: 2500,
  	buyPrice: 6000,
  	amountOwned: 0,
  	isEquip: true,
  	type: 'armour',
  	defense: 17,
},
{
  	name: "Bulletproof Vest",
  	img: '../img/armour/vest.jpg',
  	sellPrice: 8000,
  	buyPrice: 20000,
  	amountOwned: 0,
  	isEquip: true,
  	type: 'armour',
  	defense: 30,
},],
	lasVegas: [{
  	name: "Soldier Uniform",
  	img: '../img/armour/soldier/soldier1.jpg',
  	sellPrice: 17000,
  	buyPrice: 30000,
  	amountOwned: 0,
  	isEquip: true,
  	type: 'armour',
  	defense: 35,
},],
	rome: [{
  	name: "Knight Suit",
  	img: '../img/armour/knight/knight1.jpg',
  	sellPrice: 20000,
  	buyPrice: 40000,
  	amountOwned: 0,
  	isEquip: true,
  	type: 'armour',
  	defense: 40,
},],
}
armours.home.sort(byPrice);
armours.lasVegas.sort(byPrice);
armours.rome.sort(byPrice);
// Consumables
let consumables = {
	home: [{
  	name: "Band-Aid",
  	img: '../img/consumable/bandaid.jpg',
  	sellPrice: 5,
  	buyPrice: 10,
  	amountOwned: 0,
  	type: 'consumable',
  	healAmount: 5,
	},
				{
  	name: "T1 Grenade",
  	img: '../img/consumable/grenade.jpg',
  	sellPrice: 500,
  	buyPrice: 1000,
  	amountOwned: 0,
  	type: 'consumable',
  	damage: 10,
	}],
	lasVegas: [{
  	name: "Med Kit",
  	img: '../img/consumable/medkit.jpg',
  	sellPrice: 15,
  	buyPrice: 25,
  	amountOwned: 0,
  	type: 'consumable',
  	healAmount: 10,
	},
						{
  	name: "Molotov",
  	img: '../img/consumable/molotov.jpg',
  	sellPrice: 1750,
  	buyPrice: 2500,
  	amountOwned: 0,
  	type: 'consumable',
  	damage: 20,
	}],
	rome: [{
		name: "T2 Grenade",
  	img: '../img/consumable/bomb/grenade1.jpg',
  	sellPrice: 3000,
  	buyPrice: 7000,
  	amountOwned: 0,
  	type: 'consumable',
  	damage: 20,
	}],
}
consumables.home.sort(byPrice);
consumables.lasVegas.sort(byPrice);
consumables.rome.sort(byPrice);
// Tools
let tools = {
	home: [{
  	name: "Sun Glasses",
  	img: '../img/crime/scavage/sunglasses.jpg',
  	sellPrice: 12,
		buyPrice: 20,
  	amountOwned: 0,
  	type: 'tool',
},
{
  	name: "Bus Pass",
  	img: '../img/crime/hustle/buspass.jpg',
  	sellPrice: 10,
		buyPrice: 16,
  	amountOwned: 0,
  	type: 'tool',
}],
	lasVegas: [{
  	name: "Mountain Bike",
  	img: '../img/crime/shoplift/bike.jpg',
  	sellPrice: 10,
		buyPrice: 16,
		amountOwned: 0,
  	type: 'tool',
},],
	rome: [{
  	name: "Prop Money",
  	img: '../img/tool/propmoney.jpg',
  	sellPrice: 1,
  	buyPrice: 25,
  	amountOwned: 0,
  	type: 'tool',
},
{
  name: "Crowbar",
  img: '../img/tool/crowbar.jpg',
  sellPrice: 50,
  buyPrice: 200,
  amountOwned: 0,
  type: 'tool',
},],
	rio: [{
  	name: "Shank",
  	img: '../img/tool/shank.jpg',
  	sellPrice: 125,
  	buyPrice: 250,
  	amountOwned: 0,
  	type: 'tool',
},],
}
tools.home.sort(byPrice)
tools.lasVegas.sort(byPrice)
tools.rome.sort(byPrice)
// Crime Rewards
let sRewards = [{
	name: "Box",
  img: '../img/crime/scavage/box.jpg',
  sellPrice: 2,
  amountOwned: 0,
},
{
	name: "Recyclable Bottle",
  img: '../img/crime/scavage/bottle.jpg',
  sellPrice: 2,
  amountOwned: 0,
}],
	shRewards = [{
		name: "Tank Top",
  	img: '../img/crime/shoplift/tanktop.jpg',
  	sellPrice: 15,
  	amountOwned: 0,
	},
	{
  	name: "Trainers",
  	img: '../img/crime/shoplift/trainers.jpg',
  	sellPrice: 25,
  	amountOwned: 0,
	},
	{
  	name: "Jacket",
  	img: '../img/crime/shoplift/jacket.jpg',
  	sellPrice: 15,
  	amountOwned: 0,
	},
	{
  	name: "Pair Of Earings",
  	img: '../img/crime/shoplift/earings.jpg',
  	sellPrice: 15,
  	amountOwned: 0,
	},
	{
  	name: "Necklace",
  	img: '../img/crime/shoplift/necklace.jpg',
  	sellPrice: 15,
  	amountOwned: 0,
	},
	{
  	name: "Bracelet",
  	img: '../img/crime/shoplift/bracelet.jpg',
  	sellPrice: 15,
  	amountOwned: 0,
	}];