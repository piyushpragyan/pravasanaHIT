(function () {
    // to hide the loader
    window.addEventListener("load", function () {
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    });

    document.addEventListener("DOMContentLoaded", function () {

        let expandButton = document.querySelector(".event-utsav button");
        console.log(expandButton);
        let eventsExpander = document.querySelector(".expanding");

        expandButton.addEventListener("click", function() {
            eventsExpander.classList.toggle("events-expand");
            if(eventsExpander.classList.contains("events-expand"))
                expandButton.innerHTML = "Expand ↓";
            else
            expandButton.innerHTML = "Collapse ↑";
        });

                /* ANIMATION DEFINITIONS */

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