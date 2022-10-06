const addToDb = (data) => {
  //   console.log(" I am from local storage ");
  //   console.log(data);

  localStorage.setItem("breaktime", data);
};
const getFromDb = () => {
  const local = localStorage.getItem("breaktime");
  return local;
};
export { addToDb, getFromDb };
