function hideResults() {
    document.getElementById("rust").setAttribute("class", "hidden");
    document.getElementById("python").setAttribute("class", "hidden");
    document.getElementById("javaScript").setAttribute("class", "hidden");
    document.getElementById("errorMessage").setAttribute("class", "hidden");
};

window.onload = function () {
    document.querySelector("form").onsubmit = function (event) {
        event.preventDefault();
        hideResults();
        const q1 = document.querySelector("input#q1").checked;
        const q2 = document.querySelector("input#q2").checked;
        const q3 = document.querySelector("input#q3").checked;

        if (q1 && q2 && q3) {
            document.getElementById("python").removeAttribute("class");
        } else if ((q1 && q2) || (q2 && q3) || (q1 && q3)) {
            document.getElementById("javaScript").removeAttribute("class");
        } else if (q1 || q2 || q3) {
            document.getElementById("rust").removeAttribute("class");
        } else {
            document.getElementById("errorMessage").removeAttribute("class");
        };
    };
};