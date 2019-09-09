export const containsKey = (dataArray, key) => {
  let keyFound = false;
  dataArray.forEach(element => {
    if (element === key) keyFound = true;
  });
  return keyFound;
};
