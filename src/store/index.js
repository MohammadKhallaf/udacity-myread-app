import { configureStore, createSlice } from "@reduxjs/toolkit";
import { udAPI } from "./BookAPI";

const dataInitialState = {
  items: [],
  search: [],
};

const dataSlice = createSlice({
  name: "store",
  initialState: dataInitialState,
  reducers: {
    getAll: (state, action) => {
      state.items = action.payload;
    },
    getSearch: (state, action) => {
        state.search = action.payload
    },
  },
});

const store = configureStore({
  reducer: {
    store: dataSlice.reducer,
  },
});

/**
 * @description Get the shelves data from the API
 *
 */
export const getShelves = (dispatch) => {

  udAPI.get("/books").then((response) => {
    dispatch(dataSlice.actions.getAll(response.data.books));
  });
};
/**
 *
 *
 * @param {"ID of the required Book"} bookID
 * @param {"The required shelf to move the book to"} shelf
 */
export const updateShelves = (bookID, shelf) => {

  return function (dispatch) {
    udAPI
      .put(`/books/${bookID}`, {
        shelf: shelf,
      })
      .then((response) => {
        dispatch(getShelves);
      });
  };
};
export const searchBooks = (query) => {

  return function (dispatch) {

    udAPI
      .post("/search", { query })
      .then((response) => {
        dispatch(dataSlice.actions.getSearch(response.data.books));
      })
      .catch((err) => {
        console.error("There is an error:", err);
      });
  };
};

export const dataAction = dataSlice.actions;
export default store;
