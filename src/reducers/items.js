import moment from 'moment';

const itemsReducerDefaultState = [];

export default (state = itemsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,  // spread operator.  concats action.item & returns state without changing initial state
        action.item
      ];
    case 'REMOVE_ITEM':
      return state.filter(({ id }) => id !== action.id);  // filters out the item with the passed in id.  
    case 'EDIT_ITEM':                                     // destructures object and parses id attribute
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            ...action.updates
          };
        } else {
          return item;
        };
      });
    case 'TOGGLE_LIST_ITEM':
      return state.map(item =>
        (item.id === action.id)
          ? {
            ...item,
            inCupboard: !item.inCupboard,
            // reset shelfLife when item is toggled, not updating database yet
            shelfLife: new moment().add(item.amount, 'day').format('L')
          }
          : item
      )
    case 'SET_ITEMS':
      return action.items;
    default:
      return state;
  }
};