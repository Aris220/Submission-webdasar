document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Get Started!");
  });
});

$(document).ready(function () {
  const strings = ["btb", "btc", "sass", "stock"];
  let i = 0;
  let currentString = "";
  let isDeleting = false;
  let speed = 500;

  function type() {
    if (isDeleting) {
      currentString = currentString.substring(0, currentString.length - 1);
    } else {
      currentString += strings[i].charAt(currentString.length);
    }

    $("#typed").text(currentString);

    if (!isDeleting && currentString === strings[i]) {
      isDeleting = true;
      speed = 550; // backspeed
    } else if (isDeleting && currentString === "") {
      isDeleting = false;
      i = (i + 1) % strings.length; // loop through strings
      speed = 500; // typespeed
    }

    setTimeout(type, speed);
  }

  type();
});
