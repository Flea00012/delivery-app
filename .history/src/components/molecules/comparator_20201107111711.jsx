// function comparator is used to do all the comparisons only and separate concerns for 
export function comparator(dataArray, value) {
  return dataArray.filter((a) => a === value);
}
