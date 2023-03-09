const api = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/"

const getData = async () => {
    const response = await fetch(api);
    const data = await response.json();
    printData(data)
}

const printData = async (data) => {
    const score = document.querySelector("#result")
    data.result.forEach((element) => {
        score.innerHTML += `
        <p>${element.user} : ${element.score}</p>`
    });
}

getData()