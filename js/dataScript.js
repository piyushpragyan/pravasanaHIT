(function () {

    // to hide the loader
    setTimeout(function () {
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    }, 2500);

    document.addEventListener("DOMContentLoaded", function () {

        let navbutts = document.getElementById("nav-butts");
        let navbutt = document.getElementById("top-button");
        navbutt.addEventListener("click", () => {
            navbutts.classList.toggle("hide-nav-butt");
        });

        function getTemplate (obj) {

            if(obj.half == "true") {
                return `<div class="card-50">
                            <center>
                                <div class="img-cont">
                                    <img src="${obj.img}" alt="">
                                </div>
                                <h1>${obj.name}</h1>
                                <h2>${obj.post}</h2>
                                <h3>${obj.year}</h3>
                                <hr>
                                <p class="team-links">
                                    <a href="${obj.facebook}" target="_blank"><i class="fab fa-facebook"></i></a>
                                    &nbsp;
                                    <a href="${obj.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
                                    &nbsp;
                                    <a href="${obj.linkedIn}" target="_blank"><i class="fab fa-linkedin"></i></a>
                                </p>
                            </center>
                        </div>`;
            }
            return `<div class="card">
                        <center>
                            <div class="img-cont">
                                <img src="${obj.img}" alt="">
                            </div>
                            <h1>${obj.name}</h1>
                            <h2>${obj.post}</h2>
                            <h3>${obj.year}</h3>
                            <hr>
                            <p class="team-links">
                                <a href="${obj.facebook}" target="_blank"><i class="fab fa-facebook"></i></a>
                                &nbsp;
                                <a href="${obj.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
                                &nbsp;
                                <a href="${obj.linkedIn}" target="_blank"><i class="fab fa-linkedin"></i></a>
                            </p>
                        </center>
                    </div>`;
        }

        function placeData(fileName, id) {
            fetch(fileName)
            .then(res => res.json())
            .then(data => {
                let coordinators = data;
                for(let i = 0; i < coordinators.length; i++) {
                    let cardTemplate = getTemplate(coordinators[i]);
                    let eachCard = document.querySelector(id);
                    eachCard.innerHTML += cardTemplate;
                }
            });
        }

        // teacher in-charge
        placeData('./data/teachers.json', "#teacher-incharge");

        // logistics
        placeData('./data/logistics.json', "#logistics");

        // creative head
        placeData('./data/creative.json', "#creative-head");

        // photographers
        placeData('./data/photographers.json', "#photographers");

        // web team
        placeData('./data/web-team.json', "#webteam");

        // convener
        placeData('./data/convenor.json', "#convener");

        // volun-head
        placeData('./data/volunteer-head.json', "#volun-head");

        // camp amb
        placeData('./data/campus-amb.json', "#camp-amb");

        // co-ordinators
        placeData('./data/coordinator.json', "#co-ordinators");

    });

})();