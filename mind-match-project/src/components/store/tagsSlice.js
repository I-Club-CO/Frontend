import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const tagsDataSlice = createSlice({
    name: "tagsData",
    initialState,
    reducers: {
        setTags(state, action) {
            state.push(action.payload);
        },
        toggleTag(state, action) {
            const index = state.indexOf(action.payload);
            if (index > -1) {
                state.splice(index, 1);
            }
        },
        resetTagsData: () => initialState,
    },
});
export default tagsDataSlice.reducer;
export const { setTags, removeTag, resetTagsData } = tagsDataSlice.actions;
