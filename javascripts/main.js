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
