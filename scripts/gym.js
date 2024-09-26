function train(energy, stat){
	if(energy > player.energy){
		console.log('more than cap');
			return;
		}
	player.energy -= energy;
	
	let happy = player.happy,
	result = (0.00328 * happy + 0.55) * energy / 10
	
	switch(stat){
			case 1:
			player.strength += result
			break;
			case 2:
			player.accuracy += result
			break;
			case 3:
			player.defense += result
			break;
			case 4:
			player.dexterity += result
			break;
			default:
			break;
	}
	updateStats();
}