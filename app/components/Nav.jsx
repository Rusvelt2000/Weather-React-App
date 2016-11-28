var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return(
    <div className='top-bar'>
      <div className='top-bar-left'>
        <ul className='menu'>
          <li className='menu-text'>
            Catch The Weather
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
        <ul className='menu'>
          <li>
            <input type="search" placeholder="Search"/>
          </li>
          <li>
            <button type="button" class="button">Search</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

module.exports = Nav;
