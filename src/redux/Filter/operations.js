import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTrucksByFilter = createAsyncThunk(
  'trucks/fetchFilter',
  async ({ form }, thunkAPI) => {
    try {
      const { data } = await axios.get(`campers?form=${form}`);
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);