import custimAxios from "../configs/axios.config"

export const OrderUtils = {
    getOrder: async () => {
        const {data} = await custimAxios.get('order/all/for/admin', {
            headers: {
                "accept-language": localStorage.getItem("language"),
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
        return data
    },
    activeOrder: async ({cottageId, tariffId}) => {
        const {data} = await custimAxios.post('order/add', {
            tariffId,
            cottageId
        })
        return data
    }
}