var React = require('react');

var ModalError = React.createClass({
  componentDidMount: function() {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  getDefaultProps: function() {
    return {
      title: 'City not found'
    };
  },
  propTypes: {
    title : React.PropTypes.string,
    message : React.PropTypes.string.isRequired
  },
  render: function() {
    var {title, message} = this.props;

    return (
      <div className="reveal text-center tiny" id="error-modal" data-reveal=''>
        <h2>{title}</h2>
        <p>{message}</p>
        <button className="button" data-close='' aria-label="Close modal" type="button">
          <span aria-hidden="true">Okay</span>
        </button>
      </div>
    );
  }
});

module.exports = ModalError;
