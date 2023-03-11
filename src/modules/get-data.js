const getData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0z40Bh09IRaWt8MdXyq4/scores/');
  const data = await response.json();
  /* eslint-disable no-use-before-define */
  printData(data);
};

const printData = (data) => {
  const score = document.querySelector('#result');
  data.result.forEach((element) => {
    score.innerHTML += `
        <tr><td>${element.user}</td> <td>${element.score}</td></tr>
        `;
  });
};
getData();

const refresh = () => {
  const reload = document.querySelector('#refresh');
  reload.addEventListener('click', () => {
    /* eslint-disable no-restricted-globals */
    location.reload();
  });
};
refresh();
