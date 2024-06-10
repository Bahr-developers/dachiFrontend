import { useMutation, useQueryClient } from '@tanstack/react-query';
import './modal.css'
import { OrderUtils } from '../utils/order.utils';
import { QUERY_KEYS } from '../Query/query-keys';
import { toast } from 'react-toastify';
import cacelledImg from '../assets/icons/cencelled.svg'

const TariffStatus = (props) => {
    const queryClient = useQueryClient()
    const editOrder = useMutation({
        mutationFn: OrderUtils.editOrder,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: [QUERY_KEYS.order]})
            toast.success("Succes order")
        },
        onError: (err) => {
            console.log(err);
            toast.error("Error order")
        }
    })
    const handleEditOrderStatus = () => {  
            editOrder.mutate({
                orderId: props.id,
                orderStatus: "cancelled",
                status: props.status
            })
        
    }
    return (
        <>
            <button data-bs-toggle="modal" data-bs-target={`#exampleModal${props.id}`} type="button" className={props.statusOrder=="success"?"order-status btn border-0 disabled text-light bg-success ":props.statusOrder=="progress"?"order-status btn border-0 bg-warning":"order-status bg-danger btn border-0 disabled"}>{props.statusOrder}</button>

            <div className="modal fade" id={`exampleModal${props.id}`} tabIndex="-1" aria-labelledby={`exampleModalLabel${props.id}`} aria-hidden="true">
                <div className="modal-dialog col-md-8 col-lg-9">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-4" id={`exampleModalLabel${props.id}`}>Are you sure to canceled?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center">
                            <img src={cacelledImg} alt="img" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleEditOrderStatus} type="button" data-bs-dismiss="modal" className="btn btn-primary">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TariffStatus;