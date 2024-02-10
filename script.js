let yesButtonSize = 60;
let clickCounter = 0;

function increaseSize(buttonId) {
  const button = document.getElementById(buttonId);
  if (buttonId === 'yesButton') {
    button.style.width = `${yesButtonSize}px`;
    button.style.height = `${yesButtonSize}px`;
    yesButtonSize += 20;
  } else {
    yesButtonSize = 60;
  }
}

function decreaseSize(buttonId) {
  const button = document.getElementById(buttonId);
  button.style.width = '100px';
  button.style.height = '50px';
}

function toggleAnimation(buttonId) {
  if (buttonId === 'yesButton') {
    decreaseSize('yesButton');
    increaseSize('noButton');
  } else {
    decreaseSize('noButton');
    increaseSize('yesButton');
    split();
  }
}

function split() {
    var x = document.getElementById("imagDiv");
    x.style.display = "flex";

    var images = document.querySelectorAll(".split-image");
    images.forEach((image) => {
      image.style.transition = "none";
      image.style.margin = "0";
      image.style.transform = "none";
    });

    clickCounter++;

    images.forEach((image, index) => {
      const imageUrl = `${clickCounter}.jpg`;
      image.style.backgroundImage = `url("images/${imageUrl}")`;
    });

    setTimeout(() => {
      images.forEach((image) => {
        image.style.transition = "all 400ms ease";
        image.style.margin = "0 24px";
        image.style.transform = "scale(1.08)";
      });
    }, 500);

    setTimeout(() => {
      x.style.display = "none";
    }, 1500);
  }

