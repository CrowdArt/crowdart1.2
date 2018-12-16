import React from 'react';
import ReactDOM from 'react-dom';

const Season = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        err => console.log(err)
    );
    return(<div></div>);
}

export default Season;