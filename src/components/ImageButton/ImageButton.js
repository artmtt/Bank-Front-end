import './ImageButton.css';

function ImageButton(props) {
    return (
        <div className="col-4 pre-btn-img">
            <button className="btn-img" onClick={props.onClick}>
                <img className="img-fluid img-design" id={props.id} src={props.src} alt={props.alt} />
            </button>
        </div>
    );
}

export default ImageButton;