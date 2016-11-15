"use strict";

var Robo = (function(oldRobo) {

	oldRobo.Weapons = {};

	oldRobo.Weapons.Weapon = function() {
		this.name = null;
		this.damage = null;
		this.image = null;

		this.toString = function() {
			return this.name;
		};
	};

	oldRobo.Weapons.Howitzer = function() {
		this.name = "Howitzer cannon";
		this.damage = Math.floor(Math.random() * 30 + 10);
		this.image = "https://upload.wikimedia.org/wikipedia/commons/8/8e/Charlottenlund_Fort_Haubitz4.jpg";
	};

	oldRobo.Weapons.Howitzer.prototype = new oldRobo.Weapons.Weapon();

	oldRobo.Weapons.Laser = function() {
		this.name = "AN/SEQ-3 Laser Weapon System";
		this.damage = Math.floor(Math.random() * 50 + 5);
		this.image = "https://upload.wikimedia.org/wikipedia/commons/0/02/Laser_Weapon_System_aboard_USS_Ponce_%28AFSB%28I%29-15%29_in_November_2014_%2805%29.JPG";
	};

	oldRobo.Weapons.Laser.prototype = new oldRobo.Weapons.Weapon();

	oldRobo.Weapons.Grenade = function() {
		this.name = "M203 grenade launcher";
		this.damage = Math.floor(Math.random() * 10 + 25);
		this.image = "https://upload.wikimedia.org/wikipedia/commons/f/fd/M203_1.jpg";
	};

	oldRobo.Weapons.Grenade.prototype = new oldRobo.Weapons.Weapon();

	return oldRobo;

})(Robo || {});