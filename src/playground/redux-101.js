

// import { createStore, combineReducers } from 'redux';
// import uuid from 'uuid';

// // ADD_ITEM
// const addItem = (
//   {
//     description = '',
//     note = '',
//     amount = 0,
//     createdAt = 0,
//     shelfLife = 0,
//     inCupboard = false
//   } = {} // sets defaults if no input
// ) => ({
//   type: 'ADD_ITEM',
//   item: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt,
//     shelfLife,
//     inCupboard
//   }
// });

// // REMOVE_ITEM (action generators)
// const removeItem = ({ id } = {}) => ({
//   type: 'REMOVE_ITEM',
//   id
// });

// // EDIT_ITEM
// const editItem = (id, updates) => ({
//   type: 'EDIT_ITEM',
//   id,
//   updates
// });

// MOVE_TO_PANTRY
// MOVE_TO_LIST

// SET_TEXT_FILTER
// const setTextFilter = (text = '') => ({
//   type: 'SET_TEXT_FILTER',
//   text
// });

// // SORT_BY_DATE
// const sortByDate = (date = '') => ({
//   type: 'SORT_BY_DATE',
//   date
// });

// // SORT_BY_AMOUNT
// const sortByAmount = (amount = '') => ({
//   type: 'SORT_BY_AMOUNT',
//   amount
// });

// // SORT_BY_SHELFLIFE?



// // SET START DATE
// const setStartDate = (startDate) => ({
//   type: 'SET_START_DATE',
//   startDate
// });

// // SET END DATE
// const setEndDate = (endDate) => ({
//   type: 'SET_END_DATE',
//   endDate
// })

// expenses reducer

// const itemsReducerDefaultState = [];
// const filtersReducerDefaultState = {
//   text: '',
//   sortBy: 'date', // this is where to set default sorting...
//   startDate: undefined,
//   endDate: undefined,
// };


// const itemsReducer = (state = itemsReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'ADD_ITEM':
//       return [
//         ...state,
//         action.item
//       ];
//     case 'REMOVE_ITEM':
//       return state.filter(({ id }) => id !== action.id); // filters out the item with the passed in id
//     case 'EDIT_ITEM':
//       return state.map((item) => {
//         if (item.id === action.id) {
//           return {
//             ...item,
//             ...action.updates
//           };
//         } else {
//           return item;
//         };
//       });
//     default:
//       return state;
//   }
// };

// const filtersReducer = (state = filtersReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'SET_TEXT_FILTER':
//       return {
//         ...state,
//         text: action.text
//       };
//     case 'SORT_BY_DATE':
//       return {
//         ...state,
//         sortBy: 'date'
//       };
//     case 'SORT_BY_AMOUNT':
//       return {
//         ...state,
//         sortBy: 'amount'
//       }
//     case 'SET_START_DATE':
//       return {
//         ...state,
//         startDate: action.startDate
//       };
//     case 'SET_END_DATE':
//       return {
//         ...state,
//         endDate: action.endDate
//       };
//     default:
//       return state;
//   }
// };



// filtering
// const getVisibleItems = (items, { text, sortBy, startDate, endDate }) => {
//   return items.filter((item) => {
//     const startDateMatch = typeof startDate !== 'number' || item.createdAt >= startDate;
//     const endDateMatch = typeof endDate !== 'number' || item.createdAt <= endDate;
//     const textMatch = item.description.toLowerCase().includes(text.toLowerCase());

//     return startDateMatch && endDateMatch && textMatch;
//   }).sort((a, b) => {
//     if (sortBy === 'date') {
//       return a.createdAt < b.createdAt ? 1 : -1;
//     } else if (sortBy === 'amount') {
//       return a.amount < b.amount ? 1 : -1;
//     }
//   });
// };


// const store = createStore(
//   combineReducers({
//     items: itemsReducer,
//     filters: filtersReducer
//   }));

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleItems = getVisibleItems(state.items, state.filters);
//   console.log(visibleItems);
// })

// const item1 = store.dispatch(addItem({ description: 'frozen peas', amount: 200, createdAt: -10000 }));
// const item2 = store.dispatch(addItem({ description: 'avocado', amount: 400, createdAt: 100000 }));
// const item3 = store.dispatch(addItem({ description: 'ice cream', amount: 2 }));

// store.dispatch(removeItem({ id: item1.item.id }));
// store.dispatch(editItem(item2.item.id, { amount: 500 }))
// store.dispatch(editItem(item3.item.id, { inCupboard: true }))
// store.dispatch(setTextFilter('avo'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(200000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1350));

// const demoState = {
//   items: [{
//     id: 'randomstring',
//     description: 'Frozen peas',
//     note: 'This is for a long ass descriptive string',
//     amount: 45000,
//     createdAt: 0,
//     shelfLife: 0,
//     inCupboard: false // my own property; defaults to shopping list
//   }],
//   filters: {
//     text: 'peas',
//     sortBy: 'date',  // date or amount
//     startDate: undefined,
//     endDate: undefined
//   }
// }
























