import custimAxios from "../configs/axios.config";

export const TariffUtils = {
  getTariff: async () => {
    const { data } = await custimAxios.get("/tariff", {
      headers: {
        "accept-language": localStorage.getItem("language"),
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return data;
  },
  activeTariff: async ({tariffId, cottageId, assignedBy}) => {
    const { data } = await custimAxios.post("tariff/activate", {
      assignedBy,
      tariffId,
      cottageId
    }, {
      headers: {
        "accept-language": localStorage.getItem("language"),
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return data;
  },
};
