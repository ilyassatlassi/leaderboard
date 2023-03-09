 export const postData = async (obj) => {
    
    const content = await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0z40Bh09IRaWt8MdXyq4/scores/", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: obj.name,
        score: obj.score,
      }),
    });
    const afterContent = await content.json();
    return afterContent;
  };