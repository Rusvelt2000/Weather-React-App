var React = require('react');

var WeatherMessage = ({temp, location}) => {

  return (
    <div>
      <h4>The temperture is {temp} celsius in {location}</h4>
    </div>
  );
}

module.exports = WeatherMessage;
