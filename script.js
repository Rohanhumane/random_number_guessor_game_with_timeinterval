"use strict";
let count = 0;
let ptr, arr, ans, temp, attempts, timer, secondTiming;
let level = 0;
let bool = true;
let arrRemover = [];
let checker = true;
///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////
// Guessing the numbers within time if not guess fast numbers will be disappear and clock is also running
//////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////
const enterText = document.querySelector(".search__field");
const ranRemover = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    document.querySelector(`.start-${arr[i]}`).remove();
  }
};

const secondTimer = function (time) {
  secondTiming = setInterval(function () {
    if (time === 0) {
      clearInterval(timer);
      document.querySelector(".type").classList.add("hidden");
      opacityCall();
      ranRemover(arr);
      document.querySelector(".gameloser").classList.remove("hidden");
      clearInterval(secondTiming);
    }
    document.querySelector(".secondT").textContent = `${time} seconds`;
    time--;
  }, 1000);
};

const opacityCall = function () {
  document.querySelector(".score").classList.add("opaciity");
  document.querySelector(".attempt").classList.add("opaciity");
  document.querySelector(".level").classList.add("opaciity");
};

const start = () => {
  document.querySelector(".score").classList.remove("opaciity");
  document.querySelector(".attempt").classList.remove("opaciity");
  document.querySelector(".level").classList.remove("opaciity");
};

const guessing = function (r, op) {
  arr = [];
  ptr = 0;
  ans = undefined;
  temp = undefined;
  for (let i = 1; i < op + 1; i++) {
    let newE = document.createElement("div");
    newE.classList.add("ranR");
    newE.classList.add(`start-${i * r * 2}`);
    newE.textContent = i * r * 2;
    arr.push(i * r * 2);
    arrRemover.push(i * r * 2);
    document.querySelector(".ranS").appendChild(newE);
  }
  timer = setInterval(function () {
    if (arr.length === 0) {
      console.log("sdfsdff", arrRemover.length);
      // clearInterval(timer);
      return;
    }
    if (arrRemover.length === 0) {
      console.log(arrRemover.length);
      clearInterval(timer);
      return;
    } else {
      timer;
    }
    if (
      temp !== undefined &&
      document.querySelector(`.start-${temp}`).classList.contains("ami")
    ) {
      document
        .querySelector(`.start-${temp}`)
        .closest(`.start-${temp}`)
        .classList.add("hidden");
    }
    let ran = Math.trunc(Math.random() * arrRemover.length);
    if (ran < arrRemover.length) {
      document
        .querySelector(`.start-${arrRemover[ran]}`)
        .closest(`.start-${arrRemover[ran]}`)
        .classList.add("hidden");
      arrRemover.splice(ran, 1);
    }
  }, 5000);

  document.querySelector(".search").addEventListener("submit", function (e) {
    e.preventDefault();
    if (arr.length === 0) {
      return;
    }

    let i = 0;
    while (i < arr.length) {
      if (enterText.value === "") {
        ans = undefined;
        return;
      }
      if (Number(enterText.value) === arr[i]) {
        ans = i;
        ptr = 1;
        break;
      } else {
        ptr = 0;
        ans = undefined;
      }
      i++;
    }
    if (
      enterText.value !== "" &&
      ptr === 1 &&
      ans !== undefined &&
      ans !== -1 &&
      temp !== undefined
    ) {
      document.querySelector(`.start-${temp}`).remove();
    }
    if (ptr === 1) {
      temp = Number(enterText.value);
    }
    enterText.value = "";
    if (
      ptr === 0 ||
      (enterText.value === "" && (ans === -1 || ans === undefined))
    ) {
      attempts -= 1;
      if (attempts === 0) {
        opacityCall();
        document.querySelector(".attemptC").textContent = attempts;
        document.querySelector(".gameloser").classList.remove("hidden");
        document.querySelector(".type").classList.add("hidden");
        ranRemover(arr);
        clearInterval(secondTiming);
      } else {
        document.querySelector(".attemptC").textContent = attempts;
      }
      count -= 1;
      document.querySelector(".search__field").classList.add("loser");
      document.querySelector(".search__btn").classList.add("loser");
      document.querySelector(".score").style.backgroundColor = "red";
      document.querySelector(".attempt").style.backgroundColor = "red";
      if (count === -1) {
        count = 0;
        document.querySelector(".scoreV").textContent = count;
        return;
      }

      document.querySelector(".scoreV").textContent = count;
      return;
    } else {
      arr.splice(ans, 1);
      arrRemover.splice(ans, 1);
      document.querySelector(".search__field").classList.remove("loser");
      document.querySelector(".search__btn").classList.remove("loser");
      document.querySelector(".score").style.backgroundColor = "chartreuse";
      document.querySelector(".attempt").style.backgroundColor =
        "darkslateblue";
      count += 1;
      document.querySelector(".scoreV").textContent = count;
      if (arr.length === 0) {
        ranRemover(arr);
        clearInterval(secondTiming);
        document.querySelector(`.ranR`).remove();
        attempts -= 1;
        level += 1;
        clearInterval(timer);
        if (attempts === -1) {
          document.querySelector(".attemptC").textContent = attempts + 1;
        }

        document.querySelector(".score").style.backgroundColor = "chartreuse";
        document.querySelector(".level").classList.add("high");
        if (level === 3) {
          document.querySelector(".level").classList.remove("high");
          bool = true;
          opacityCall();
          document.querySelector(".winner").classList.remove("hidden");
          document.querySelector(".type").classList.add("hidden");
          return;
        }
        if (level === 2) {
          document.querySelector(`.levelUp`).textContent = `Final`;
          document.querySelector(`.levelUp`).style.padding = ` 0px 40px`;
        } else {
          document.querySelector(`.levelUp`).textContent = level;
        }
        bool = true;
        document.querySelector(".type").classList.add("hidden");
        return;
      }

      document
        .querySelector(`.start-${temp}`)
        .closest(`.start-${temp}`)
        .classList.remove("hidden");

      document
        .querySelector(`.start-${temp}`)
        .closest(`.start-${temp}`)
        .classList.add("ami");
      document.querySelector(".scoreV").textContent = count;
    }
  });
};

document.querySelector(".level").addEventListener("click", function () {
  document.querySelector(".attempt").style.backgroundColor = "darkslateblue";
  document.querySelector(".level").classList.remove("high");
  if (bool && level === 0) {
    guessing(2, 6);
    attempts = 3;
    secondTimer(15);
    bool = false;
    document.querySelector(".attemptC").textContent = attempts;
    document.querySelector(".type").classList.remove("hidden");
  }
  if (bool && level === 1) {
    guessing(4, 8);
    attempts = 2;
    bool = false;
    secondTimer(20);
    document.querySelector(".attemptC").textContent = attempts;
    document.querySelector(".type").classList.remove("hidden");
  }
  if (bool && level === 2) {
    guessing(8, 12);
    attempts = 1;
    bool = false;
    secondTimer(25);
    document.querySelector(".attemptC").textContent = attempts;
    document.querySelector(".type").classList.remove("hidden");
  }
});

document.querySelector(".btn--close").addEventListener("click", function () {
  document.querySelector(".winner").classList.add("hidden");
  document.querySelector(".gameloser").classList.add("hidden");
});

document.querySelector(".btn--close-1").addEventListener("click", function () {
  document.querySelector(".gameloser").classList.add("hidden");
});
// let time = 20;
