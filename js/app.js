'use strict';
let age = 25;
let time = new Date().getHours();
let daytime;

function changeImg() {
	let img = document.querySelector('#img');
	if (img.src.match('on')) {
		img.src = './img/pic_off.gif';
	} else {
		img.src = './img/pic_on.gif';
	}
	console.log(img);
}

if (age > 20) {
	console.log('He is of legal age');
} else if (age == 20) {
	console.log('He is of legal age!');
} else {
	console.log('Hes a minor!');
}

if (time < 11) {
	daytime = 'Good morning!';
} else if (time < 20) {
	daytime = 'Afeternoo';
} else {
	daytime = 'Good evenig!';
}
