import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { AppleItems, SearchAppleParams } from '../redux/apple/types';

export const fetchApples = createAsyncThunk(
  'apples/fetchApplesStatus',
  async (params: SearchAppleParams) => {
    const { category, sortBy, order, search, currentPage } = params;
    const { data } = await axios.get<AppleItems[]>(
      `https://63a305fb471b38b206038c10.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    return data as AppleItems[];
  },
);
