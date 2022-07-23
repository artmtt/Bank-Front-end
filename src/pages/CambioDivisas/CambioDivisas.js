import './CambioDivisas.css';
import Navbar from '../../components/Navbar/Navbar';
import DivisasBox from '../../components/DivisasBox/DivisasBox';
import personDataBg from '../../assets/person-data-bg.jpg';

function CambioDivisas() {
    document.title = "Banorte | Cambio de Divisas";
    return (
        <>
            <Navbar />
            <div className="bg-container">
                <img src={personDataBg} alt="Cambio de Divisas Persona" className="bg-img" />
            </div>
            <div className="container-fluid cambio-de-divisas-content">
                <h1 className="front-title">Cambio de Divisas</h1>
                <DivisasBox />
            </div>
        </>
    );   
}

export default CambioDivisas;