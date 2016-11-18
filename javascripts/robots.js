"use strict";

// Base Robot constructor
let Robot = function() {
	this.name = null;
	this.weapon = null;
	this.damage = null;
	this.health = null;
};

Robot.prototype.setName = (name) => {
	this.name = name;
};


// Robot constructors
let Sentinel = function() {
	this.type = "Sentinel";
	this.energy = "D Batteries";
};

Sentinel.prototype = new Robot();

let Cyborg = function() {
	this.type = "Cyborg";
	this.energy = "Neptunium";
};

Cyborg.prototype = new Robot();

let Drone = function() {
	this.type = "Drone";
	this.energy = "Cheetos";
};

Drone.prototype = new Robot();


// Robot types
let Bender = function() {
	this.name = "Bender";
	this.weapon = "glass bottle";
	this.damage = Math.floor(Math.random() * 30 + 20);
	this.health = Math.floor(Math.random() * 300 + 40);
	this.image = "images/bender.gif";
};

Bender.prototype = new Sentinel();

let Dale = function() {
	this.name = "Dale";
	this.weapon = "crush u like a lil bug";
	this.damage = Math.floor(Math.random() * 40 + 10);
	this.health = Math.floor(Math.random() * 500 + 20);
	this.image = "images/dale.png";
};

Dale.prototype = new Sentinel();

let Jax = function() {
	this.name = "Jax";
	this.weapon = "metallic fist";
	this.damage = Math.floor(Math.random() * 35 + 20);
	this.health = Math.floor(Math.random() * 450 + 75);
	this.image = "images/jax.jpg";
};

Jax.prototype = new Cyborg();

let Wren = function() {
	this.name = "Wren";
	this.weapon = "bazooka face";
	this.damage = Math.floor(Math.random() * 45 + 30);
	this.health = Math.floor(Math.random() * 420 + 40);
	this.image = "images/wren.gif";
};

Wren.prototype = new Cyborg();

let Spookbro = function() {
	this.name = "Spookbro";
	this.weapon = "stealing candy";
	this.damage = Math.floor(Math.random() * 40 + 40);
	this.health = Math.floor(Math.random() * 500 + 15);
	this.image = "images/spookbro.gif";
};

Spookbro.prototype = new Drone();

let Catacopter = function() {
	this.name = "Catacopter";
	this.weapon = "meow-mixer";
	this.damage = Math.floor(Math.random() * 50 + 25);
	this.health = Math.floor(Math.random() * 490 + 10);
	this.image = "images/catacopter.gif";
};

Catacopter.prototype = new Drone();


module.exports = {Robot, Sentinel, Cyborg, Drone, Bender, Dale, Jax, Wren, Spookbro, Catacopter};