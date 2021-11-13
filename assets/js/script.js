

/**
 * Detect browser width to update the field of view of both Model-viewer elements
 * */

let innerWidth = window.innerWidth;
const modelViewer = document.querySelectorAll('model-viewer');
console.log(modelViewer);

if (innerWidth < "992") {
    for (let el of modelViewer) {
        el.setAttribute('field-of-view', '45deg');
    }
};

// -------------------------------------------------------------------- Copyright

function copyrightYear() {
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("copyright").innerHTML = y;
}

copyrightYear();