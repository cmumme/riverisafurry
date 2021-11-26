document.addEventListener('DOMContentLoaded', (event) => {
  
})

var texts = [
  "She really is.",
  "Please call her one.",
  "Animal Crossing does count.",
  "I swear.",
  "It's not for the memes.",
  "She's also a weeb.",
  "Elliott isn't a noob.",
  "Zabazz doesn't use BetterDiscord.",
  "OwO whats this.",
  "Don't send help.",
  "Type is the best.",
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/Mz3Mi_OZYno?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
];

document.getElementById("mainText").innerHTML = texts[Math.floor(Math.random()*texts.length)];;

