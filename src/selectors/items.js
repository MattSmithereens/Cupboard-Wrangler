export default (items, { text }) => {
  // export default (items, { text, sortBy, startDate, endDate }) => {
  return items
    .filter(item => {
      // const startDateMatch = typeof startDate !== 'number' || item.createdAt >= startDate;
      // const endDateMatch = typeof endDate !== 'number' || item.createdAt <= endDate;
      const textMatch = item.description
        .toLowerCase()
        .includes(text.toLowerCase());

      // return startDateMatch && endDateMatch && textMatch;
      return textMatch;
    })
    .sort((a, b) => {
      return a.parseDate > b.parseDate ? 1 : -1;

      // if (sortBy === 'date') {
      //   return a.createdAt < b.createdAt ? 1 : -1;
      // } else if (sortBy === 'amount') {
      //   return a.amount < b.amount ? 1 : -1;
      // }
    });

  // }).sort((a, b) => {
  //   if (sortBy === 'date') {
  //     return a.createdAt < b.createdAt ? 1 : -1;
  //   } else if (sortBy === 'amount') {
  //     return a.amount < b.amount ? 1 : -1;
  //   }
  // });
};
