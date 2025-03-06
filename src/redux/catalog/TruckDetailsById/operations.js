import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchDetailsById = createAsyncThunk('trucks/fetchById',
  async (truck, thunkAPI) => {
  try {
    const { data } = await axios.get(`campers/${truck.id}`);
    return data;
  }catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
  });