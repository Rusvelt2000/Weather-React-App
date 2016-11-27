var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return(
    <div>
      <h2>This is a Nav</h2>
      <IndexLink to='/' activeClassName='active'>Get weather</IndexLink>
      <Link to='/about' activeClassName='active'>About</Link>
      <Link to='/explore' activeClassName='active'>Explore</Link>
    </div>
  );
}

module.exports = Nav;
