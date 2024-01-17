import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./StoreNotes";

export const store = configureStore({
    reducer:{
        noteStoreData:notesSlice,
    }
})