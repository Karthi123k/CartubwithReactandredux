import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import SearchSlice from "./SearchSlice";
import ChatSlice from "./ChatSlice";
const store=configureStore({
    reducer:{
        app:AppSlice,
        search:SearchSlice,
        chat:ChatSlice,
    },
});
export default store;