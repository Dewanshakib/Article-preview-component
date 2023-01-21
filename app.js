const shareIcon = document.querySelector(".s-icon");
const social_icons_div = document.querySelector(".social_icons_div");
const share_icons_div_m = document.querySelector(".share_icons_div_m");
const infoPara = document.querySelector(".info_para")


shareIcon.addEventListener("click", () => {
  social_icons_div.classList.toggle("active");
  share_icons_div_m.classList.toggle("show")
});

infoPara.addEventListener("click", () => {
    share_icons_div_m.classList.remove("show") // * If anyone click on .info_para div then the .share_icons_div_m will be removed
})