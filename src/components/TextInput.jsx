import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../globalState';
const TextInput = () => {
  const [text, setText] = useRecoilState(textState);
  const onChange = (event) => {
    setText(event.target.value);
  }
  return (
    <div>
    <input type="text" value={text} onChange={onChange} />
    <br />
    Echo: {text}
    </div>
  );
}
export default TextInput;