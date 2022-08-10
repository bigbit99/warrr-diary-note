import { createSlice, current } from "@reduxjs/toolkit";
// import { UsersData } from "./FakeData";

const initialState = [
  {
    id: 0,
    name: "",
    title: "2조는",
    contents: "",
    comment: "못말려",
  },
];

export const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },

    addComment: (state, action) => {
      state = state.push(action.payload);
    },

    delComment: (state, action) => {
      const newDelCmt = current(state).filter((del) => {
        return del.id !== action.payload;
      });
      return newDelCmt;
    },

    editDiary: (state, action) => {
      console.log(state, action.payload);
      state = state.map((data) => {
        console.log(data.id.toString() === action.payload.id);
        console.log(data);
        if (data.id.toString() === action.payload.id) {
          data.contents = action.payload.new;
        }
        return data;
        //function안에 return값 써주기
      });
    },

    getDiary: (state, action) => {
      state = state.map((data) => {
        if (data.id.toString() === action.payload) {
          data.contents = action.payload;
        }
        return data;
      });
    },

    editDiary: (state, action) => {
      console.log(state, action.payload);
      state = state.map((data) => {
        console.log(data.id.toString() === action.payload.id);
        console.log(data);
        if (data.id.toString() === action.payload.id) {
          data.contents = action.payload.new;
        }
        return data;
        //function안에 return값 써주기
      });
    },

    getDiary: (state, action) => {
      state = state.map((data) => {
        if (data.id.toString() === action.payload) {
          data.contents = action.payload;
        }
        return data;
      });
    },

    changeComment: (state, action) => {
      state = state.map((data) => {
        if (data.id === action.payload.id) {
          data.comment = action.payload.new;
        }
        return data;
      });
    },
  },
});

// updateUsername: (state, action) => {
//   state.value.map((user) => {
//     if (user.id === action.payload.id) {
//       user.username = action.payload.username;
//     }
//   });
// },

export const {
  addUser,
  addComment,
  delComment,
  changeComment,
  editDiary,
  getDiary,
} = userSlice.actions;

export default userSlice.reducer;
