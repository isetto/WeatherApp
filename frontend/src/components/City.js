import React, { Component } from 'react';

class City extends Component {

    render() {
        const { handleInput, state } = this.props
        return (

            <div className="flex">
                <select name="city"
                    onChange={handleInput}
                    className="form-control input-sm"
                    style={{ width: 320 }}
                    value={state.city}
                >
                    <option value="Krakow">Krakow</option>
                    <option value="Gdynia">Gdynia</option>
                    <option value="Olsztyn">Olsztyn</option>
                    <option value="Wroclaw">Wroclaw</option>
                    <option value="Gdansk">Gdansk</option>
                    <option value="Warszawa">Warszawa</option>
                    <option value="Szczecin">Szczecin</option>
                    <option value="Opole">Opole</option>
                    <option value="skała">skała</option>
                </select>
                <h2 className="color">{state.city}</h2>
            </div>
        );
    }
}

export default City;