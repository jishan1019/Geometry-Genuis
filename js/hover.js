function random_bg_color(elementIdHover) {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  document.getElementById(elementIdHover).style.background = bgColor;
}

document
  .getElementById("HoverColor")
  .addEventListener("mouseenter", function () {
    document.getElementById("HoverColor").style.backgroundColor =
      random_bg_color("HoverColor");
  });

document
  .getElementById("hoverCardTwo")
  .addEventListener("mouseenter", function () {
    document.getElementById("hoverCardTwo").style.backgroundColor =
      random_bg_color("hoverCardTwo");
  });

document
  .getElementById("hoverCardThree")
  .addEventListener("mouseenter", function () {
    document.getElementById("hoverCardThree").style.backgroundColor =
      random_bg_color("hoverCardThree");
  });
document
  .getElementById("hoverCardFour")
  .addEventListener("mouseenter", function () {
    document.getElementById("hoverCardFour").style.backgroundColor =
      random_bg_color("hoverCardFour");
  });

document
  .getElementById("hoverCardFive")
  .addEventListener("mouseenter", function () {
    document.getElementById("hoverCardFive").style.backgroundColor =
      random_bg_color("hoverCardFive");
  });

document
  .getElementById("hoverCardSix")
  .addEventListener("mouseenter", function () {
    document.getElementById("hoverCardSix").style.backgroundColor =
      random_bg_color("hoverCardSix");
  });
