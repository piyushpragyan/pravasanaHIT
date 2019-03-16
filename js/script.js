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
        });
    });

})();