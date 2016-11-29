var React = require('react');
var {Link} = require('react-router');

var Explore = (props) => {
  return (
    <div>
      <h1>Explore</h1>
      <p>Here you can explore anything you'd ever wish to explore in your whole life, get your luggages on and enjoy the trip!</p>
      <ol>
        <li className='text-left'>
          <Link to='/?location=Viterbo'>Viterbo, Italy</Link>
        </li>
        <li className='text-left'>
          <Link to='/?location=Brisbane'>Brisbane, QLD</Link>
        </li>
        <li className='text-left'>
          <Link to='/?location=Sydney'>Sydney, NSW</Link>
        </li>
        <li className='text-left'>
          <Link to='/?location=Perth'>Perth, WA</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Explore;
