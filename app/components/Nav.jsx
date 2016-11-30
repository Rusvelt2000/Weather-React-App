var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();

    var location = this.refs.location.value;
    var encodedLocation = encodeURIComponent(location);

    if(location.length > 0) {
      this.refs.location.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function() {
    return(
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'>
              GetWeather.com
            </li>
            <li>
              <IndexLink to='/' activeClassName='active'>Get weather</IndexLink>
            </li>
            <li>
              <Link to='/about' activeClassName='active'>About</Link>
            </li>
            <li>
              <Link to='/explore' activeClassName='active'>Explore</Link>
            </li>
          </ul>
        </div>
        <div className='top-bar-right'>
          <form onSubmit={this.onSearch}>
            <ul className='menu'>
              <li className='search'>
                <input type='search' ref='location' placeholder='Search for weather'/>
              </li>
              <li>
                <button type='submit' className='button'>Get Weather</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
