import { createSlice }   from "@reduxjs/toolkit";
const ChatSlice=createSlice({
    name:"chat",
    initialState:{
        Messages:[],
    },
        reducers:{
            addMeassage:(state,action)=>{
                state.Messages.splice(8,1);
                state.Messages.unshift(action.payload);
            },
        },
    }
);
export const{addMeassage}=ChatSlice.actions;
export default ChatSlice.reducer;