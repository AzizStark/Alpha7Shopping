var React = require('react');

class ErrorPage extends React.Component {
  render() {
    return (
      <html>
        <head><title>{this.props.message}</title></head>
        <body>{this.props.children}
        <h1>{ this.props.message }</h1>
        <h2>{ this.props.error.status }</h2>
        <pre>{ this.props.error.stack }</pre> 
        </body>
      </html>
    );
  }
}

module.exports = ErrorPage;