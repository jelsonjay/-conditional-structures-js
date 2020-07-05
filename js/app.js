'use strict';
let age = 25;

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
