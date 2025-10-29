/*
 * Script
 *
 * Copyright © Vladislav Kazantsev
 * All rights reserved.
 * This code is the intellectual property of Vladislav Kazantsev.
 * You are welcome to clone the related repository and use the code for exploratory purposes.
 * However, unauthorized reproduction, modification, or redistribution of this code (including cloning of related repository or altering it for activities beyond exploratory use) is strictly prohibited.
 * Code snippets may be shared only when the original author is explicitly credited and a direct link to the original source of the code is provided alongside the code snippet.
 * Sharing the link to the file is permitted, except when directed toward retrieval purposes.
 * Any form of interaction with this file is strictly prohibited when facilitated by the code, except when such interaction is for discussion or exchange purposes with others.
 * This copyright notice applies globally.
 * For inquiries about collaboration, usage outside exploratory purposes, or permissions, please contact: hypervisor7@pm.me
 */

// Roll Dice button event listener
document.getElementById("rollButton").addEventListener("click", function () {
  // Play sound effect if sound is on
  if (isSoundOn) {
    new Audio("assets/audio/dice-roll.mp3").play();
  }

  // Roll the dice
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Update the dice images with a rolling animation
  const img1 = document.querySelector("#img1");
  const img2 = document.querySelector("#img2");

  img1.classList.add("rolling");
  img2.classList.add("rolling");

  // Set a timeout to change the images after the animation
  setTimeout(() => {
    img1.src = "assets/images/dice" + randomNumber1 + ".jpg";
    img2.src = "assets/images/dice" + randomNumber2 + ".jpg";

    // Remove the rolling class after the images are updated
    img1.classList.remove("rolling");
    img2.classList.remove("rolling");

    // Update the result text
    const h1 = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
      h1.textContent = "🏆 Player 1 Wins!";
      confetti({
        particleCount: 100, // Number of confetti pieces
        spread: 70, // Spread of the confetti
        origin: { x: 0.32, y: 0.7 }, // Origin point for the confetti
      });
    } else if (randomNumber2 > randomNumber1) {
      h1.textContent = "Player 2 Wins! 🏆";
      confetti({
        particleCount: 100, // Number of confetti pieces
        spread: 70, // Spread of the confetti
        origin: { x: 0.68, y: 0.7 }, // Origin point for the confetti
      });
    } else {
      h1.textContent = "Draw!";
      confetti({
        particleCount: 100, // Number of confetti pieces
        spread: 70, // Spread of the confetti
        origin: { x: 0.32, y: 0.7 }, // Origin point for the confetti
      });
      confetti({
        particleCount: 100, // Number of confetti pieces
        spread: 70, // Spread of the confetti
        origin: { x: 0.68, y: 0.7 }, // Origin point for the confetti
      });
    }
  }, 500); // Delay for 0.5 second for the animation

  // Roll Dice button logic
  this.textContent = "Rolling...";
  this.disabled = true;

  // After rolling, re-enable the button and reset text
  setTimeout(() => {
    this.textContent = "Roll Dice";
    this.disabled = false;
  }, 500); // Delay for 0.5 second for the animation
});

let isSoundOn = true; // Initial state of sound

// Sound control button event listener
const soundControl = document.getElementById("soundControl");
soundControl.addEventListener("click", function () {
  isSoundOn = !isSoundOn; // Toggle sound state

  const volumeButton = this.querySelector("svg");
  if (isSoundOn) {
    soundControl.title = "Sound is On";
    // Change to volume down icon
    volumeButton.innerHTML = `
            <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12zm3.025 4a4.5 4.5 0 0 1-1.318 3.182L10 10.475A3.5 3.5 0 0 0 11.025 8 3.5 3.5 0 0 0 10 5.525l.707-.707A4.5 4.5 0 0 1 12.025 8"/>
        `;
  } else {
    soundControl.title = "Sound is Off";
    // Change to volume off icon
    volumeButton.innerHTML = `
            <path d="M10.717 3.55A.5.5 0 0 1 11 4v8a.5.5 0 0 1-.812.39L7.825 10.5H5.5A.5.5 0 0 1 5 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"/>
        `;
  }
});
