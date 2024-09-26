function updateProfile(){
	pf.innerHTML = ``;
	let pfImg = document.createElement('img')
	pfImg.src = player.img;
	pf.appendChild(pfImg)

	let statDiv = document.createElement('div')
	statDiv.classList.add('flex')
	statDiv.appendChild(pfImg)
	statDiv.style.border = '3px solid red'
	pf.appendChild(statDiv)
}