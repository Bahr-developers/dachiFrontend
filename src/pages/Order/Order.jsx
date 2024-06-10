import TariffStatus from "../../Modals/TariffStatus";
import { ALL_DATA } from "../../Query/get_all";
import BreacdCrumbs from "../../components/BreadCrumbs/BreacdCrumbs";
import './Order.css'

const Order = () => {
    const useOrder = ALL_DATA.useOrder()
    return (
        <div className="container">
            <BreacdCrumbs/>
            <h1 className="mt-4">Foydalanilgan tariflar</h1>
            <div className="order-wrapp mt-3">
                {useOrder?.data?.length && useOrder?.data?.map(el => {
                    return <div key={el.id} className="order-card mt-3">
                    <h2 className="tariff-name">{el.tariff.type}</h2>
                    <ul className="order-card-body d-flex d-md-block justify-content-between align-items-center w-100 list-unstyled rounded-2 p-2 overflow-hidden">
                        <ul className="list-unstyled d-md-flex justify-content-between">
                            <li className="order-cart-cattage-head">Cottage name</li>
                            <li className="order-cart-cattage-head">Start time</li>
                            <li className="order-cart-cattage-head">End time</li>
                            <li className="order-cart-cattage-head">Status</li>
                            <li className="order-cart-cattage-head">Order Change</li>
                        </ul>
                        <hr />
                        <ul className="list-unstyled d-md-flex justify-content-between">
                            <li className="order-cart-cattage-name mt-1">{el.cottage?.name}</li>
                            <li className="order-cart-cattage-name mt-1">{el.assignedAt.split('T')[0]}</li>
                            <li className="order-cart-cattage-name mt-1">{el.end_time.split('T')[0]}</li>
                            <li className="order-cart-cattage-name mt-1 text-capitalize">{el.orderStatus}</li>
                            <li className="order-cart-cattage-name mt-1 text-text-center"><TariffStatus status={el.status} id={el.id} statusOrder={el.orderStatus} /></li>
                        </ul>
                    </ul>
                </div>
                })}
            </div>
        </div>
    );
};

export default Order;