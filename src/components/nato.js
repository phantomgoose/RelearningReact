import React, { useState } from 'react';
import { NATO_ALPHABET } from '../constants';

const Nato = () => {
  const isLetter = char => {
    if (char === undefined) return false;
    const code = char.charCodeAt(0);
    return (code > 64 && code < 91) || (code > 96 && code < 123);
  };

  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const submit = () => {
    if (!text || !text.length) return;
    const converted = text.split('').map((letter, i, letters) => {
      if (!isLetter(letter)) return letter;
      const natoLetter = NATO_ALPHABET[letter.toLowerCase().charCodeAt(0) - 97];
      const nextLetter = letters[i + 1];
      return isLetter(nextLetter) ?
        `${natoLetter} `
        : natoLetter;
    });
    setResult(converted);
  }

  return <div>
    <textarea placeholder='Put text in here' value={text} onChange={e => setText(e.target.value)}></textarea>
    <button onClick={submit}>Convert</button>
    <p>{result}</p>
  </div>
}

export default Nato;