// Index

//  * ---- Reveal Wheel

//  * ---- Background-image movement

//  * ---- Animate logo on scroll

//  * ---- Text Scroll Animation: Hero text

//  * ---- Flicker Effects

//  * ---- Background Movement Effect

//  * ---- Text Scroll Animations (scroll triggered, intersectionObserver)

//  * ---- Modal Animation

//  * ---- Form Logic

//  * ---- Add WPForm Container

//  * ---- Background Parallax

//  * ---- NEUMORPHISM TYPO (three.js)

/* ------------------------------------------------------------------------------------------------------------------------------------------ */

/**
 *
 * ---- Reveal Wheel
 *
 *  - turn wheels when a given percentage ('targetRatioWheels') scrolled from top is reached
 *
 */

window.addEventListener("resize", setSizePropRevealWheel);

function setSizePropRevealWheel() {
  const htmlElement = document.documentElement;
  const width = htmlElement.clientWidth;
  const height = htmlElement.clientHeight;

  htmlElement.style.setProperty("--width", width);
  htmlElement.style.setProperty("--height", height);
}
setSizePropRevealWheel();

const ws = document.querySelectorAll(".cmstl-background-reveal-wheel"); // reveal wheels

function turnWheels() {
  const height = document.documentElement.clientHeight;
  ws.forEach((w) => {
    w.style.rotate = "-360deg";
    w.style.transform = `translateX(calc(7*3.14*${height / 2}px))`;
  });
}

const targetRatioWheels = 0.001; // 0.1% of screen scrolled
let ws_reveal_occurred = false;

window.addEventListener("scroll", () => {
  // (Optimization) This should only run once
  if (ws_reveal_occurred === false) {
    let pixelsFromTop = window.scrollY;
    let screenHeight = document.documentElement.clientHeight; // screen height rather than dom height

    if (pixelsFromTop / screenHeight >= targetRatioWheels) {
      turnWheels();
      ws_reveal_occurred = true;
    }
    // console.log(pixelsFromTop, screenHeight);
  }
});

/**
 *
 * ---- Background-image movement
 *
 * - single image, single value
 *
 */

// (function () {
//   // Add event listener
//   document.addEventListener("mousemove", parallax);
//   const elem = document.querySelector(".cmstl-background-image");
//   // Magic happens here
//   function parallax(e) {
//     let _w = window.innerWidth / 2;
//     let _h = window.innerHeight / 2;
//     let _mouseX = e.clientX;
//     let _mouseY = e.clientY;
//     let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
//       50 - (_mouseY - _h) * 0.01
//     }%`;

//     let x = `${_depth1}`;
//     // console.log(x);
//     elem.style.backgroundPosition = x;
//   }
// })();

/**
 *
 * ---- Animate logo on scroll
 *
 * - animate logo at 33% of screen scrolled (from top)
 *
 */

const targetRatioLogo = 1 / 3; // one third of screen scrolled

const logoText = document.querySelector(".cmstl-site-logo-text");
const logo = document.querySelector(".cmstl-site-logo");

window.addEventListener("scroll", () => {
  let pixelsFromTop = window.scrollY;
  // let domHeight = document.body.offsetHeight; // dom height
  let screenHeight = document.documentElement.clientHeight; // screen height rather than dom height

  if (pixelsFromTop / screenHeight >= targetRatioLogo) {
    logoText.classList.add("cmstl-site-logo-text-shrink");
    logo.classList.remove("cmstl-invisible");
  } else {
    logoText.classList.remove("cmstl-site-logo-text-shrink");
    logo.classList.add("cmstl-invisible");
  }
});

/**
 *
 * ---- Text Scroll Animation: Hero text
 *
 *  - https://www.youtube.com/watch?v=-pDPASqX97w (great tutorial)
 *
 *  - the below code is a pretty universal pattern to create and update a css property
 *  that tracks scroll behavior
 *
 */

window.addEventListener("scroll", setScrollProp);
window.addEventListener("resize", setScrollProp);

