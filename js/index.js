function createSound(path) {
	let audio = new Audio()
	audio.src = path
	return(audio)
}

const AUDIO = {
	dr: createSound('/js/sounds/dr.mp3'),
}

const cloud1 = document.querySelector('#cloud1')
let isLeft = true
function start() {
	document.querySelector('.start-menu').style.display = 'none'
	document.querySelector('.all').style.display = 'block'
	cloud1.style.left = 'calc((100vw - 100vh * 16 / 9) / 2)'
	setTimeout(() => {
		if (isLeft) {
			cloud1.style.left = 'calc((100vw - 100vh * 16 / 9) / 2 + 100vh * 16 / 9 - 30vh * 1280 / 872)'
		} else {
			cloud1.style.left = 'calc((100vw - 100vh * 16 / 9) / 2)'
		}
		isLeft = !isLeft
	}, 10);
	let interval = setInterval(() => {
		if (isLeft) {
			cloud1.style.left = 'calc((100vw - 100vh * 16 / 9) / 2 + 100vh * 16 / 9 - 30vh * 1280 / 872)'
		} else {
			cloud1.style.left = 'calc((100vw - 100vh * 16 / 9) / 2)'
		}
		isLeft = !isLeft
	}, 7000)
}

document.getElementById('face').addEventListener('click', () => {
	document.getElementById('monkey_video').currentTime = 0
	document.getElementById('face').style.display = 'none'
	document.getElementById('monkey_video').style.display = 'block'

	document.getElementById('monkey_video').play()
	setTimeout(() => {
		document.getElementById('monkey_video').pause()
		document.getElementById('monkey_video').style.display = 'none'
		document.getElementById('face').style.display = 'block'
	}, 15000)
})

