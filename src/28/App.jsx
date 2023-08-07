import { useState } from 'react';

export default function FeedbackForm() {
  const [name, setName] = useState('');

  function handleClick() {
    const setentername = prompt('What is your name?');
    setName(setentername);
    alert(`Hello, ${setentername}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}
