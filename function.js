'use strict';

var Tank = function (gun, tower ,trans ,engine ,colorBody, posiLeft, posiTop, angle) {
	this.gun = gun;
	this.tower = tower;
	this.trans = trans;
	this.engine = engine;
	this.colorBody = colorBody;
	this.posiLeft = posiLeft;
	this.posiTop = posiTop;
	this.angle = angle;
	this.drawTransmission();
	/*this.drawTower();*/
};

Tank.prototype.drawTransmission = function () {
	var tankHtml_trans = '<img src="D:/tank/imges/tiger_transmission_20%.png">';
	this.tankElement_trans = $(tankHtml_trans);
	this.tankElement_trans.css({
		'transform': 'scale(' + this.tankSize + ', ' + this.tankSize + ')',
		'position': 'absolute',
		'left': this.posiLeft,
		'top': this.posiTop
	});

	$("body").append(this.tankElement_trans);
};

Tank.prototype.drawTower = function () {
	var tankHtml = '<img src="D:/HTML/imges/tiger_tower.png">';
	this.tankElement = $(tankHtml);
	this.tankElement.css({
		'position': 'absolute',
		'left': this.posiLeft,
		'top': this.posiTop,
		'transform': 'scale(' + this.tankSize + ', ' + this.tankSize + ')'
	});
	$("body").append(this.tankElement);
};

Tank.prototype.rotateTranssmision = function (rotateDirection) {
	if(rotateDirection){
		this.angle += 1;
	} else {
		this.angle -= 1;
	}
	this.tankElement_trans.css({
		'transform-origin': 50 + '% '+ ' ' + 50 + '%',
		'transform': 'rotate(' + this.angle + 'deg)'
	});
};

Tank.prototype.moveForwardTranssmision = function () {
	var currAngle = Math.PI * (360 * (this.angle/360 - Math.floor(this.angle/360)) / 180);

	this.posiLeft = this.posiLeft + Math.sin(currAngle) * 1;
	this.posiTop = this.posiTop - Math.cos(currAngle) * 1;

	this.tankElement_trans.css({
		'left': this.posiLeft,
		'top': this.posiTop
	});
			
	console.log('angle ' + currAngle);
	console.log('sin ' + Math.sin(currAngle));
	console.log('cos ' + Math.cos(currAngle));
	console.log('X ' + this.posiLeft + ' Y ' + this.posiTop);
};

Tank.prototype.moveLeft = function () {
	this.posiLeft -= 1;
	this.tankElement.css({
		left: this.posiLeft,
		top: this.posiTop
	});
};

Tank.prototype.moveRight = function () {
	this.posiLeft += 1;
	this.tankElement.css({
		left: this.posiLeft,
		top: this.posiTop
	});
};

Tank.prototype.moveForward = function () {
	this.posiTop -= 0.5;
	this.tankElement.css({
		left: this.posiLeft,
		top: this.posiTop
	});
};

Tank.prototype.moveRear = function () {
	this.posiTop += 1;
	this.tankElement.css({
		left: this.posiLeft,
		top: this.posiTop
	});
};

var Tiger = new Tank(1,1,1,1,1,1,0,0,0);

$("html").keydown(function () {
	console.log(event.keyCode);
});

$("html").keydown(function () {
	if(event.keyCode === 39){
		Tiger.rotateTranssmision(true);
	}
});

$("html").keydown(function () {
	if (event.keyCode === 37) {
		Tiger.rotateTranssmision(false);
	}
});

$("html").keydown(function () {
	if (event.keyCode === 38) {
		Tiger.moveForwardTranssmision();
	}
});

$("html").keydown(function () {
	if (event.keyCode === 38 && event.keyCode === 37) {
		Tiger.moveForwardTranssmision();
		Tiger.rotateTranssmision(false);
	}
});