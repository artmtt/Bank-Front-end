import './Modal.css';

function hideModal() {
    const modal = document.getElementById('id_modal');
    modal.style.display = "none";
}

function Modal(props) {
    return(
        <div className="modal" id={props.id} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={props.id + "_title"}>{props.title}</h5>
                    </div>
                    <div className="modal-body">
                        <p id={props.id + "_body"}>{props.body}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-danger" id={props.id + "_footer_btn"} onClick={() => hideModal()}>{props.footerBtn}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;