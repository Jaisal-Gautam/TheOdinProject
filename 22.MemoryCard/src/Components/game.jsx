import { useEffect, useState } from "react";

export default function Game() {
  const [gif, setGif] = useState([]);
  const [urls, setUrls] = useState([]); // to reset gifs later
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameContinue, setGameContinue] = useState(true);
  const [memory, setMemory] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  // Reset game state
  function resetGame() {
    setMemory([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    setCurrentScore(0);
    setGif(urls); // reset gifs to original
    setGameContinue(true);
  }

  // Update best score only if current is greater
  function bestScoreUpdate() {
    setBestScore(prev => (currentScore > prev ? currentScore : prev));
  }

  // Fetch gif data on load
  useEffect(() => {
    fetch(
      "https://api.giphy.com/v2/emoji?api_key=VIVuVLA5yR7Al46TmpnGNc6igzNoQykW&limit=10&offset=0"
    )
      .then((res) => res.json())
      .then((data) => {
        const gifItems = data.data.map((item) => item);
        setGif(gifItems);
        setUrls(gifItems); // save for resetting
      });
  }, []);

  // Handle card click
  function btnClick(id) {
    if (memory.includes(id) && memory[0] === id) {
      // correct click
      setMemory(prevMemory => prevMemory.slice(1));
      setCurrentScore(prev => prev + 1);

      // shuffle cards
      const shuffled = [...gif];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setGif(shuffled);
    } else {
      // wrong click
      bestScoreUpdate(); // important: call before reset
      setGameContinue(false); // show play again or end state
    }
  }

  // Map gif buttons
  const gifs = gif.map((gif) => {
    return (
      <button key={gif.emoji_group_id} onClick={() => btnClick(gif.emoji_group_id)}>
        <img src={gif.images.downsized.url} alt="emoji" />
      </button>
    );
  });

  return (
    <>
      <div className="score">
        <div className="currentScore">Current Score: {currentScore}</div>
        <div className="bestScore">Best Score: {bestScore}</div>
      </div>

      <div className="game">
        {gameContinue ? gifs : (
          <>
            <h2>Game Over!</h2>
            <button onClick={resetGame}>Play Again</button>
          </>
        )}
      </div>
    </>
  );
}