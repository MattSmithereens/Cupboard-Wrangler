import moment from 'moment';
import database from '../firebase/firebase';

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  item
});

export const startAddItem = (itemData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = '', // quick fix; left blank throws NaN error
      shelfLife = new moment().add(amount, 'day').format('L'),  //now.add(1, 'day').format('l'), //adding time cumulatively to subsequent items
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

// START_REMOVE_ITEM
export const startRemoveItem = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`items/${id}`).remove().then(() => {
      dispatch(removeItem({ id }));
    });
  };
};

// EDIT_ITEM
export const editItem = (id, updates) => ({
  type: 'EDIT_ITEM',
  id,
  updates
});

// START_EDIT_ITEM
export const startEditItem = (id, updates) => {
  return (dispatch) => {
    return database.ref(`items/${id}`).update(updates).then(() => {
      dispatch(editItem(id, updates));
    });
  };
}

// TOGGLE_LIST_ITEM
export const toggleListItem = (id, updates) => ({
  type: 'TOGGLE_LIST_ITEM',
  id,
  updates
});

// START_TOGGLE_LIST_ITEM
export const startToggleListItem = (id, inCupboard, amount) => {
  return (dispatch) => {
    return database.ref(`items/${id}`).update({
      inCupboard: !inCupboard,
      shelfLife: new moment().add(amount, 'day').format('L'),
    }).then(() => {
      dispatch(toggleListItem(id, inCupboard));
    }).catch((e) => {
      console.log('error' + e);
      dispatch(toggleListItem(id, inCupboard));
    });
  };
}

// SET_ITEMS
export const setItems = (items) => ({
  type: 'SET_ITEMS',
  items
});

// START_SET_ITEMS
export const startSetItems = () => {
  return (dispatch) => {
    return database.ref('items').once('value').then((snapshot) => {
      const items = [];

      snapshot.forEach((childSnapshot) => {
        items.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      });

      dispatch(setItems(items));
    });
  };
};