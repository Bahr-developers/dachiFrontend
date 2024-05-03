import custimAxios from "../configs/axios.config";

export const cottageUtils = {
  getCottage: async () => {
    const { data } = await custimAxios.get("/cottage", {
      headers: {
        "accept-language": localStorage.getItem("language"),
      },
    });
    return data;
  },
  getCottageByPlace: async (placeId) => {
    const { data } = await custimAxios.get(`/cottage/place/${placeId}`, {
      headers: {
        "accept-language": localStorage.getItem("language"),
      },
    });
    return data;
  },
  getCottageTop: async () => {
    const { data } = await custimAxios.get("/cottage/top", {
      headers: {
        "accept-language": localStorage.getItem("language"),
      },
    });
    return data;
  },
  getCottageType: async (type) => {
    const { data } = await custimAxios.get(`/cottage/cottage-type/${type}`, {
      headers: {
        "accept-language": localStorage.getItem("language"),
      },
    });
    return data;
  },
  getCottageUser: async () => {
    const { data } = await custimAxios.get("cottage/user", {
      headers: {
        "accept-language": localStorage.getItem("language"),
      },
    });
    return data;
  },
  getCottageUserId: async (userId) => {
    const { data } = await custimAxios.get(`cottage/user/${userId}`, {
      headers: {
        "accept-language": localStorage.getItem("language"),
      },
    });
    return data;
  },
  getCottageFilter: async ({ type, place, price }) => {
    const { data } = await custimAxios.get(
      `/cottage/filter/?type=${type}&place=${place}&price=${price}`,
      {
        type: type,
        place: place,
        price: price,

        headers: {
          "accept-language": localStorage.getItem("language"),
        },
      }
    );
    return data;
  },
};
