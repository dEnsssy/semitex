// const windowOuterWidth = window.outerWidth;
// console.log(windowOuterWidth);

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function toggleTab(evt, tabName) {
    let tabcontent = document.getElementById(tabName);
    let buttonColor = tabName + "b";
    let button = document.getElementById(buttonColor);
    if (tabcontent.style.display === "block") {
        tabcontent.style.display = "none";
        button.classList.remove("specColor");
    } else {
        tabcontent.style.display = "block";
        button.classList.add("specColor");
    }
}