function setScrollProp() {
  const htmlElement = document.documentElement;
  // document.documentElement.scrollTop returns window.scrollY (special case of .scrollTop when it is the property of the root/html)
  const currentRatio = Math.min(
    htmlElement.scrollTop / htmlElement.clientHeight,
    targetRatioLogo
  ); // value from 0 to targetRatio
  // console.log(currentRatio * 100);
  htmlElement.style.setProperty("--scroll", currentRatio * 100); // scales the ratio for convenience
}

setScrollProp(); // run the function in case page is reloaded

/**
 *
 * ---- Flicker Effects
 *
 *
 */

// ---------------------------------------------------- TEMPLATE

// const element = document.getElementById("myElement");
// let intervalId;

// element.addEventListener("mouseover", () => {
//   intervalId = setInterval(() => {
//     // Function to be executed repeatedly
//     // Example: Change background color randomly
//     const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
//       Math.random() * 255
//     })`;
//     element.style.backgroundColor = randomColor;
//   }, 100); // Interval time in milliseconds (adjust as needed)
// });

// element.addEventListener("mouseout", () => {
//   clearInterval(intervalId);
//   element.style.backgroundColor = "lightblue"; // Reset to original color
// });

// ---------------------------------------------------- Site Colors

let siteColor = "rgb(93, 155, 219)";
let baseColor = "rgb(255, 255, 255)";

// ---------------------------------------------------- Contact Buttons

let intervalId;

document.addEventListener("mouseover", (e) => {
  // console.log(e.target);

  let isContact = e.target.classList.contains("cmstl-contact");

  if (isContact) {
    intervalId = setInterval(() => {
      // number between 3 and 5 (range: 5 - 3 = 2)
      let num1 = 3 + Math.random() * 2;
      // number between 7 and 10 (range: 3)
      let num2 = 7 + Math.random() * 3;
      // number between 10 and 15 (range: 5)
      let num3 = 10 + Math.random() * 5;
      // number between 14 and 20 (range: 6)
      let num4 = 14 + Math.random() * 6;
      // number between 24 and 33 (range: 9)
      let num5 = 24 + Math.random() * 9;
      // number between 29 and 39 (range: 10)
      let num6 = 29 + Math.random() * 10;
      // number between 39 and 50 (range: 11)
      let num7 = 39 + Math.random() * 11;
      // number between 51 and 75 (range: 24)
      let num8 = 51 + Math.random() * 24;

      const boxShadow = `${baseColor} 0px 0px ${num1}px, ${baseColor} 0px 0px ${num2}px, ${baseColor} 0px 0px ${num3}px, \ 
      ${siteColor} 0px 0px ${num4}px, ${siteColor} 0px 0px ${num5}px, ${siteColor} 0px 0px ${num6}px, ${siteColor} 0px 0px ${num7}px, ${siteColor} 0px 0px ${num8}px`;

      e.target.style.boxShadow = boxShadow;
    }, 30); // Interval time in milliseconds (adjust as needed)

    e.target.addEventListener("mouseout", () => {
      clearInterval(intervalId);
      e.target.style.boxShadow = "rgb(255, 255, 255) 0px 0px 0px"; // Reset to original
    });
  }
});

// ---------------------------------------------------- Motto Text

const textFlicker = document.querySelector(".cmstl-text-flicker");

setInterval(() => {
  // console.log("Motto flicker");

  // number between 3 and 5 (range: 5 - 3 = 2)
  let num1 = 3 + Math.random() * 2;
  // number between 7 and 10 (range: 3)
  let num2 = 7 + Math.random() * 3;
  // number between 10 and 15 (range: 5)
  let num3 = 10 + Math.random() * 5;

  const filter = `drop-shadow(${baseColor} 0px 0px ${num1}px) drop-shadow(${siteColor} 0px 0px ${num2}px) drop-shadow(${siteColor} 0px 0px ${num3}px)`;

  textFlicker.style.filter = filter;
}, 100);

/**
 *
 * ---- Background Movement Effect
 *
 *
 */

const sections = document.querySelectorAll(".cmstl-section-wrapper");

