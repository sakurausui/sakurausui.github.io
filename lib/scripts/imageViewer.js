const imageViewer = {
    container: document.getElementById("viewer"),
    image: document.querySelector("#viewer img"),
    activated: false
}

function editViewerVisual(display, opacity) {
    Object.assign(imageViewer.container.style, {
        "display": display,
        "opacity": opacity
    });
}

editViewerVisual("none", 0);

const contentImages = document.querySelectorAll("img.content-image");
contentImages.forEach(imageNode => {
    imageNode.setAttribute("draggable", "false");
    imageNode.oncontextmenu = (e) => {
        e = e || event;
        e.preventDefault();
    }
    imageNode.onmousedown = imageNode.ontouchstart = (e) => {
        imageViewer.activated = true;
        let plan = window.setTimeout(function() {
            if (!imageViewer.activated) return;
            editViewerVisual("flex", 1);
            imageViewer.image.src = imageNode.src;
        }, 500);
        window.onmouseup = imageNode.ontouchend = (e) => {
            imageViewer.activated = false;
            window.clearTimeout(plan);
            editViewerVisual("none", 0);
        }
    }
});