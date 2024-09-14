const shareBtn = document.getElementById("share-btn");
const popupContainer = document.getElementById("popup-contain");

shareBtn.addEventListener("click", function () {
  const isHidden = popupContainer.getAttribute("aria-hidden") === "true";
  if (isHidden) {
    popupContainer.classList.add("active");
    this.classList.add("active");
    popupContainer.setAttribute("aria-hidden", "false");
  } else {
    popupContainer.classList.remove("active");
    this.classList.remove("active");
    popupContainer.setAttribute("aria-hidden", "true");
  }
});
