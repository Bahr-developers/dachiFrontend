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
                    <ul className="order-card-body">
                        <li className="order-cart-cattage-head">Cottage name</li>
                        <li className="order-cart-cattage-head">Start time</li>
                        <li className="order-cart-cattage-head">End time</li>
                        <li className="order-cart-cattage-head">Status</li>
                        
                        <li className="order-cart-cattage-name">{el.cottage?.name}</li>
                        <li className="order-cart-cattage-name">{el.assignedAt.split('T')[0]}</li>
                        <li className="order-cart-cattage-name">{el.end_time.split('T')[0]}</li>
                        <li className="order-cart-cattage-name"><TariffStatus status={el.orderStatus} /></li>
                    </ul>
                    <ul className="order-card-body-mini">
                        <ul className="list-unstyled w-50 text-start">
                            <li className="order-cart-cattage-head">Cottage name: </li>
                            <li className="order-cart-cattage-head">Start time: </li>
                            <li className="order-cart-cattage-head">End time: </li>
                            <li className="order-cart-cattage-head">Status: </li>
                        </ul>
                        
                        <ul className="list-unstyled w-50">
                            <li className="order-cart-cattage-name">{el.cottage?.name}</li>
                            <li className="order-cart-cattage-name">{el.assignedAt.split('T')[0]}</li>
                            <li className="order-cart-cattage-name">{el.end_time.split('T')[0]}</li>
                            {/* <li className="order-cart-cattage-name"><button disabled className={el.orderStatus==="success"?"order-status  btn border-0 disabled text-light bg-success":el.orderStatus==="progress"?"order-status bg-warning":"order-status bg-danger"}>{el.orderStatus}</button></li> */}
                        </ul>
                    </ul>
                </div>
                })}
            </div>
        </div>
    );
};

export default Order;