// -------------------------------------------------------------------- Globals

const interactiveButton = document.querySelector('#interactive-controls');
const rotateButton = document.querySelector('#auto-rotate');
let innerWidth = window.innerWidth;
const modelViewer = document.querySelectorAll('model-viewer');

// -------------------------------------------------------------------- Interactive

interactiveButton.addEventListener("click", () => {
    for (let el of modelViewer) {
        if (el.hasAttribute('camera-controls')) {
            el.removeAttribute('camera-controls');
            el.style.pointerEvents = 'none';
        } else {
            el.setAttribute('camera-controls', '');
            el.style.pointerEvents = 'auto';
        }
    };
});

rotateButton.addEventListener("click", () => {
    for (el of modelViewer) {
        if (el.hasAttribute('auto-rotate')) {
            el.removeAttribute('auto-rotate');
        } else {
            el.setAttribute('auto-rotate', '');
        }
    };
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

// -------------------------------------------------------------------- Navbar 

let burgerIcon = document.getElementById("nav-burger");
let closeIcon = document.getElementById("close-icon");
let navbar = document.getElementById("menu");

burgerIcon.addEventListener("click", toggleNavbar);
closeIcon.addEventListener("click", toggleNavbar);

function toggleNavbar() {
    if (navbar.classList.contains("navbar-toggle")) {
        navbar.classList.remove("navbar-toggle");
    } else {
        navbar.classList.add("navbar-toggle");
    }
}

// -------------------------------------------------------------------- Copyright

function copyrightYear() {
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("copyright").innerHTML = y;
}

copyrightYear();
