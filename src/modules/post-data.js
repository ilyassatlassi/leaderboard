const Name = document.querySelector('#name');
const Score = document.querySelector('#score');

const postData = async () => {
  const myResult = {
    user: Name.value,
    score: Score.value,
  };

  const content = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0z40Bh09IRaWt8MdXyq4/scores/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(myResult),
  });
  const afterContent = await content.json();
  return afterContent;
};

const send = () => {
  document.querySelector('#submitBtn').addEventListener('click', (event) => {
    event.preventDefault();
    postData();
    Name.value = '';
    Score.value = '';
  });
};
send();
