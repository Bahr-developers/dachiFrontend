import custimAxios from "../configs/axios.config";

export const translateUtils = {
  getTranslate: async () => {
    const { data } = await custimAxios.get("translate");
    return data;
  },
  getUnusedTranslates: async () => {
    const { data } = await custimAxios.get("translate/unused");
    return data;
  },
  getTranslateId: async (id) => {
    const { data } = custimAxios.get(`translate/${id}`);
    return data;
  },
};
