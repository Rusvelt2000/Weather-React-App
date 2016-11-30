var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ModalError = React.createClass({


  getDefaultProps: function() {
    return {
      title: 'City not found',
      message: 'Try out a new search'
    }
  },
  propTypes: {
    title : React.PropTypes.string,
    message : React.PropTypes.string.isRequired
  },
  componentDidMount: function() {
    var {title, message} = this.props;

    var modalMarkup = (
      <div className="reveal text-center tiny" id="error-modal" data-reveal=''>
        <h2>{title}</h2>
        <p>{message}</p>
        <button className="button" data-close='' aria-label="Close modal" type="button">
          <span aria-hidden="true">Okay</span>
        </button>
      </div>
    );


    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },

render: function() {
    return (
      <div>
      </div>
    );


  }
});

module.exports = ModalError;
