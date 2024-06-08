import '../pages/Order/Order.css'

const TariffStatus = (props) => {
    console.log(props.status=="success");
    return (
        <div>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" className={props.status=="success"?"order-status btn border-0 disabled text-light bg-success ":props.status=="progress"?"order-status btn border-0 bg-warning":"order-status bg-danger btn border-0"}>{props.status}</button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            active
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TariffStatus;