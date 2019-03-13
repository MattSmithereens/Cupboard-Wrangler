//import uuid from 'uuid';
import moment from 'moment';
import database from '../firebase/firebase';

//let amount = 0 //need to import value during item creation and change description to reflect
//let now = new moment().add(amount, 'day').format('L');

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  item
});

export const startAddItem = (itemData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 1, // value of zero throws NaN error
      shelfLife = new moment().add(0, 'day').format('L'),  //now.add(1, 'day').format('l'), //adding time cumulatively to subsequent items
      inCupboard = false,
      isGrocery = true
    } = itemData;
    const item = {
      description,
      note,
      amount,
      shelfLife,
      inCupboard,
      isGrocery
    };

    database.ref('items').push(item).then((ref) => {
      dispatch(addItem({
        id: ref.key,
        ...item
      }));
    });
  };
};

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