document.addEventListener("mousemove", (e) => {
  // Only on desktop (mqs: media query small)
  let mqs = window.matchMedia("(max-width: 1280px)");
  if (mqs.matches) return;

  let window_w = window.innerWidth;
  let mouse_x = e.clientX;

  // deg range 0.7deg to -0.7deg
  // x = mouse_x, min = 0, max = window_w
  // - mapping (thx chatgpt!):
  let y = 0.7 + (-1.4 * mouse_x) / window_w;

  let transform = `perspective(800px) rotateY(${y}deg)`;

  sections.forEach((section) => {
    // set the new transform for each section
    section.style.transform = transform;
  });
});

/**
 *
 * ---- Text Scroll Animations (scroll triggered, intersectionObserver)
 *
 *
 */

// ---------------------------------------------------- Hey there section

// --------------- Elements

const hey_there_xl = document.querySelector(".cmstl-hey-there .cmstl-fw-xl");

const hey_there_other_nodeList = document.querySelectorAll(
  ".cmstl-hey-there .cmstl-fw-lg"
); // other text
const hey_there_other_arr = Array.from(hey_there_other_nodeList); // turn into array to search elements with 'includes'

const three_js_canvas = document.querySelector("#canvas-wrapper");
const three_js_section = document.querySelector("#cmid-what-we-do");

// --------------- Observer

const hey_there_observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // --------------- xl text
      if (entry.target === hey_there_xl) {
        entry.target.classList.toggle(
          "cmstl-hey-there-scroll-anim-xl",
          entry.isIntersecting
        );

        if (entry.isIntersecting) hey_there_observer.unobserve(entry.target);
      }
      // --------------- other text
      if (hey_there_other_arr.includes(entry.target)) {
        entry.target.classList.toggle(
          "cmstl-hey-there-scroll-anim-other",
          entry.isIntersecting
        );

        if (entry.isIntersecting) hey_there_observer.unobserve(entry.target);
      }

      // --------------- three.js text
      /*
      if (entry.target === three_js_section) {
        three_js_canvas.classList.toggle(
          "cmstl-canvas-transition",
          entry.isIntersecting
        );

        if (entry.isIntersecting) {
          hey_there_other_arr.forEach((elem) => {
            elem.classList.add("cmstl-reduce-opacity");
          });
        } else {
          hey_there_other_arr.forEach((elem) => {
            elem.classList.remove("cmstl-reduce-opacity");
          });
        }
      }
      */
    });
  },
  { rootMargin: "-50px" }
);

// --------------- Add to observer

hey_there_observer.observe(hey_there_xl);
hey_there_other_arr.forEach((entry) => {
  hey_there_observer.observe(entry);
});
hey_there_observer.observe(three_js_section);

// ---------------------------------------------------- What we do section
// ---------------------------------------------------- Motto section
// ---------------------------------------------------- Say hello section

// --------------- Elements

// ---- what we do

const what_we_do_xl = document.querySelector(".cmstl-what-we-do .cmstl-fw-xl");

const what_we_do_lg_nodeList = document.querySelectorAll(
  ".cmstl-what-we-do .cmstl-fw-lg"
);
const what_we_do_lg_arr = Array.from(what_we_do_lg_nodeList);

const what_we_do_normal_nodeList = document.querySelectorAll(
  ".cmstl-what-we-do .cmstl-fw-normal"
);
const what_we_do_normal_arr = Array.from(what_we_do_normal_nodeList);

// ---- motto

const motto_lg = document.querySelector(".cmstl-motto .cmstl-fw-lg");

// ---- say hello

const say_hello_section = document.querySelector(".cmstl-say-hello"); // observe to hide Fixed Controls on Say Hello section
const fixed_controls_wrapper = document.querySelector(".cmstl-fixed-controls");

const say_hello_xl = document.querySelector(".cmstl-say-hello .cmstl-fw-xl");
const say_hello_lg = document.querySelector(".cmstl-say-hello .cmstl-fw-lg");
const say_hello_normal = document.querySelector(
  ".cmstl-say-hello .cmstl-fw-normal"
);
const say_hello_contact = document.querySelector(
  ".cmstl-say-hello .cmstl-contact-controls-wrapper"
);

