(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var robot = require('./robots.js');

let robotOne;
let robotTwo;
let robotNameOne;
let robotNameTwo;
let robotOneHealth;
let robotTwoHealth;


$("#player-setup").show();

$(".card__link").click(function(e) {
  let nextCard = $(this).attr("next");
  let moveAlong = false;

  if (nextCard === "card--battleground") {
    moveAlong = ($("#robotOne-name").val() !== "" && $("#robotTwo-name").val() !== "");
    robotNameOne = $("#robotOne-name").val();
    robotOne.setName(robotNameOne);
    robotNameTwo = $("#robotTwo-name").val();
    robotTwo.setName(robotNameTwo);
  }

  if (moveAlong) {
    $(".card").hide();
    $('body').attr('id', 'battleview');
    $("." + nextCard).show();
  }
});



$("#robotOneSelect").change(function () {
  robotOne = new robot[this.value]();
  robotNameOne = robotOne.name;
  robotOneHealth = robotOne.health;
});

$("#robotTwoSelect").change(function () {
  robotTwo = new robot[this.value]();
  robotTwo.name = robotNameTwo;
  robotTwoHealth = robotTwo.health;
});



$("#enterBtn").on("click", function() {
    $("#robotOneSelect").val("robots");
    $("#robotTwoSelect").val("robots");
    $("#robotOne-name").val('');
    $("#robotTwo-name").val('');
    $("#victoryString").html('');
    $("#defeatString").html('');
    $("#robotOneName").find("h1").html('');
    $("#robotTwoName").find("h1").html('');
    $("#robotOneName").find("h1").append(`${robotNameOne}`);
    $("#robotTwoName").find("h1").append(`${robotNameTwo}`);
    $("#robotOneImg").attr("src", ` ${robotOne.image} `);
    $("#robotTwoImg").attr("src", ` ${robotTwo.image} `);
    updateStats();
});



function updateStats() {
  let robotOneHealthPercent = Math.round((robotOne.health / robotOneHealth) * 100);
  let robotTwoHealthPercent = Math.round((robotTwo.health / robotTwoHealth) * 100);
    $("#robotOneBar").attr("style", `width:${robotOneHealthPercent}%`);
    $("#robotTwoBar").attr("style", `width:${robotTwoHealthPercent}%`);
    $("#robotOneBar").html(`${robotOneHealthPercent}%`);
    $("#robotTwoBar").html(`${robotTwoHealthPercent}%`);
}



function attack() {
  robotTwo.health -= Math.ceil(robotOne.damage * Math.random());
  robotOne.health -= Math.ceil(robotTwo.damage * Math.random());
  updateStats();

  if (robotTwo.health <= 0) {
      $(".card").hide();
      $("#victoryView").show();
      $("#victoryString").append(`<h1>${robotNameOne} playing as ${robotOne.name}, a ${robotOne.type}, powered by ${robotOne.energy}, defeated ${robotNameTwo}, a ${robotTwo.type} ${robotTwo.name} by the great mighty power of ${robotOne.weapon}</h1>`);

  } else if (robotOne.health <= 0) {
      $(".card").hide();
      $("#defeatView").show();
      $("#defeatString").append(`<h1>${robotNameTwo} playing as ${robotTwo.name}, a ${robotTwo.type}, powered by ${robotTwo.energy}, defeated ${robotNameOne}, a ${robotOne.type} ${robotOne.name} by the great mighty power of ${robotTwo.weapon}</h1>`);
      }
}

$(document).on("click", "#attackbtn", attack);



$(document).on("click", "#tryAgain", function () {
  $("#player-setup").show();
  $("#victoryView").hide();
  $("#defeatView").hide();
  $('body').removeAttr('id', 'battleview');
});

},{"./robots.js":2}],2:[function(require,module,exports){
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
},{}]},{},[1]);
