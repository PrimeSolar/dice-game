/*
 * The Library of Custom Reusable Web Components
 * This file is the library containing my collection of custom, reusable web components
 * that can be used across different parts of the project. These components go beyond what browsers provide,
 * allowing for expanded capabilities and functionality in the project.
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

// Footer
footerContainer = document.querySelector("#footerContainer");
const year = new Date().getFullYear();
function footerContainerF(footerContainer) {
  if (footerContainer != null) {
    // Define footer content:
    footerContainer.innerHTML += `<footer>Copyright © <a href="https://primesolar.github.io/web-developer/">Vladislav Kazantsev</a> ${year}</footer>`;
    footer = document.querySelector("footer");
    const donationButton = document.createElement("button");
    donationButton.innerText = "Support Me";
    donationButton.style.display = "block";
    donationButton.style.margin = "2.5vh auto";
    donationButton.style.padding = "10px 20px";
    donationButton.style.fontFamily = "Arial, Helvetica, sans-serif";
    donationButton.style.backgroundColor = "#28a745";
    donationButton.style.color = "#ffffff";
    donationButton.style.border = "none";
    donationButton.style.borderRadius = "5px";
    donationButton.style.cursor = "pointer";
    donationButton.onclick = function () {
      window.open(
        "https://www.buymeacoffee.com/CocaCola",
        "_blank",
        "noopener noreferrer"
      );
    };
    footer.appendChild(donationButton);
  }
}
footerContainerF(footerContainer);

console.log("components.js is completed");
