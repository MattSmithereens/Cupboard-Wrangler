const filtersReducerDefaultState = {
  text: "",
  sortBy: "shelfLife", // this is where to set default sorting...
  startDate: undefined,
  endDate: undefined
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_DATE":
      console.log("sort by date fired");
      return {
        ...state,
        sortBy: "date"
      };
    case "SORT_BY_TYPE":
      return {
        ...state,
        sortBy: "isGrocery"
      };
    // case 'SORT_BY_AMOUNT':
    //   return {
    //     ...state,
    //     sortBy: 'amount'
    //   }
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};
