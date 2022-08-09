import { createSlice, current } from "@reduxjs/toolkit";
// import { UsersData } from "./FakeData";

const initialState = [
  {
    id: 0,
    name: "",
    title: "",
    contents: "",
    comment: "",
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
      console.log(action.payload)
      state = state.push(action.payload);
      
    },

    delComment: (state, action) => {
      const newDelCmt = current(state).filter((del) => {
        return del.id !== action.payload;
      });
      return newDelCmt;
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

export const { addUser, addComment, delComment, changeComment } =
  userSlice.actions;
export default userSlice.reducer;
