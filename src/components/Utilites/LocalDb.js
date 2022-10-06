const addToDb = (value, data) => {
  //   console.log(" I am from local storage ");
  //   console.log(data);
  localStorage.setItem(value, data);
};

const getFromDb = (value) => {
  const local = localStorage.getItem(value);
  return local;
};
const resetData = (value) => {
  localStorage.setItem(value, 0);
};
export { addToDb, getFromDb, resetData };
