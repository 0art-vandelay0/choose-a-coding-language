function hideResults() {
    document.getElementById("rust").setAttribute("class", "hidden");
    document.getElementById("python").setAttribute("class", "hidden");
    document.getElementById("javaScript").setAttribute("class", "hidden");
    document.getElementById("errorMessage").setAttribute("class", "hidden");
};
    
function handleRadio(event) {
    event.preventDefault();
    const q1 = document.querySelector("input[name='q1']:checked");
    const q2 = document.querySelector("input[name='q2']:checked");
    const q3 = document.querySelector("input[name='q3']:checked");
    const q4 = document.querySelector("input[name='q4']:checked");
    const q5 = document.querySelector("input[name='q5']:checked");
    if (!q1 && !q2 && !q3 && !q4 && !q5) {
        document.getElementById("errorMessage").removeAttribute("class");
    } else {
        if (q1 || q5) {
        document.getElementById("python").removeAttribute("class");
        } else if (q2 || q4) {
        document.getElementById("javaScript").removeAttribute("class");
        } else {
        document.getElementById("rust").removeAttribute("class");
        }
    }
}

window.addEventListener("load", function() {
    document.getElementById("languageSurvery").addEventListener("submit", handleRadio);
    hideResults();
});

