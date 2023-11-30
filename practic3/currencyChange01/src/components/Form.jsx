import React from 'react';

function Form(props) {
    return (
        <div>
            <form>
                <div>
                    <label>Currency: </label>
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <input type="number" />
                </div>

                <div>
                    <label>Currency: </label>
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <input type="number" />
                </div>
                <button type="button">Convert</button>
            </form>
        </div>
    );
}

export default Form;