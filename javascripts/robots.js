"use strict";

var Robo = (function(oldRobo) {

	oldRobo.Combatants = {};

	oldRobo.Combatants.Robot = function(name) {
		this.health = null;
		this.weapon = null;
		this.name = name || "unknown";

		this.toString = function() {
			var output = [this.name,
				" has ",
				this.health,
				" health.",
				"Attacks with ",
				this.weapon.toString()].join("");
			return output;
		};
	};

	oldRobo.Combatants.Robot.prototype.setWeapon = function(newWeapon) {
		this.weapon = newWeapon;
	}


	oldRobo.Combatants.Drone = function() {
		this.batteries = "D";
		this.health = Math.floor(Math.random() * 50 + 520);
		this.weapon = new oldRobo.Weapons.Howitzer();
		this.image = "images/drone.png";
	};

	oldRobo.Combatants.Cyborg = function() {
		this.fuel = "nitrous oxide";
		this.health = Math.floor(Math.random() * 10 + 550);
		this.weapon = new oldRobo.Weapons.Laser();
		this.image = "images/cyborg.jpg";
	};

	oldRobo.Combatants.Sentinel = function() {
		this.rocketpack = "neptunium";
		this.health = Math.floor(Math.random() * 20 + 560);
		this.weapon = new oldRobo.Weapons.Grenade();
		this.image = "images/sentinel.png";
	};

	oldRobo.Combatants.Drone.prototype = new oldRobo.Combatants.Robot("Barney");
	oldRobo.Combatants.Cyborg.prototype = new oldRobo.Combatants.Robot("Slade");
	oldRobo.Combatants.Sentinel.prototype = new oldRobo.Combatants.Robot("Dale");

	oldRobo.Combatants.Drone.prototype.getBatteries = function() {
		return this.batteries;
	};

	oldRobo.Combatants.Drone.prototype.makeNoise = function() {
		console.log("Loud noises");
	};

	oldRobo.Combatants.Cyborg.prototype.getFuel = function() {
		return this.fuel;
	};

	oldRobo.Combatants.Cyborg.prototype.makeNoise = function() {
		console.log("Loud noises");
	};

	oldRobo.Combatants.Sentinel.prototype.getRocketpack = function() {
		return this.rocketpack;
	};

	oldRobo.Combatants.Sentinel.prototype.makeNoise = function() {
		console.log(makeNoise);
	};

	let drone = new oldRobo.Combatants.Drone();
	let cyborg = new oldRobo.Combatants.Cyborg();
	let sentinel = new oldRobo.Combatants.Sentinel();

	return oldRobo;

})(Robo || {});
