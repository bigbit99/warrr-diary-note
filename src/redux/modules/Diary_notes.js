import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
  return await axios
    .get(`http://localhost:3001/posts`)
    .then((res) => res.data)
    .catch((error) => error);
});

export const addfetchUser = createAsyncThunk(
  "users/fetchUser",
  async (payload, thunkAPI) => {
    const resdata = await axios
      .post(`http://localhost:3001/posts`, {
        id: payload.id,
        name: payload.name.userName,
        title: payload.title.userTitle,
        contents: payload.contents.userContents,
      })
      .then((res) => res.data)
      .catch((error) => error);
    console.log(payload);
    return thunkAPI.fulfillWithValue(resdata);
  }
);

export const patchfetchUser = createAsyncThunk(
  "users/fetchUser",
  async (payload, thunkAPI) => {
    console.log(payload);
    const resdata = await axios
      // eslint-disable-next-line no-template-curly-in-string
      .patch(`http://localhost:3001/posts/${payload.id}`, {
        id: payload.id,
        name: payload.name,
        contents: payload.contents,
      })
      .then((res) => res.data)
      .catch((error) => error);
      console.log(resdata);
    return thunkAPI.fulfillWithValue(resdata);
  }
);

const Diary_note = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    // createAsyncThunk 했을때 약속
    // pendign : 비동기 작업을 시작했을때 상태
    [fetchUser.pending]: (state) => {
      state.loading = true;
      state.users = [];
      state.error = "";
    },
    // fulfilled : 비동기 작업이 끝났을때 상태(데이터를 가져왔을때)
    [fetchUser.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = "";
    },
    //rejected: 오류가 생겨서 중단 됐을때
    [fetchUser.rejected]: (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.payload;
    },
    // [patchfetchUser.fulfilled]: (state, action) => {
    //   state.users = [...state.users, action.payload];
    // }
  },
});

export default Diary_note.reducer;
