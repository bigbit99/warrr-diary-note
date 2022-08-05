import { configureStore, createSlice } from '@reduxjs/toolkit'


let cmts = createSlice({
    name : 'comments',
    initialState : [{
        id : 1,
        title : "리덕스",
        content : "내용을 써보자"
        },

        { id : 2,
        title : "과제",
        content : "일기를 만들자"
        }
    ]
})


export default configureStore({
  reducer: { 
    cmts : cmts.reducer
   }
}) 