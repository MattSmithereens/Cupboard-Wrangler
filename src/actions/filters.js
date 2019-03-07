export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
export const sortByDate = (date = '') => ({
  type: 'SORT_BY_DATE',
  date
});

// SORT_BY_AMOUNT
export const sortByAmount = (amount = '') => ({
  type: 'SORT_BY_AMOUNT',
  amount
});

export const sortByLocationPantry = (inCupboard = true) => ({
  type: 'SORT_BY_LOCATION_PANTRY',
  inCupboard
});

export const sortByLocationShoppingList = (inCupboard = false) => ({
  type: 'SORT_BY_LOCATION_SHOPPING_LIST',
  inCupboard
});

// SORT_BY_SHELFLIFE?



// SET START DATE
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET END DATE
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});