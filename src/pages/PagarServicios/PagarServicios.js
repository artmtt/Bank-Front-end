import './PagarServicios.css';
import ATTLogo from '../../assets/att_logo.png';
import CFELogo from '../../assets/cfe_logo.png';
import CinepolisLogo from '../../assets/cinepolis_logo.png';
import MovistarLogo from '../../assets/movistar_logo.png';
import NetflixLogo from '../../assets/netflix_logo.png';
import TelcelLogo from '../../assets/telcel_logo.png';
import TelmexLogo from '../../assets/telmex_logo.png';
import TotalplayLogo from '../../assets/totalplay_logo.png';
import HbomaxLogo from '../../assets/hbomax_logo.png';
import Navbar from '../../components/Navbar/Navbar.js';
import ImageButton from '../../components/ImageButton/ImageButton';
import Modal from '../../components/Modal/Modal.js';
import PagarServiciosCompaniesInfo from './PagarServiciosCompaniesInfo.js';

function setConvenio(company_btn) {
    const numConv = document.getElementById('num_convenio');
    if(numConv !== null) {
        const code = PagarServiciosCompaniesInfo.get(company_btn);
        numConv.value = code;
    }
}

// Esto debe realizar la transacción en back end
function payService() {
    const numConv = document.getElementById('num_convenio'),
        quantPay = document.getElementById('quant_pay'),
        conceptoPay = document.getElementById('concepto_pay');
    if(numConv !== null && quantPay !== null && conceptoPay !== null) {
        let success = true, code = Number(numConv.value);
        if(isNaN(code) || Number.isInteger(code) === false || parseInt(code) < 0 || quantPay.value === '' || parseFloat(quantPay.value) <= 0 || numConv.value.length !== 7) success = false;
        const modal = document.getElementById('id_modal'),
            modal_title = document.getElementById('id_modal_title'),
            modal_body = document.getElementById('id_modal_body');
        modal.style.display = "block";
        if(success === true) {
            modal_title.innerText = "Operación completada";
            modal_body.innerText = "La operación fue completada con éxito.";
            numConv.value = '';
            quantPay.value = '';
            conceptoPay.value = '';
        } else {
            modal_title.innerText = 'Operación errónea';
            modal_body.innerText = 'La operación no pudo ser completada, revise los datos ingresados.';
        }
    }
}

function PagarServicios() {
    document.title = "Banorte | Pagar Servicios";
    return(
        <>
            <Navbar />
            <div className="row container-fluid d-flex justify-content-center">
                <h1 className="servicios-title">Pagar Servicios</h1>
                <div className="row gallery-container">
                    <ImageButton id="cfe_btn" src={CFELogo} alt="CFE logo" onClick={() => setConvenio('cfe')} />
                    <ImageButton id="telmex_btn" src={TelmexLogo} alt="Telmex logo" onClick={() => setConvenio('telmex')} />
                    <ImageButton id="totalplay_btn" src={TotalplayLogo} alt="Totalplay logo" onClick={() => setConvenio('totalplay')} />
                    <ImageButton id="att_btn" src={ATTLogo} alt="AT&T logo" onClick={() => setConvenio('att')} />
                    <ImageButton id="telcel_btn" src={TelcelLogo} alt="Telcel logo" onClick={() => setConvenio('telcel')} />
                    <ImageButton id="movistar_btn" src={MovistarLogo} alt="Movistar logo" onClick={() => setConvenio('movistar')} />
                    <ImageButton id="hbomax_btn" src={HbomaxLogo} alt="HBO Max logo" onClick={() => setConvenio('hbomax')} />
                    <ImageButton id="netflix_btn" src={NetflixLogo} alt="Netflix logo" onClick={() => setConvenio('netflix')} />
                    <ImageButton id="cinepolis_btn" src={CinepolisLogo} alt="Cinepolis logo" onClick={() => setConvenio('cinepolis')} />
                </div>
            </div>
            <div className="row container-fluid d-flex justify-content-center pre-pay-services-inputs">
                <div className="pay-services-inputs">
                    <div className="row container-fluid d-flex justify-content-center pay-services-inputs-row">
                        <label htmlFor="numConvenio" className="pay-services-input-label">Número de convenio</label>
                        <input type="number" id="num_convenio" className="form-control" name="numConvenio" placeholder="0743218" min="1" max="9999999" />
                    </div>
                    <div className="row container-fluid d-flex justify-content-center pay-services-inputs-row">
                        <label htmlFor="quantPay" className="pay-services-input-label">Cantidad a pagar</label>
                        <input type="number" id="quant_pay" className="form-control" name="quantPay" placeholder="100.50" min="1" max="9999999" step="0.01" />
                    </div>
                    <div className="row container-fluid d-flex justify-content-center pay-services-inputs-row">
                        <label htmlFor="concepto" className="pay-services-input-label">Concepto</label>
                        <input type="text" id="concepto_pay" className="form-control" name="concepto" placeholder="Pago de suscripción" />
                    </div>
                    <div className="row container-fluid d-flex justify-content-center pay-services-inputs-row">
                        <button type="button" className="btn text-light pay-btn" onClick={() => payService()}>Pagar</button>
                    </div>
                </div>
            </div>
            <Modal id="id_modal" title="Operación completada" body="La operación fue completada con éxito." footerBtn="Aceptar" />
        </>
    );
}

export default PagarServicios;