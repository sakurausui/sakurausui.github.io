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
        e = e || event;
        e.preventDefault();
        imageViewer.activated = true;
        window.setTimeout(function() {
            if (!imageViewer.activated) return;
            editViewerVisual("flex", 1);
            imageViewer.image.src = imageNode.src;
        }, 450);
        window.onmouseup = imageNode.ontouchend = (e) => {
            e = e || event;
            e.preventDefault();
            imageViewer.activated = false;
            editViewerVisual("none", 0);
        }
    }
});