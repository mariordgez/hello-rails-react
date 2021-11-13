import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../redux/message/messageReducer';

const Message = () => {
  const { status, message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'default') {
      dispatch(fetchMessage());
    }
  }, [status]);

  const flag = () => {
    if (status == 'ready') {
      return String.fromCodePoint(message.code_a, message.code_b);
    }
  };

  const newMessage = () => {
    if (status === 'ready') {
      dispatch(fetchMessage());
    }
  };

  const loadMessage = (load = '') => (
    <div className={`container ${load}`}>
      {load !== '' && (
        <div>
          <h1>React-Rails!</h1>
          <div className="language-flag">
            <h2>{message.language}</h2>
            <span className="emoji">{flag()}</span>
          </div>
          <h2>{message.content}</h2>
          <button className="random" type="button" onClick={newMessage}>
            Random
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div>
      hello
      {status !== 'ready' ? loadMessage() : loadMessage('load')}
    </div>
  );
};

export default Message;
