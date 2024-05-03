const token = localStorage.getItem("token");

export const authToken = () => {
  if (!token) {
    console.log("salom");
    console.log("salom");
    console.log("salom");
    return false;
  }
  return true;
};
