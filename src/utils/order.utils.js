import custimAxios from "../configs/axios.config"

export const OrderUtils = {
    getOrder: async () => {
        const {data} = await custimAxios.get('order/all/for/user', {
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
        },
    {
        headers:{
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }
    })
        return data
    }
}