

var rolLength = 6;
var setNum;
var hiddenInput = document.createElement("input");
hiddenInput.className = "hidden-input";

const rRandom = () => {
  var min = Math.ceil(0);
  //var max = Math.floor(rolLength - 1);//5번상품이 나오지않아서 변경
  var max = Math.floor(rolLength);
  //console.log(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const rRotate = () => {
  var panel = document.querySelector(".rouletter-wacu");
  var btn = document.querySelector(".rouletter-btn");
  var deg = [];
  for (var i = 1, len = rolLength; i <= len; i++) {
    deg.push((360 / len) * i);
  }

  var num = 0;
  document.body.append(hiddenInput);
  setNum = hiddenInput.value = rRandom();

  var ani = setInterval(() => {
    num++;
    panel.style.transform = "rotate(" + 360 * num + "deg)";
    btn.disabled = true; //button,input
    btn.style.pointerEvents = "none"; //a 태그

    if (num === 50) {
      clearInterval(ani);
      panel.style.transform = "rotate(" + deg[setNum] + "deg)";
    }
  }, 50);
};

const rLayerPopup = (num) => {
  var cover =  document.querySelector(".roulettercover_area");
  var product_text =  document.querySelector(".event_product_message");
  switch (num) {
    case 1:
      cover.classList.add("on");
      product_text.innerText = "'피자!! 당첨 되었습니다.'";
      break;
    case 2:
      cover.classList.add("on");
      product_text.innerText = "'에어팟!! 당첨 되었습니다.'";
      break;
    case 3:
      cover.classList.add("on");
      product_text.innerText = "'치킨콜라세트!! 당첨 되었습니다.'";
      break;
    case 4:
      cover.classList.add("on");
      product_text.innerText = "'CU 2000원!! 당첨 되었습니다.'";
      break;
    case 5:
      cover.classList.add("on");
      product_text.innerText = "'아이패드!! 당첨 되었습니다.'";
      break;
    default:
      cover.classList.add("on");
      product_text.innerText = "'미래인재 3천 포인트!! 당첨 되었습니다.'";
  }
};

const rReset = (ele) => {
  setTimeout(() => {
    ele.disabled = false;
    ele.style.pointerEvents = "auto";
    rLayerPopup(setNum);
    hiddenInput.remove();
  }, 5500);
};

document.addEventListener("click", function (e) {
  var target = e.target;
  if (target.tagName === "BUTTON") {
    rRotate();
    rReset(target);
  }
});

document.getElementById("app").innerHTML = `
<div class="rouletter">
    <div class="rouletter-bg">
        <div class="rouletter-wacu"></div>
    </div>
    <div class="rouletter-arrow"></div>
    <button class="rouletter-btn"></button>

</div>
`;
