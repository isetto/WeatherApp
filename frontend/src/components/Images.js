import React, { Component } from 'react';

class Images extends Component {


    render() {
        const { state, cssClass } = this.props
        return (
            <div className={cssClass}>

                <div className="display" >

                    <figure>
                        <img src={require('../images/temp_cold.png')} alt=""></img>
                        <figcaption>Temp: {state.temp}C</figcaption>
                    </figure>

                </div>

                <div className="display" >

                    <figure>
                        <img src={require('../images/wind.svg')} alt=""></img>
                        <figcaption>Wind: {state.wind}m/s</figcaption>
                    </figure>

                </div>

                <div className="display" >

                    <figure>
                        <img src={require('../images/diver.svg')} alt=""></img>
                        <figcaption>Pressure: {state.pressure}hPa</figcaption>
                    </figure>

                </div>

                <div className="display" >

                    <figure>
                        <img src={require('../images/humidity.svg')} alt=""></img>
                        <figcaption>Humidity: {state.humidity}%</figcaption>
                    </figure>

                </div>


            </div>
        );
    }
}

export default Images;