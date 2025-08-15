import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTrucksByFilter = createAsyncThunk(
  'trucks/fetchFilter',
  async ({ form, equipment }, thunkAPI) => {
    try {
      const { data } = await axios.get(`campers?form=${form}&equipment=${equipment}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);