const say_hello_arr = [
  say_hello_section,
  say_hello_xl,
  say_hello_lg,
  say_hello_normal,
  say_hello_contact,
];

// --------------- Observer

const generic_observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // --------------- what we do xl text
    if (entry.target === what_we_do_xl) {
      entry.target.classList.toggle(
        "cmstl-what-we-do-scroll-anim-xl",
        entry.isIntersecting
      );
      // if (entry.isIntersecting) generic_observer.unobserve(entry.target);
    }
    // --------------- what we do lg text
    if (what_we_do_lg_arr.includes(entry.target)) {
      entry.target.classList.toggle(
        "cmstl-what-we-do-scroll-anim-lg",
        entry.isIntersecting
      );

      // if (entry.isIntersecting) generic_observer.unobserve(entry.target);
    }
    // --------------- what we do normal text
    if (what_we_do_normal_arr.includes(entry.target)) {
      entry.target.classList.toggle(
        "cmstl-what-we-do-scroll-anim-normal",
        entry.isIntersecting
      );

      // if (entry.isIntersecting) generic_observer.unobserve(entry.target);
    }
    // --------------- Motto text
    if (entry.target === motto_lg) {
      entry.target.classList.toggle(
        "cmstl-motto-scroll-anim",
        entry.isIntersecting
      );

      if (entry.isIntersecting) generic_observer.unobserve(entry.target);
    }
    // --------------- Say hello text
    if (say_hello_arr.includes(entry.target)) {
      // Special Case (hide contact controls)
      if (entry.target === say_hello_section) {
        // hide contact controls
        fixed_controls_wrapper.classList.toggle(
          "cmstl-hide-fixed-controls",
          entry.isIntersecting
        );
      }

      entry.target.classList.toggle(
        "cmstl-say-hello-scroll-anim",
        entry.isIntersecting
      );

      if (entry.isIntersecting && entry.target !== say_hello_section)
        // unobserve everything except the 'say_hello_section'
        generic_observer.unobserve(entry.target);
    }
  });
});

// --------------- Add to observer

generic_observer.observe(what_we_do_xl);

what_we_do_lg_arr.forEach((entry) => {
  generic_observer.observe(entry);
});

what_we_do_normal_arr.forEach((entry) => {
  generic_observer.observe(entry);
});

generic_observer.observe(motto_lg);

say_hello_arr.forEach((entry) => {
  generic_observer.observe(entry);
});

/**
 *
 * ---- Modal Animation
 *
 *
 */

// set and track on resize a custom property that updates
// based on max(screenWidth, screenHeight) (use this property on the expanding-div transition)

window.addEventListener("resize", setSizePropExpandingDiv);

function setSizePropExpandingDiv() {
  const htmlElement = document.documentElement;
  const size = Math.max(htmlElement.clientHeight, htmlElement.clientWidth);

  // console.log(size);
  htmlElement.style.setProperty("--size", size);
}

setSizePropExpandingDiv(); // run the function in case page is reloaded

// ---------------------------------------------------- Elements that interact with modals

const body = document.querySelector("body"); // used to disable scrolling
const modal_menu = document.querySelector(".cmstl-modal-menu.cmstl-menu");
const modal_form = document.querySelector(".cmstl-modal-menu.cmstl-form");
const navbar = document.querySelector(".cmstl-nav-wrapper"); // hides
const expanding_div_menu = document.querySelector("#cmid-expanding-div-menu");
const expanding_div_form = document.querySelector("#cmid-expanding-div-form");

const elements_that_open_modal_menu = [
  document.querySelector(".cmstl-menu-toggle"),
];

const elements_that_open_modal_form = [
  ...document.querySelectorAll(".cmstl-mail"),
];

const elements_that_close_modal_menu = [
  document.querySelector(".cmstl-menu .cmstl-modal-close-btn"),
  ...document.querySelectorAll(".cmstl-modal-menu-wrapper a"),
];

const elements_that_close_modal_form = [
  document.querySelector(".cmstl-form .cmstl-modal-close-btn"),
  document.querySelector(".cmstl-modal-form-wrapper"),
];

