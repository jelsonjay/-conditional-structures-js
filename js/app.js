'use strict';

function changeImg() {
	let img = document.querySelector('#img');
	if (img.src.match('on')) {
		img.src = './img/pic_off.gif';
	} else {
		img.src = './img/pic_on.gif';
	}
	console.log(img);
}
