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

// -------------------------------------------------------------------- Support Section 
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Chat live algorithm.

know = {
    "hi": "hello, thank you for messeging, How can I help you?",
    "hello": "hello, thank you for messeging, How can I help you?",
    "I do not feel well": "right, can you give us more detail please",
    "i do not feel well": "right, why do you think, you are not feeling well",
    "i fell a lump in my chest:": " ok, what else"
};

function talk() {
    var user = document.getElementById("userBox").value;
    document.getElementById("userBox").value = "";
    document.getElementById("chatLog").innerHTML += user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML += know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML += "I don't understand ...<br>";
    }
}

// -------------------------------------------------------------------- Copyright

function copyrightYear() {
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("copyright").innerHTML = y;
}

copyrightYear();
