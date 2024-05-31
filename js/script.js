// export * from "./headerMenu.js";
// export * from "./hamburger.js";
// export * from "./hero.js";
// export * from "./tab.js";
// export * from "./gallery.js";
// export * from "./title.js";
const galleryInner = document.querySelector(".c_gallery__inner");
const lists = [
  "img/gal_01.jpg",
  "img/gal_02.jpg",
  "img/gal_03.jpg",
  "img/gal_04.jpg",
  "img/gal_05.jpg",
  "img/gal_06.jpg",
  "img/gal_07.jpg",
  "img/gal_08.jpg",
];
for (let i = 0; i < lists.length; i++) {
  const list = lists[i];
  const content = `<a href="#" class="c_gallery__link"
              ><img src="${list}" alt="" class="c_gallery__photo"
            /></a>`;
  galleryInner.insertAdjacentHTML("beforeend", content);
}
let hamburger = document.getElementById("js_hamburger");
let headerNavWrap = document.getElementById("js_headerNav");
hamburger.addEventListener(
  "click",
  () => {
    if (headerNavWrap.classList.contains("js_menuOpen")) {
      hamburger.setAttribute("aria-expanded", "false");
      headerNavWrap.classList.remove("js_menuOpen");
    } else {
      hamburger.setAttribute("aria-expanded", "true");
      headerNavWrap.classList.add("js_menuOpen");
    }
  },
  false
);
const navButton = document.querySelector(".c_header__subNavTitle");
const subNav = document.getElementById("subNav");

navButton.addEventListener(
  "click",
  () => {
    const state = navButton.getAttribute("aria-expanded");
    subNav.style.height = "auto";
    let h = subNav.offsetHeight;
    if (state === "false") {
      subNav.style.height = 0;
      navButton.setAttribute("aria-expanded", "true");
      subNav.animate(
        {
          height: [0, h + "px"],
        },
        300
      );
      subNav.style.height = "auto";
    } else {
      subNav.animate(
        {
          height: [h + "px", 0],
        },
        300
      );
      subNav.style.height = "0px";
      navButton.setAttribute("aria-expanded", "false");
      //   subNav.style.height = "0px";
    }
  },
  false
);
const splashBg = document.querySelector(".l_main__splashBg");
const splashBgUnder = document.querySelector(".l_main__splashBgUnder");
const heroImg = document.getElementById("js_heroImg");
const imgList = ["main_01.jpg", "main_02.jpg", "main_03.jpg"];
let imgNumber = 0;
document.addEventListener(
  "DOMContentLoaded",
  function () {
    if (splashBg.classList.contains("appear")) {
      setTimeout(function () {
        splashBg.classList.remove("appear");
        splashBgUnder.classList.remove("appear");
      }, 3000);
    }
  },
  false
);
window.addEventListener(
  "load",
  function () {
    setInterval(function () {
      if (imgNumber >= imgList.length - 1) {
        imgNumber = 0;
      } else {
        imgNumber++;
      }
      const keyframe = {
        scale: [1.5, 1],
        opacity: [0, 1],
      };
      heroImg.setAttribute("src", "img/" + imgList[imgNumber]);
      const options = {
        duration: 800,
      };
      heroImg.animate(keyframe, options);
    }, 3000);
  },
  false
);
const tablist = document.querySelector('[role="tablist"]');
const tab01 = document.querySelector('[aria-controls="tab01"]');
const tab02 = document.querySelector('[aria-controls="tab02"]');
const tab03 = document.querySelector('[aria-controls="tab03"]');
tab01.addEventListener(
  "click",
  () => {
    const tabPanel = document.querySelector(".c_news__tabPanel");
    tabPanel.remove();
    fetch("topics.html")
      .then((response) => response.text())
      .then((data) => tablist.insertAdjacentHTML("afterend", data));
  },
  false
);
tab02.addEventListener(
  "click",
  () => {
    const tabPanel = document.querySelector(".c_news__tabPanel");
    tabPanel.remove();
    fetch("parts.html")
      .then((response) => response.text())
      .then((data) => tablist.insertAdjacentHTML("afterend", data));
  },
  false
);
tab03.addEventListener(
  "click",
  () => {
    const tabPanel = document.querySelector(".c_news__tabPanel");
    tabPanel.remove();
    fetch("cars.html")
      .then((response) => response.text())
      .then((data) => tablist.insertAdjacentHTML("afterend", data));
  },
  false
);
const title03Text = document.querySelectorAll(".e_title03__text");
const title03s = document.querySelectorAll(".e_title03");
let callback = (entries) => {
  for (let i = 0; i < title03Text.length; i++) {
    const keyframe = {
      opacity: [0, 1],
    };
    const options = {
      duration: 600,
      delay: i * 100,
      fill: "both",
    };
    title03Text[i].animate(keyframe, options);
  }
};
const observerRobot = new IntersectionObserver(callback);
title03s.forEach(function (title03) {
  observerRobot.observe(title03);
});
