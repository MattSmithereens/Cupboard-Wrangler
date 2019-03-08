const itemsReducerDefaultState = [];

export default (state = itemsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,  // spread operator.  concats action.item to state without changing state
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
      console.log('clicked');
    // return state.map((item) => {
    //   if (item.id === action.id) {
    //     return {
    //       ...item,
    //       ...action.updates
    //     };
    //   } else {
    //     return item;
    //   };
    // })


    default:
      return state;
  }
};