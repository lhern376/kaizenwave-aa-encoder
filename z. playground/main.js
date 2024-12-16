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
    e.target.dataset.open = "false";
  }
});
