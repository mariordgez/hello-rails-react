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

  const loadMessage = (load = '') => (
    <div className={`container ${load}`}>
      {load !== '' && (
        <div>
          <h1>Welcome to React-Rails!</h1>
          <h2>{message.content}</h2>
        </div>
      )}
    </div>
  );

  return <div>{status !== 'ready' ? loadMessage() : loadMessage('load')}</div>;
};

export default Message;
