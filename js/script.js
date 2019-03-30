(function () {
    // to hide the loader
    setTimeout(function () {
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    }, 4500);

    document.addEventListener("DOMContentLoaded", function () {

            /* ANIMATION DEFINITIONS */

            let navbutts = document.getElementById("nav-butts");
            let navbutt = document.getElementById("top-button");
            navbutt.addEventListener("click", () => {
                navbutts.classList.toggle("hide-nav-butt");
            });

            // initializing scroll magic
            let controller = new ScrollMagic.Controller();

            let aboutH = new ScrollMagic.Scene({
                triggerElement : '#abt-head'
            })
            .setClassToggle('#abt-head', 'fade-in')
            .addTo(controller);

            let aboutC = new ScrollMagic.Scene({
                triggerElement : '#abt-cont'
            })
            .setClassToggle('#abt-cont', 'fade-in')
            .addTo(controller);

            let aboutG = new ScrollMagic.Scene({
                triggerElement : '#abt-gall'
            })
            .setClassToggle('#abt-gall', 'fade-in')
            .addTo(controller);

            let ourC = new ScrollMagic.Scene({
                triggerElement : '#our-coll'
            })
            .setClassToggle('#our-coll', 'fade-in')
            .addTo(controller);


        /* END OF ANIMATION DEFINITIONS */

    });

})();