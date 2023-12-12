const openButton = document.querySelector(".open-btn");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector("#closeDialogBtn");

const menuButton = document.getElementById("menuButton");
const menuContent = document.getElementById("menuContent");

menuButton.addEventListener("click", function () {
  if (menuContent.style.display === "none") {
    menuContent.style.display = "block";
    menuButton.setAttribute("aria-expanded", "true");
  } else {
    menuContent.style.display = "none";
    menuButton.setAttribute("aria-expanded", "false");
  }
});

openButton.addEventListener("click", function () {
  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  modal.focus();
});

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  editButton.focus();
  dialog.close();
});
