import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchAPI from '../../api/fetchAPI';

const FETCH_GREETING = 'hello-rails-react/FETCH_GREETING';

const initialState = {
  status: 'default',
  message: {},
};

export const fetchGreeting = createAsyncThunk(
  'hello-rails-react/FETCH_MESSAGE',
  async () => {
    const message = await fetchAPI();
    return message;
  },
);

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING:
      return {
        status: 'ready',
        message: action.payload,
      };
    default:
      return state;
  }
};

export default greetingReducer;
