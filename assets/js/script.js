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
