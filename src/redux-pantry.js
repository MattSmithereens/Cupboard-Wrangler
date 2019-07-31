import { createStore, combineReducers } from "redux";

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT

// MOVE_TO_PANTRY

// expenses reducer

const itemsReducerDefaultState = [];

const itemsReducer = (state = itemsReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(itemsReducer);

console.log(store.getState);

const demoState = {
  items: [
    {
      id: "randomstring",
      description: "Frozen peas",
      note: "This is for a long ass descriptive string",
      amount: 45000,
      createdAt: 0
    }
  ],
  filters: {
    text: "peas",
    sortBy: "date", // date or amount
    startDate: undefined,
    endDate: undefined,
    inCupboard: false // my own property
  }
};

export default state;
