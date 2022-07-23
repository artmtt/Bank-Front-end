import './PagarTarjetaCredito.css';
import imgTDC from '../../assets/banorte_tdc_clasica.png';
import Navbar from '../../components/Navbar/Navbar.js';
import Modal from '../../components/Modal/Modal.js';

function radioClick(radio_id) {
    const cradio = document.getElementById(radio_id);
    if(cradio !== null) {
        const other_quant_div = document.getElementById('other_quant');
        if(radio_id === 'radio_other_quant') other_quant_div.classList.remove('disabled');
        else other_quant_div.classList.add('disabled');
    }
}

// Esto debe realizar la transacción en back end
function payTDC() {
    const oq_radio = document.getElementById('radio_other_quant');
    const quantPay = document.getElementById('quant_pay');
    if(oq_radio !== null) {
        let success = true;
        if(oq_radio.checked === true) {
            if(quantPay.value === '' || parseFloat(quantPay.value) <= 0) success = false;
        }
        const modal = document.getElementById('id_modal'),
            modal_title = document.getElementById('id_modal_title'),
            modal_body = document.getElementById('id_modal_body');
        modal.style.display = "block";
        if(success === true) {
            modal_title.innerText = "Operación completada";
            modal_body.innerText = "La operación fue completada con éxito.";
            quantPay.value = '';
        } else {
            modal_title.innerText = 'Operación errónea';
            modal_body.innerText = 'La operación no pudo ser completada, revise los datos ingresados.';
        }
    }
}

function PagarTarjetaCredito() {
    document.title = "Banorte | Pagar Tarjeta de Crédito";
    return(
        <>
            <Navbar />
            <div className="row container-fluid d-flex justify-content-center pre-tdc-img">
                <img src={imgTDC} className="card-img-top img-fluid img-tdc" alt="bancomer tarjeta de credito clasica" />
                <div className="w-100 row container-fluid d-flex justify-content-center">
                    <div className="card row container-fluid d-flex justify-content-center card-tdc-info">
                        <h4 className="text-center">John Doe</h4>
                        <h6 className="text-center">Clásica</h6>
                        <hr />
                        <div className="pay-tdc-inputs">
                            <div className="form-check pay-tdc-inputs-row">
                                <label className="form-check-label" htmlFor="radio_min">Pagar cuota mínima <span className="bold-span">$597.55</span></label>
                                <input className="form-check-input" type="radio" name="tdc_options" id="radio_min" onClick={() => radioClick('radio_min')} defaultChecked />
                            </div>
                            <div className="form-check pay-tdc-inputs-row">
                                <label className="form-check-label" htmlFor="radio_no_int">Pagar cuota para evitar intereses <span className="bold-span">$2,654.80</span></label>
                                <input className="form-check-input" type="radio" name="tdc_options" id="radio_no_int" onClick={() => radioClick('radio_no_int')} />
                            </div>
                            <div className="form-check pay-tdc-inputs-row">
                                <label className="form-check-label" htmlFor="radio_complete">Pagar monto completo <span className="bold-span">$25,570.05</span></label>
                                <input className="form-check-input" type="radio" name="tdc_options" id="radio_complete" onClick={() => radioClick('radio_complete')} />
                            </div>
                            <div className="form-check pay-tdc-inputs-row">
                                <label className="form-check-label" htmlFor="radio_other_quant">Pagar otra cantidad</label>
                                <input className="form-check-input" type="radio" name="tdc_options" id="radio_other_quant" onClick={() => radioClick('radio_other_quant')} />
                            </div>
                            <div className="row container-fluid d-flex justify-content-center pay-tdc-inputs-row disabled" id="other_quant">
                                <label htmlFor="quantPay" className="pay-tdc-input-label">Cantidad a pagar</label>
                                <input type="number" id="quant_pay" className="form-control" name="quantPay" placeholder="1577.50" min="1" max="9999999" step="0.01" />
                            </div>
                            <div className="row container-fluid d-flex justify-content-center pay-tdc-inputs-row">
                                <button type="button" className="btn text-light pay-btn" onClick={() => payTDC()}>Pagar</button>
                            </div>
                            <Modal id="id_modal" title="Operación completada" body="La operación fue completada con éxito." footerBtn="Aceptar" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PagarTarjetaCredito;