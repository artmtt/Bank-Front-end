import './DivisasBox.css';
import DivisasValue from './DivisasValue.js';

const curr_date = new Date();

function get_currency_change() {
    const from_select = document.getElementById('from_select'),
    to_select = document.getElementById('to_select'),
    from_quant = document.getElementById('from_currency'),
    to_quant = document.getElementById('to_currency');
    
    if(from_select !== null && to_select !== null && from_quant !== null && to_quant !== null) {
        const currency_len = to_select.options.length;
        if(to_select.value !== 'usd' && from_select.value === to_select.value) to_select.value = 'usd';
        else if(from_select.value === to_select.value) to_select.value = 'eur';
        for(let i=0; i<currency_len; i++) {
            if(to_select.options[i].value === from_select.value) to_select.options[i].disabled = true;
            else to_select.options[i].disabled = false;
        }
        const ans = from_quant.value * DivisasValue.get(from_select.value).get(to_select.value);
        to_quant.innerText = parseFloat(ans.toFixed(2)).toLocaleString();
    }
}

function swap_divisas() {
    const from_select = document.getElementById('from_select'),
    to_select = document.getElementById('to_select');
    if(from_select !== null && to_select !== null) {
        [from_select.value, to_select.value] = [to_select.value, from_select.value];
        get_currency_change();
    }
}

function DivisasBox() {
    return(
        <div className="row d-flex justify-content-center">
            <div className="card divisas-box">
                <div className="post-divisas-box">
                    <div className="card currency-box">
                        <select name="from-currency" id="from_select" className="currency-select" defaultValue="mxn" onChange={() => get_currency_change()}>
                            <option value="mxn">Peso Mexicano (MXN)</option>
                            <option value="usd">Dólar Estadounidense (USD)</option>
                            <option value="eur">Euro (EUR)</option>
                            <option value="gbp">Libra Esterlina (GBP)</option>
                            <option value="jpy">Yen Japonés (JPY)</option>
                        </select>
                        <div className="currency-box-pre-number">
                            <input type="number" className="col-10 from-currency-box-number" id="from_currency" defaultValue="1.00" step="0.01" min="0" onChange={() => get_currency_change()} />
                        </div>
                    </div>
                    <div className="divisas-swap">
                        <button type="button" className="btn divisas-swap-btn" onClick={() => swap_divisas()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#eb0029" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="card currency-box">
                        <select name="to-currency" id="to_select" className="currency-select" defaultValue="usd" onChange={() => get_currency_change()}>
                            <option value="mxn" disabled>Peso Mexicano (MXN)</option>
                            <option value="usd">Dólar Estadounidense (USD)</option>
                            <option value="eur">Euro (EUR)</option>
                            <option value="gbp">Libra Esterlina (GBP)</option>
                            <option value="jpy">Yen Japonés (JPY)</option>
                        </select>
                        <p className="to-currency-box-number" id="to_currency">0.05</p>
                    </div>
                </div>
                <div className="d-flex flex-row-reverse current-time">
                    <span className="text-secondary">{curr_date.getDate()}/{curr_date.getMonth() + 1}/{curr_date.getFullYear()} {curr_date.getHours()}:{curr_date.getMinutes()}</span>
                </div>
            </div>
        </div>
    );
}

export default DivisasBox;