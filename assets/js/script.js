// -------------------------------------------------------------------- Globals

const interactiveButton = document.querySelector('#interactive-controls');
const rotateButton = document.querySelector('#auto-rotate');
let innerWidth = window.innerWidth;
const modelViewer = document.querySelectorAll('model-viewer');

// -------------------------------------------------------------------- Interactive

interactiveButton.addEventListener("click", () => {
    for (let el of modelViewer) {
        el.setAttribute('camera-controls', '');
        el.style.pointerEvents = 'auto';
    }
});

rotateButton.addEventListener("click", () => {
    for (el of modelViewer) {
        el.removeAttribute('auto-rotate');
    }
});

// -------------------------------------------------------------------- Awareness

/**
 * Detect browser width to update the field of view of both Model-viewer elements
 * */

if (innerWidth < "992") {
    for (let el of modelViewer) {
        el.setAttribute('field-of-view', '45deg');
    }
};

// -------------------------------------------------------------------- Header 

function openNavBar() {
    document.getElementById("menu").style.height = "100%";
}

function closeNavBar() {
    document.getElementById("menu").style.height = "0%";
}

// -------------------------------------------------------------------- Copyright

function copyrightYear() {
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("copyright").innerHTML = y;
}

copyrightYear();
