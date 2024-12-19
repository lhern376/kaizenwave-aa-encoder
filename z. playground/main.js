document.querySelector("button").addEventListener("click", (e) => {
  const expandingElem = document.querySelector(".expanding-elem");
  let isActive = expandingElem.dataset.open;
  console.log("was" + isActive);

  if (isActive === "false") {
    expandingElem.dataset.open = "true";
  } else {
    expandingElem.dataset.open = "false";
  }
});

document.querySelector(".expanding-elem").addEventListener("click", (e) => {
  let isActive = e.target.dataset.open;
  console.log("was" + isActive);

  if (isActive === "true") {
    // e.target.classList.add(".unexpand");
    // e.target.dataset.open = "false";
    e.target.classList.add("reverse-animation");
  }
});

// checking intersection observer

const observer = new IntersectionObserver((entries) => {
  const entry = entries[0];
  entry.target.classList.toggle("js-scroll-anim", entry.isIntersecting);
});

observer.observe(document.querySelector(".elem"));
