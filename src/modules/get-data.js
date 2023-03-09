const getData = async () => {
    const response = await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0z40Bh09IRaWt8MdXyq4/scores/");
    const data = await response.json();
    console.log(data)
    printData(data)
}

const printData = (data) => {
    const score = document.querySelector("#result")
    data.result.forEach((element) => {
        score.innerHTML += `
        <table>
        <tr><td>${element.user} : ${element.score}</td></tr>
        </table>
        `
    });
}
getData()

const refresh = () => {
    const reload = document.querySelector("#refresh")
    reload.addEventListener('click', () => {
        location.reload();
    })
};
refresh()