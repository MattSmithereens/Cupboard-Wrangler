import uuid from 'uuid';
import moment from 'moment';

const date = moment();

export const addItem = (
  {
    description = '',
    note = '',
    amount = 1,
    createdAt = 0,
    shelfLife = date.add(1, 'day').format('LL'), //adding time cumulatively to subsequent items
    inCupboard = false,
    isGrocery = true
  } = {} // sets defaults if no input
) => ({
  type: 'ADD_ITEM',
  item: {
    description,
    note,
    amount,
    createdAt,
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