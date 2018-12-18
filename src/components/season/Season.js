import React from 'react';
import ReactDOM from 'react-dom';

class Season extends React.Component {
    constructor(props) {
        super(props);

        //this is the only time we do direct assignment to this.state for state object
        //this.state is a property
        //other then initilizing the state object never do a direct assignment to it
        // when we intializing the state object inside the constructor function you can do a direct assignment
        this.state = { lat: null, errorMessage: '' };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            //callback function
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    //In React we must define render method!
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (this.state.lat && !this.state.errorMessage) {
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading</div>
    }
}

export default Season;