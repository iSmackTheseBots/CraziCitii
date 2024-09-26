function savePlayer(){
	localStorage.setItem('player', JSON.stringify(player));
}
function saveCrimes(){
  localStorage.setItem('crimes', JSON.stringify(crimes));
}
function saveHitlist(){
  localStorage.setItem('hitlist', JSON.stringify(hitlist));
}
function saveEnemies(){
  localStorage.setItem('enemies', JSON.stringify(enemies));
}