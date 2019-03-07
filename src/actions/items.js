import uuid from 'uuid';

export const addItem = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
    shelfLife = 0,
    inCupboard = false
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