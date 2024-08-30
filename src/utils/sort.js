export const sort = (initialData, sort) => {
  // console.log(initialData);
  let newData = [...initialData];
  switch (sort.key) {
    case "FEATURED":
      break;
    case "BEST_SELLING":
      break;
    case "A_Z":
      newData = newData.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
      );
      break;
    case "Z_A":
      newData = newData
        .sort((a, b) =>
          a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
        )
        .reverse();
      break;
    case "LOW_IN_HIGH":
      // newData = newData.sort((a, b) => a.price - b.price);
      break;
    case "HIGH_IN_LOW":
      // newData = newData.sort((a, b) => b.price - a.price);
      break;
    case "OLD_TO_NEW":
      break;
    case "NEW_TO_OLD":
      break;
    default:
      break;
  }
  return newData;
};
