import uuid from 'uuid';
import moment from 'moment';


// let amount = 0 //need to import value during item creation and change description to reflect
// let now = new moment().add(amount, 'day').format('L');

export const addItem = (

  {
    description = '',
    note = '',
    amount = 0,
    shelfLife = new moment().add(amount, 'day').format('L'),  //now.add(1, 'day').format('l'), //adding time cumulatively to subsequent items
    inCupboard = false,
    isGrocery = true
  } = {} // sets defaults if no input
) => ({
  type: 'ADD_ITEM',
  item: {
    description,
    note,
    amount,
    shelfLife,
    inCupboard,
    isGrocery,
    id: uuid()
  }
});

// REMOVE_ITEM (action generators)
export const removeItem = ({ id } = {}) => ({
  type: 'REMOVE_ITEM',
  id
});

// EDIT_ITEM
export const editItem = (id, updates) => ({
  type: 'EDIT_ITEM',
  id,
  updates
});

export const toggleListItem = (id, updates) => ({
  type: 'TOGGLE_LIST_ITEM',
  id,
  updates
});