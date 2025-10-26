const typingSpan = document.getElementById("typing-text");
const texts = [
  "I'm dying to tell you that",
  "I have had a crush on you for a while",
  "Please don't reject me :("
];
let textIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const currentText = texts[textIndex];

  if (!deleting) {
    typingSpan.textContent = currentText.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentText.length) {
      deleting = true;
      setTimeout(type, 1000); 
      return;
    }
  } else {
    typingSpan.textContent = currentText.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      textIndex = (textIndex + 1) % texts.length; 
      setTimeout(type, 500); 
      return;
    }
  }

  setTimeout(type, 100);
}

type();


const yesBtn = document.querySelector(".btn:nth-child(1)");

yesBtn.addEventListener("click", () => {
  for (let i = 0; i < 50; i++) {
    createHeart();
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  const size = Math.random() * 20 + 10;
  heart.style.width = size + "px";
  heart.style.height = size + "px";

  heart.style.left = Math.random() * window.innerWidth + "px";

  heart.style.animationDuration = (Math.random() * 2 + 2) + "s";

  document.body.appendChild(heart);

  heart.addEventListener("animationend", () => heart.remove());
}


const noBtn = document.querySelector(".btn:nth-child(2)");

noBtn.addEventListener("click", () => {
  for (let i = 0; i < 50; i++) {
   
    const type = Math.random() < 0.5 ? "down" : "up";
    createDrop(type);
  }
});

function createDrop(type) {
  const drop = document.createElement("div");
  drop.classList.add("raindrop");
  drop.classList.add(type);

  const size = Math.random() * 10 + 5; 
  drop.style.width = size + "px";
  drop.style.height = size * 1.5 + "px"; 
  if (type === "down") {
    drop.style.left = Math.random() * window.innerWidth + "px";
  } else { 
    drop.style.left = Math.random() * window.innerWidth + "px";
    drop.style.bottom = "-50px";
  }

  const duration = Math.random() * 2 + 2; 
  drop.style.animationDuration = duration + "s";

  document.body.appendChild(drop);

  drop.addEventListener("animationend", () => {
    drop.remove();
  });
}


const floatingLettersContainer = document.getElementById("floating-letters");
const text = "❤︎♡❤︎♡❤︎♡❤︎♡❤︎♡︎❤︎♡︎❤︎♡︎"; 

function floatLetter(letter) {
  const span = document.createElement("span");
  span.textContent = letter;

  
  span.style.left = (Math.random() * 300 + 100) + "px";
  span.style.top = (Math.random() * 200 + 50) + "px";

  
  const x = (Math.random() * 200 - 100) + "px";
  const y = (Math.random() * 200 - 100) + "px";
  span.style.setProperty('--x', x);
  span.style.setProperty('--y', y);

  
  const duration = Math.random() * 2 + 3; 
  span.style.animationDuration = duration + "s";

  floatingLettersContainer.appendChild(span);


  span.addEventListener("animationend", () => span.remove());
}


setInterval(() => {
  const randomLetter = text[Math.floor(Math.random() * text.length)];
  floatLetter(randomLetter);
}, 300); 


const floatingTextContainer = document.getElementById("floating-text-container");


const messages = [
  "Wrote lots of code for you.",
  "Only a programmer has this much dedication.",
  "Dame un chance", 
  "Smiles like yours should be patented.",
  "Poured my heart into every line of code",
  "Took 1141 lines",
  "Variables can't contain my feeling for you.",
  "Infinite loops of thoughts about you."
  
];


function createFloatingText() {
  const div = document.createElement("div");
  div.classList.add("floating-text");

  
  div.textContent = messages[Math.floor(Math.random() * messages.length)];

  document.body.appendChild(div);

  
  const divWidth = div.offsetWidth;
  const divHeight = div.offsetHeight;

  //viewport 
  const maxX = window.innerWidth - divWidth;
  const maxY = window.innerHeight - divHeight;

  // initial position
  let x = Math.random() * maxX;
  let y = Math.random() * maxY;

  div.style.left = x + "px";
  div.style.top = y + "px";

  //velocity
  let dx = (Math.random() - 0.5) * 4; 
  let dy = (Math.random() - 0.5) * 4;

  const interval = setInterval(() => {
    x += dx;
    y += dy;


    if (x <= 0 || x >= maxX) dx *= -1;
    if (y <= 0 || y >= maxY) dy *= -1;

    div.style.left = x + "px";
    div.style.top = y + "px";
  }, 30);

  
  setTimeout(() => {
    clearInterval(interval);
    div.remove();
  }, 2000);
}


setInterval(createFloatingText, 600);


window.addEventListener("resize", () => {

});
