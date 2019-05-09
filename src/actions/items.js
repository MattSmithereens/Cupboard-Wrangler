import moment from 'moment';
import database from '../firebase/firebase';

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  item
});

// const now = new moment();

export const startAddItem = (itemData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = '',
      shelfLife = new moment().add(amount, 'day').format('L'),
      parseDate = new moment().add(amount, 'day').format(),
      inCupboard = false,
      isGrocery = true
    } = itemData;
    const item = {
      description,
      note,
      amount,
      shelfLife,
      parseDate,
      inCupboard,
      isGrocery
    };

    database.ref(`users/${uid}/items`).push(item).then((ref) => {
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

// START_REMOVE_ITEM (update DB)
export const startRemoveItem = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/items/${id}`).remove().then(() => {
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/items/${id}`).update(updates).then(() => {
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/items/${id}`).update({
      inCupboard: !inCupboard,
      shelfLife: new moment().add(amount, 'day').format('L'),
      parseDate: new moment().add(amount, 'day').format()
    }).then(() => {
      dispatch(toggleListItem(id, inCupboard));
    }).catch((e) => {
      console.log('error = ' + e);
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/items`).once('value').then((snapshot) => {
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