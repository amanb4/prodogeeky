
// **************************************************************

// CODE FOR PARRALAX EFFECT IN HOME SECTION
const translateX = document.querySelectorAll(".translateX");
const translateY = document.querySelectorAll(".translateY");
window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset;
    translateX.forEach((element) => {
        let speed = element.dataset.speed;
        element.style.transform = `translateX(${scroll * speed}px)`;
    });
    translateY.forEach((element) => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });
});
// ****************************************************************

// CODE FOR CHANGING NAVBAR STYLE ON SCROLL DOWN
const header = document.querySelector(".header-glass");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.remove("active");
    }
    if (window.scrollY <= 50) {
        header.classList.add("active");
    }
});
// ****************************************************************


