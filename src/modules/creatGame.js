
const myBody = { name: 'My cool new game' };
const createGame = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST',
      body: JSON.stringify(myBody), 
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const res = await response.json();
  console.log(myJson)
  return res;
};

createGame();
console.log(createGame())