// ---------------------------------------------------- Open and Close functions

const openModal = (e, open_elements, modal, expanding_div) => {
  if (open_elements.includes(e.target)) {
    expanding_div.classList.add("cmstl-expanding-div-expanded");

    body.style.overflow = "hidden";

    setTimeout(() => {
      modal.classList.remove("cmstl-hide");
      // navbar.classList.add("cmstl-hide");
    }, 300);
  }
};

const closeModal = (e, close_elements, modal) => {
  if (close_elements.includes(e.target)) {
    modal.classList.add("cmstl-hide");
    // navbar.classList.remove("cmstl-hide");

    body.style.overflow = "visible";

    setTimeout(() => {
      let expanding_div = document.querySelector(
        ".cmstl-expanding-div-expanded"
      );
      // console.log(expanding_div);
      expanding_div.classList.remove("cmstl-expanding-div-expanded");
    }, 50);
  }
};

// ---------------------------------------------------- Modal Menu

// ---- open modal menu

document.addEventListener("click", (e) => {
  openModal(e, elements_that_open_modal_menu, modal_menu, expanding_div_menu);
});

// ---- close modal menu

document.addEventListener("click", (e) => {
  closeModal(e, elements_that_close_modal_menu, modal_menu);
});

// ---------------------------------------------------- Modal Form

// ---- open modal form

document.addEventListener("click", (e) => {
  openModal(e, elements_that_open_modal_form, modal_form, expanding_div_form);
});

// ---- close modal form

document.addEventListener("click", (e) => {
  closeModal(e, elements_that_close_modal_form, modal_form);
});

/**
 *
 * ---- Form Logic
 *
 *
 */

/**
 *
 * ---- Add WPForm Container
 *
 *  - adds wpfrom container (created in WordPress) from hidden (cmstl-hide) with wpform containded inside
 *
 */

// const form_wrapper = document.querySelector("cmstl-modal-form-content-wrapper");
// const form_content_wrapper = document.querySelector(".cmstl-form-content");

// form_wrapper.appendChild(form_content_wrapper);
// form_content_wrapper.classList.remove("cmstl-hide");

/**
 *
 * ---- Background Parallax
 *
 *  - set up prop
 *
 */

window.addEventListener("scroll", setParallaxScrollProp);
window.addEventListener("resize", setParallaxScrollProp);

function setParallaxScrollProp() {
  const htmlElement = document.documentElement;
  // document.documentElement.scrollTop returns window.scrollY (special case of .scrollTop when it is the property of the root/html)
  const scrollFromTop = htmlElement.scrollTop;
  const windowHeight = window.innerHeight;
  const domHeight = document.body.offsetHeight;

  const percentScrolled = scrollFromTop / (domHeight - windowHeight);
  // console.log(percentScrolled * 100);
  htmlElement.style.setProperty("--parallax-scroll", percentScrolled * 100);
}

setParallaxScrollProp(); // run the function in case page is reloaded

/*
 * ---- NEUMORPHISM TYPO (three.js)
 *
 * Made with ThreeJS - Enjoy!
 *
 * Experimenting with neumorphism in typography.
 * Use cursor to move around the shiny effect.
 * On mobile touch + drag screen.
 *
 * #034 - #100DaysOfCode
 * By ilithya | 2020
 * https://www.ilithya.rocks/
 * https://twitter.com/ilithya_rocks
 */

