// Index

//  * ---- Background-image movement

//  * ---- Animate logo on scroll

//  * ---- Text Scroll Animation: Hero text

//  * ---- Flicker Effects

//  * ---- Background Movement Effect

//  * ---- Text Scroll Animations (scroll triggered, intersectionObserver)

/* ------------------------------------------------------------------------------------------------------------------------------------------ */

/**
 *
 * ---- Background-image movement
 *
 * - single image, single value
 *
 */

(function () {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector(".cmstl-background-image");
  // Magic happens here
  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;

    let x = `${_depth1}`;
    // console.log(x);
    elem.style.backgroundPosition = x;
  }
})();

/**
 *
 * ---- Animate logo on scroll
 *
 * - animate logo at 5% of dom height (NOTE: adjust percent as the page grows in content)
 *
 */

const targetRatio = 1 / 3;

const logoText = document.querySelector(".cmstl-site-logo-text");
const logo = document.querySelector(".cmstl-site-logo");

window.addEventListener("scroll", () => {
  let pixelsFromTop = window.scrollY;
  // let domHeight = document.body.offsetHeight;
  let screenHeight = document.documentElement.clientHeight;

  // animate logo at 40% of screen height (NOTE: adjust percent as the page grows in content)

  if (pixelsFromTop / screenHeight >= targetRatio) {
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
 */

window.addEventListener("scroll", setScrollProp);
window.addEventListener("resize", setScrollProp);

function setScrollProp() {
  const htmlElement = document.documentElement;
  const currentRatio = Math.min(
    htmlElement.scrollTop / htmlElement.clientHeight,
    targetRatio
  );
  console.log(currentRatio * 100);
  htmlElement.style.setProperty("--scroll", currentRatio * 100); // gives a value from 0 - 20, targetRatio = 0.2
}

setScrollProp();

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
    }, 100); // Interval time in milliseconds (adjust as needed)

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

// ---------------------------------------------------- Hey there section text

// --------------- xl text

const hey_there_observer_xl = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];

    entry.target.classList.toggle(
      "cmstl-hey-there-scroll-anim-xl",
      entry.isIntersecting
    );

    if (entry.isIntersecting) hey_there_observer_xl.unobserve(entry.target);
  },
  { rootMargin: "-50px" }
);

const hey_there_xl = document.querySelector(".cmstl-hey-there .cmstl-fw-xl");

hey_there_observer_xl.observe(hey_there_xl);

// --------------- other text

const hey_there_observer_other = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle(
        "cmstl-hey-there-scroll-anim-other",
        entry.isIntersecting
      );

      if (entry.isIntersecting)
        hey_there_observer_other.unobserve(entry.target);
    });
  },
  { rootMargin: "-50px" }
);

const hey_there_other_arr = document.querySelectorAll(
  ".cmstl-hey-there .cmstl-fw-lg"
);

hey_there_other_arr.forEach((entry) => {
  hey_there_observer_other.observe(entry);
});

// ---------------------------------------------------- What we do section text

// --------------- xl text

const what_we_do_observer_xl = new IntersectionObserver((entries) => {
  const entry = entries[0];

  entry.target.classList.toggle(
    "cmstl-what-we-do-scroll-anim-xl",
    entry.isIntersecting
  );

  // if (entry.isIntersecting) what_we_do_observer_xl.unobserve(entry.target);
});

const what_we_do_xl = document.querySelector(".cmstl-what-we-do .cmstl-fw-xl");

what_we_do_observer_xl.observe(what_we_do_xl);

// --------------- lg text

const what_we_do_observer_lg = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle(
      "cmstl-what-we-do-scroll-anim-lg",
      entry.isIntersecting
    );

    // if (entry.isIntersecting) what_we_do_observer_lg.unobserve(entry.target);
  });
});

const what_we_do_lg_arr = document.querySelectorAll(
  ".cmstl-what-we-do .cmstl-fw-lg"
);

what_we_do_lg_arr.forEach((entry) => {
  what_we_do_observer_lg.observe(entry);
});

// --------------- normal text

const what_we_do_observer_normal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle(
      "cmstl-what-we-do-scroll-anim-normal",
      entry.isIntersecting
    );

    // if (entry.isIntersecting) what_we_do_observer_normal.unobserve(entry.target);
  });
});

const what_we_do_normal_arr = document.querySelectorAll(
  ".cmstl-what-we-do .cmstl-fw-normal"
);

what_we_do_normal_arr.forEach((entry) => {
  what_we_do_observer_normal.observe(entry);
});

// ---------------------------------------------------- Motto section text

const motto_observer = new IntersectionObserver((entries) => {
  const entry = entries[0];

  entry.target.classList.toggle(
    "cmstl-motto-scroll-anim",
    entry.isIntersecting
  );

  if (entry.isIntersecting) motto_observer.unobserve(entry.target);
});

motto_observer.observe(document.querySelector(".cmstl-motto .cmstl-fw-lg"));

// ---------------------------------------------------- Say hello section text

const say_hello_observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // if (entry.isIntersecting) console.log(entry.target);

    entry.target.classList.toggle(
      "cmstl-say-hello-scroll-anim",
      entry.isIntersecting
    );

    if (entry.isIntersecting) say_hello_observer.unobserve(entry.target);
  });
});

const say_hello_xl = document.querySelector(".cmstl-say-hello .cmstl-fw-xl");
const say_hello_lg = document.querySelector(".cmstl-say-hello .cmstl-fw-lg");
const say_hello_normal = document.querySelector(
  ".cmstl-say-hello .cmstl-fw-normal"
);
const say_hello_contact = document.querySelector(
  ".cmstl-say-hello .cmstl-contact-controls-wrapper"
);

const say_hello_arr = [
  say_hello_xl,
  say_hello_lg,
  say_hello_normal,
  say_hello_contact,
];

say_hello_arr.forEach((entry) => {
  say_hello_observer.observe(entry);
});
