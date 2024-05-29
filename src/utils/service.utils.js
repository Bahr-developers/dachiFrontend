import custimAxios from "../configs/axios.config";

export const ServiceUtils = {
  getService: async () => {
    const { data } = await custimAxios.get("/services", {
      headers: {
        "accept-language": localStorage.getItem("language"),
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return data;
  },
};
