import { useState } from 'react'
/*import './App.css'*/

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};


export default function Profile() {

  const [count_blue, setCount_blue] = useState(0);
  const [count_green, setCount_green] = useState(0);

  function handleClickBlue() {
    setCount_blue(count_blue + 1)
  }

  function handleClickGreen() {
    setCount_green(count_green + 1)
  }

  function handleReset() {
    setCount_blue(0);
    setCount_green(0);
  }

  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <br />
      <button className='blue-button' onClick={handleClickBlue}>
        Click me. {count_blue} times
      </button>
      <br />
      <br />
      <button className='green-button' onClick={handleClickGreen}>
        Click me, I'm not blue. But not so many times, you did {count_green} times already
      </button>
      <br />
      <br />
      <button onClick={handleReset}>
        Reset
      </button>
    </>
  );
}
