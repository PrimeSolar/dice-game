/**
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

/** Set the <html> element `lang` property. */
const html = document.querySelector("html");
html.lang = "en";

/** Set `dir="ltr"` for the <html> element. */
html.dir = "ltr";

/** Set <meta name="viewport" content="width=device-width, initial-scale=1" />. */
const metaViewport = document.createElement("meta");
metaViewport.name = "viewport";
metaViewport.content = "width=device-width, initial-scale=1";
document.querySelector("head").appendChild(metaViewport);

/** Set `title` for the <html> element based on a webpage's content. */
const title = document.querySelector("h1");
document.title = title.textContent.replace(" 🥁", "").trim();

/** Insert <meta name="author" content="Vladislav Kazantsev">. */
const metaAuthor = document.createElement("meta");
metaAuthor.name = "author";
metaAuthor.content = "Vladislav Kazantsev";
document.querySelector("head").appendChild(metaAuthor);

/** Insert <meta name="copyright" content="© `Current Year` Vladislav Kazantsev">. */
const metaCopyright = document.createElement("meta");
metaCopyright.name = "copyright";
metaCopyright.content =
  "© " + new Date().getFullYear() + " Vladislav Kazantsev";
document.querySelector("head").appendChild(metaCopyright);

/** Insert <meta name="description" content="Enjoy a fun and interactive Dice Game where players roll dice to compete. Experience excitement with every roll and enjoy sound effects and confetti animations!" />. */
const metaDescription = document.createElement("meta");
metaDescription.name = "description";
metaDescription.content =
  "Enjoy a fun and interactive Dice Game where players roll dice to compete. Experience excitement with every roll and enjoy sound effects and confetti animations!";
document.querySelector("head").appendChild(metaDescription);

/** Insert <meta name="keywords" content="dice, game, enjoy, interactive, player, roll, sound, effects, image, confetti, animation, web, application" />. */
const metaKeywords = document.createElement("meta");
metaKeywords.name = "keywords";
metaKeywords.content =
  "dice, game, enjoy, interactive, player, roll, sound, effects, image, confetti, animation, web, application";
document.querySelector("head").appendChild(metaKeywords);

/** Insert <link rel="stylesheet" type="text/css" href="styles/style-min.css">. */
const linkStyle = document.createElement("link");
linkStyle.rel = "stylesheet";
linkStyle.type = "text/css";
linkStyle.href = "styles/style-min.css";
document.querySelector("head").appendChild(linkStyle);
linkStyle.onload = function () {
  document.body.style.display = "block";
};

/** Insert <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Indie+Flower|Lobster">. */
const linkIndieFlowerFont = document.createElement("link");
linkIndieFlowerFont.rel = "stylesheet";
linkIndieFlowerFont.type = "text/css";
linkIndieFlowerFont.href =
  "https://fonts.googleapis.com/css?family=Indie+Flower|Lobster";
document.querySelector("head").appendChild(linkIndieFlowerFont);

/** Insert <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Arvo">. */
const linkArvoFont = document.createElement("link");
linkArvoFont.rel = "stylesheet";
linkArvoFont.type = "text/css";
linkArvoFont.href = "https://fonts.googleapis.com/css?family=Arvo";
document.querySelector("head").appendChild(linkArvoFont);

/** Insert <link rel="icon" href="pics/logos/logo.jpg">. */
const linkImage = document.createElement("link");
linkImage.rel = "icon";
linkImage.href = "assets/images/logo.jpg";
document.querySelector("head").appendChild(linkImage);

/** Set `type="text/javascript"` for all <script> elements for better compatibility. */
for (let x of document.querySelectorAll("script")) {
  x.type = "text/javascript";
}

/** Insert <meta http-equiv="Pragma" content="no-cache">.
var metaPragma = document.createElement("meta");
metaPragma.httpEquiv = "Pragma";
metaPragma.content = "no-cache";
document.querySelector("head").appendChild(metaPragma); */
