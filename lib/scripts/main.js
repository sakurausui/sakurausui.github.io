const imageViewer = {
    container: document.getElementById("viewer"),
    image: document.querySelector("#viewer img")
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
        editViewerVisual("flex", 1);
        imageViewer.image.src = imageNode.src;
        window.onmouseup = imageNode.ontouchend = (e) => {
            e = e || event;
            e.preventDefault();
            editViewerVisual("none", 0);
        }
    }
});