'use strict';

function changeImg() {
	let img = document.querySelector('#img');
	if (img.src.match('bulbon')) {
		img.src = './img/pic_bulboff.gif';
	} else {
		img.src = './img/pic_bulbon.gif';
	}
	console.log(img);
}
