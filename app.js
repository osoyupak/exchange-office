const tlInput = document.getElementById("tlInput");
const btn = document.getElementById("btn");


eventlisteners();

function eventlisteners() {
    btn.addEventListener("click", change)
}

function change() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "http://www.floatrates.com/daily/try.json", true);

    xhr.onload = function () {
        if(xhr.status==200) {
            const response = JSON.parse(this.responseText);
            const rate = Number(response.eur.rate);
            const amount = Number(tlInput.value);

            document.getElementById("euroInput").value= (amount*rate).toFixed(2);
        }
    }

    xhr.send();
}

