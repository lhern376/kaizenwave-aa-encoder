/**
 *
 * ---- Background-image movement ----
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
    console.log(x);
    elem.style.backgroundPosition = x;
  }
})();

/**
 *
 * ---- Animate logo on scroll ----
 *
 * - animate logo at 5% of dom height (NOTE: adjust percent as the page grows in content)
 *
 */

const logoText = document.querySelector(".cmstl-site-logo-text");
const logo = document.querySelector(".cmstl-site-logo");

window.addEventListener("scroll", () => {
  let pixelsFromTop = window.scrollY;
  let domHeight = document.body.offsetHeight;

  // animate logo at 5% of dom height (NOTE: adjust percent as the page grows in content)

  if (pixelsFromTop / domHeight >= 0.05) {
    logoText.classList.add("cmstl-site-logo-text-shrink");
    logo.classList.remove("cmstl-invisible");
  } else {
    logoText.classList.remove("cmstl-site-logo-text-shrink");
    logo.classList.add("cmstl-invisible");
  }
});
