import React, { Component } from 'react';
import ToggleButton from 'react-toggle-button';

class ToggleChart extends Component {

    render() {
        const { state, toggle } = this.props
        return (
            <div className="toggles">
                <span className="toggle">Hide:</span>
                <span className="toggle"></span>
                <ToggleButton
                    value={state.tempToggle || false}
                    onToggle={(value) => { toggle(value, "tempToggle") }} />

                <span className="toggle" ></span>
                <ToggleButton
                    value={state.tempMaxToggle || false}
                    onToggle={(value) => { toggle(value, "tempMaxToggle") }} />

                <span className="toggle"></span>
                <ToggleButton
                    value={state.tempMinToggle || false}
                    onToggle={(value) => { toggle(value, "tempMinToggle") }} />
            </div>
        );
    }
}

export default ToggleChart;