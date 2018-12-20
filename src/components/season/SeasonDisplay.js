import './SeasonDisplay.css';
import React from 'react';

//configuration object
const seasonConfig = {
  summer: {
    text: 'Summertime',
    iconName: 'sun'
  },
  winter: {
    text: 'Cold',
    iconName: 'snow'
  }
};

//function that we will call with current lattitude and month
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; //seasonConfig[season] will returns object { text, iconName }

  console.log(season);
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
