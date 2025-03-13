import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';

export const fetchTrucks = createAsyncThunk("trucks/fetchAll",
  async (page, thunkAPI) => {
  try {
    const { data } = await axios.get(`campers?page=${3}&limit=4`);
    return data;

  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
  })