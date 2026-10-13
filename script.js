// ==============================
// MOBILE MENU
// ==============================

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");
}


// ==============================
// CLOSE MENU AFTER CLICKING LINK
// ==============================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document.querySelector(".nav-links").classList.remove("active");

    });

});


// ==============================
// SIMPLE SCROLL ANIMATION
// ==============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.1
    }
);


sections.forEach(function(section) {

    observer.observe(section);

});
