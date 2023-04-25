import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchAllQuestions = createAsyncThunk(
  'questions/getAllQuestions',
  async () => {
    // const url = `${BASE_URL}/questions`;
    const url =
      'https://port-0-clone-stackoverflow-server-1maxx2klgwstlwj.sel3.cloudtype.app:8080/questions';
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // console.log(response);
    try {
      if (response.status >= 200 && response.status < 300) {
        const fetchedAllQuestions = response.data.data;
        console.log('-'.repeat(10));
        console.log(fetchedAllQuestions);
        return fetchedAllQuestions;
      }
    } catch (error) {
      return Promise.reject(error);
    }

    return null;
  },
);

export default {};
