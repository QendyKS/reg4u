// NAVIGATION BAR

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

document.querySelector("center").style.marginTop =
  document.querySelector(".navbar").scrollHeight + "px";

function buildCurrentPreview(e) {
  let number = e.id.slice(-1);
  if (e.value == "Any")
    document.querySelector(
      ` .registration-ui > span:nth-child(${number})`
    ).innerText = ".";
  else
    document.querySelector(
      ` .registration-ui > span:nth-child(${number})`
    ).innerText = e.value;
  document.querySelectorAll(` .registration-ui > span`).forEach((e) => {
    if (e.innerText != ".") e.className = "";
    else e.className = "emptyC";
  });
}
const letters = "abcdefghijklmnopqrstuvwxyz".split("");
const numbers = [
  "20",
  "51",
  "02",
  "52",
  "03",
  "53",
  "04",
  "54",
  "05",
  "55",
  "06",
  "56",
  "07",
  "57",
  "08",
  "58",
  "09",
  "59",
  "10",
  "60",
  "11",
  "61",
  "12",
  "62",
  "13",
  "63",
  "14",
  "64",
  "15",
  "65",
  "16",
  "66",
  "17",
  "67",
  "18",
  "68",
  "19",
  "69",
  "20",
  "70",
];

function search() {
  document.querySelector(".result").removeAttribute("style");
  const values = document.querySelectorAll(".buy select");
  const plates = document.querySelector(".plates");
  plates.innerHTML = "";
  let plateArray = [];
  plateArray.length = 6;
  let plateArrays = [];
  plateArrays.length = 10;
  let allSame = true;
  for (i = 0; i < 10; i++) {
    plateArrays[i] = new Array(6);
  }
  values.forEach((v, index) => {
    if (v.value != "Any") {
      plateArray[index] = v.value;
      for (i = 0; i < 10; i++) {
        plateArrays[i][index] = v.value;
      }
    } else {
      allSame = false;
      if (index != 2) {
        for (i = 0; i < 10; i++) {
          plateArrays[i][index] =
            letters[Math.floor(Math.random() * letters.length)];
        }
      } else {
        for (i = 0; i < 10; i++) {
          plateArrays[i][index] =
            numbers[Math.floor(Math.random() * numbers.length)];
        }
      }
    }
  });
  if (allSame) {
    document.querySelector(".result").setAttribute("style", "height:280px");

    plates.innerHTML = ` <div class="plate">
<div class="plateLeft">
    <div class="codepen-wrapper scaleNone">
        <span class="registration-ui beforeNone">
        <span>${plateArray[0]}</span>
        <span>${plateArray[1]}</span>
        <span>${plateArray[2]}</span>
        <span>${plateArray[3]}</span>
        <span>${plateArray[4]}</span>
        <span>${plateArray[5]}</span>
    
            
        </span>
    </div>
    <p>£${Math.floor(Math.random() * 101 + 200)}</p>

</div>
<div class="plateRight">
<p> BUY </p> <img src="img/add_shopping_cart_white_24dp.svg">

</div>
</div>`;
  } else {
    for (i = 0; i < 10; i++) {
      plates.innerHTML += ` <div class="plate">
<div class="plateLeft">
    <div class="codepen-wrapper scaleNone">
        <span class="registration-ui beforeNone">
        <span>${plateArrays[i][0]}</span>
        <span>${plateArrays[i][1]}</span>
        <span>${plateArrays[i][2]}</span>
        <span>${plateArrays[i][3]}</span>
        <span>${plateArrays[i][4]}</span>
        <span>${plateArrays[i][5]}</span>
    
            
        </span>
    </div>
    <p>£${Math.floor(Math.random() * 101 + 200)}</p>
</div>
<div class="plateRight">
    <p> BUY </p> <img src="img/add_shopping_cart_white_24dp.svg">
</div>
</div>`;
    }
  }
}

function rotate(e) {
  e = document.querySelector(".refresh");
  e.className = "refresh rotate";
  setTimeout(() => {
    e.className = "refresh";
  }, 500);
  let newPlate = [];
  newPlate.length = 7;
  for (j = 1; j < 5; j++) {
    for (i = 0; i < 7; i++) {
      if (i == 2)
        newPlate[2] = numbers[Math.floor(Math.random() * numbers.length)];
      else if (i == 3) newPlate[3] = " ";
      else newPlate[i] = letters[Math.floor(Math.random() * letters.length)];
    }
    document.querySelector(`.fp${j}`).innerHTML = newPlate.join("");
  }
}
rotate();

function simulate(e) {
  document.querySelector(".fp5").innerText =
    e.parentElement.querySelector(".featuredPlate").innerText;
}
