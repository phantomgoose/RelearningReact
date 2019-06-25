import React, { useState } from 'react';
import './App.css';
import * as actions from './actions';
import { useSelector, useDispatch } from 'react-redux';
import Nato from './components/nato';

const User = ({ name }) => <div>{name}</div>;

const App = () => {
  const [text, updateText] = useState('');
  const dispatch = useDispatch();
  
  const { message, users, isFetching } = useSelector(s => s);

  const handleNewMessage = text => dispatch(actions.test(text));
  const fetchFakeUsers = () => dispatch(actions.fetchFakeUsers());

  return (
    <div className="App">
      <p>{message}</p>
      <input type="text" onChange={e => updateText(e.target.value)} value={text} />
      <button onClick={() => handleNewMessage(text)}>Submit text</button>
      <br />
      <button onClick={() => fetchFakeUsers()}>Fetch fake users</button>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <ol>
          {users.map(u => (
            <User key={u.id} name={u.name} />
          ))}
        </ol>
      )}
      <Nato />
    </div>
  );
};

export default App;
