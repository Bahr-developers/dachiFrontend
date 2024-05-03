import custimAxios from "../configs/axios.config";

export const userUtils = {
  getUsers: async () => {
    const { data } = await custimAxios.get("user/all");
    return data;
  },
  getSingleUser: async () => {
    const { data } = await custimAxios.get("/user/single");
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  },
  getCottageUserById: async (userId) => {
    const { data } = await custimAxios.get(`/user/single/user/by/${userId}`);
    return data;
  },
  getUserDevice: async (userId) => {
    const { data } = await custimAxios.get(`user/user-device/${userId}`);
    return data;
  },
};
