
document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // FADE-IN ANIMATION
    // ===============================

    const fadeElements = document.querySelectorAll(".fade-in");

    function showElements() {
        fadeElements.forEach(function (element) {
            const position = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (position < screenHeight - 80) {
                element.classList.add("show");
            }
        });
    }

    showElements();

    window.addEventListener("scroll", showElements);

    // ===============================
    // HEART CLICK EFFECT
    // ===============================

    document.querySelectorAll(".heart, .footer-heart, .letter-heart")
        .forEach(function (heart) {

            heart.style.cursor = "pointer";
            heart.style.transition = "transform 0.3s ease";

            heart.addEventListener("click", function () {
                heart.style.transform = "scale(1.3)";

                setTimeout(function () {
                    heart.style.transform = "scale(1)";
                }, 300);
            });
        });

    // ===============================
    // BUTTON CLICK EFFECT
    // ===============================

    const buttons = document.querySelectorAll(".btn, .main-button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.style.transform = "scale(0.95)";

            setTimeout(function () {
                button.style.transform = "";
            }, 150);
        });
    });

    // ===============================
    // IMAGE LOADING EFFECT
    // ===============================

    document.querySelectorAll("img").forEach(function (img) {
        img.addEventListener("error", function () {
            img.style.backgroundColor = "#ffe5ed";
            img.style.minHeight = "180px";
            img.alt = "Friendship memories ❤️";
        });
    });

});
