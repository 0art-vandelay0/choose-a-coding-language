function hideResults() {
    document.getElementById("rust").setAttribute("class", "hidden");
    document.getElementById("python").setAttribute("class", "hidden");
    document.getElementById("javaScript").setAttribute("class", "hidden");
    document.getElementById("errorMessage").setAttribute("class", "hidden");
    // document.getElementById("response-container").setAttribute("class", "hidden");
}

function handleRadio(event) {
    event.preventDefault();
    hideResults();
    const q1 = document.querySelector("#q1:checked");
    const q2 = document.querySelector("#q2:checked");
    const q3 = document.querySelector("#q3:checked");
    const q4 = document.querySelector("#q4:checked");
    const q5 = document.querySelector("#q5:checked");

    if (!q1 && !q2 && !q3 && !q4 && !q5) {
        // document.getElementById("response-container").removeAttribute("class");
        document.getElementById("errorMessage").removeAttribute("class");
    } else {
        if (q1 || q5) {
            // document.getElementById("response-container").removeAttribute("class");
            document.getElementById("python").removeAttribute("class");
        } else if (q2 || q4) {
            // document.getElementById("response-container").removeAttribute("class");
            document.getElementById("javaScript").removeAttribute("class");
        } else if (q3) {
            // document.getElementById("response-container").removeAttribute("class");
            document.getElementById("rust").removeAttribute("class");
        };
    };
};


window.addEventListener("load", function () {
    document.getElementById("subButton").addEventListener("click", handleRadio);
    hideResults();
});
