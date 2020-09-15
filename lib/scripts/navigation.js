const anchors = {
    // "title": "id",
    "Me": "about",
    "Overlays": "overlays",
    "Panels": "panels",
    "Commission": "commission",
    "Contact": "contact"
}
const nav = document.querySelector(".main .nav div");

(function() {
    const anchorTitles = Object.keys(anchors);
    const anchorIds = Object.values(anchors);

    nav.innerHTML = "";
    for (var i=0; i<anchorIds.length; i++) {
        let anchor = document.createElement("span");
        anchor.innerHTML = anchorTitles[i];
        nav.appendChild(anchor);

        let targetEle = document.getElementById(anchorIds[i]);
        anchor.onclick = (e) => {
            if (targetEle) {
                window.scrollTo({
                    top: (targetEle.getBoundingClientRect().top + window.pageYOffset - 40),
                    behavior: "smooth"
                })
            } else alert("Cannot locate section.");
        }
    }
})();