/*

// const colorBg = "hotpink"; // #ff69b4
const colorBg = "rgba(13, 13, 13)";
// const colorTypo = "#ff49a4"; // dark pink
const colorTypo = "rgb(93, 155, 219)";
// const colorTypo = "rgb(94, 87,183)";

const nearDist = 0.1;
// const nearDist = 100;
const farDist = 10000;
// const farDist = 1000;

// Size of text depending on screen size (only works on refresh, not responsive to resizing) (CUSTOM)
const mq_text_size = window.matchMedia("(max-width: 650px)");
let text_size = 75;
if (mq_text_size.matches) text_size = 110;
// (CUSTOM)

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  // 75, // text size, replaced by variable below
  text_size,
  window.innerWidth / window.innerHeight,
  nearDist,
  farDist
);
// camera.position.z = Math.round(farDist / 20);
camera.position.z = Math.round(farDist / 15);

const renderer = new THREE.WebGLRenderer({ antialias: true });

// responsive size (CUSTOM)
const content_max_width = 1530;
window.addEventListener("resize", setRendererSize);
function setRendererSize() {
  const width = Math.min(window.innerWidth / 2, content_max_width / 2);
  const height = window.innerHeight / 2;

  // const mql = window.matchMedia("(max-width: 767px)");
  // if (mql.matches) renderer.setSize(width * 2, height);
  // else
  renderer.setSize(width * 2, height);
}
setRendererSize();
// (CUSTOM)

renderer.setClearColor(colorBg);
renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector("#canvas-wrapper").appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffdffd, 1);
light.position.set(-15, 0, 70);
scene.add(light);

// CREATE TYPOGRAPHY
const group = new THREE.Group();
const typoLoader = new THREE.FontLoader();
const createTypo = (font) => {
  const word = `We're
Kaizen
Wave`;
  const typoSize = 120;
  // const typoHeight = Math.round(typoSize / 4);
  const typoHeight = Math.round(typoSize / 6);
  const typoProperties = {
    font: font,
    size: typoSize,
    // height: 0,
    height: typoHeight,
    curveSegments: 20,
    bevelEnabled: false,
    bevelThickness: 0.1,
    bevelSize: 0.5,
    bevelOffset: 0,
    bevelSegments: 10,
  };
  const textMesh = new THREE.Mesh();
  textMesh.geometry = new THREE.TextBufferGeometry(word, typoProperties);
  textMesh.material = new THREE.MeshStandardMaterial({
    color: colorBg,
    emissive: colorTypo,
    roughness: 0,
    metalness: 1,
    // side: THREE.DoubleSide,
    transparent: true,
    // opacity: 0.7,
    opacity: 1,
  });

  textMesh.geometry.computeBoundingBox();
  textMesh.geometry.boundingBox.getCenter(textMesh.position).multiplyScalar(-1);

  textMesh.matrixAutoUpdate = false;
  textMesh.updateMatrix();

  group.add(textMesh);
};
typoLoader.load(
  "https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",
  createTypo
);
scene.add(group);

// CREATE PART OF THE MOUSE/TOUCH OVER EFFECT
let mouseX = 0;
let mouseY = 0;
const mouseFX = {
  windowX: Math.round(window.innerWidth / 2),
  windowY: Math.round(window.innerHeight / 2),
  coordinates: function (cX, cY) {
    mouseX = cX - this.windowX;
    mouseY = cY - this.windowY;
  },
  onMouseMove: function (e) {
    mouseFX.coordinates(e.clientX, e.clientY);
  },
  onTouchMove: function (e) {
    const touchX = e.changedTouches[0].clientX;
    const touchY = e.changedTouches[0].clientY;
    mouseFX.coordinates(touchX, touchY);
  },
};

// update windowX and windowY when resizing (CUSTOM)
window.addEventListener("resize", setMouseFX);
function setMouseFX() {
  mouseFX.windowX = Math.round(window.innerWidth / 2);
  mouseFX.windowY = Math.round(window.innerHeight / 2);
}
// (CUSTOM)

document.addEventListener("mousemove", mouseFX.onMouseMove);
document.addEventListener("touchmove", mouseFX.onTouchMove);

// RENDERING
const render = () => {
  const ct = 0.05;
  // const ct = 0.01;
  // const ct = 0.5;
  camera.position.x += (mouseX - camera.position.x) * ct;
  camera.position.y += (mouseY - camera.position.y) * ct;
  camera.lookAt(scene.position);

  const r = Date.now() * 0.0018;
  const rot = Math.sin(r) * 0.12;
  group.rotation.x = rot * 1.4;
  group.rotation.y = rot;

  renderer.render(scene, camera);

  requestAnimationFrame(render);
};
render();

*/
