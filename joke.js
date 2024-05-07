let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");
//let El=document.getElementById("");

let options = {
    method: "GET"
}

function randomJoke() {
    spinnerEl.classList.remove("d-none");
    jokeTextEl.classList.add("d-none");

    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let jokeText = jsonData.value;

            spinnerEl.classList.add("d-none");
            jokeTextEl.classList.remove("d-none");

            jokeTextEl.textContent = jokeText;
        });
}

jokeBtnEl.addEventListener("click", randomJoke)