import { useState } from 'react';
import './App.css';

function App() {
  const [likes, setCount] = useState(0);
  const [value, setValue] = useState('Text in input');
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const likeClick = (button) => {
    if (button === 0) {
      setCount(likes + 1);
      setLike(like + 1);
    }
  };

  const dislikeClick = (button) => {
    if (button === 1) {
      setCount(likes - 1)
      setLike(like - 1);
      console.log("presed")
    }
  };

  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input type="text" value={value} onChange={event => setValue(event.target.value)} />
      <button onClick={() => likeClick(like)} data-value={like}>
        Likes
      </button>
      <button onClick={() => dislikeClick(like)} data-value={dislike}>
        Dislike
      </button>
    </div>
  );
}

export default App;
