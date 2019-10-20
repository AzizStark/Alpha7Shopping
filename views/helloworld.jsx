var React = require('react');

class HelloWorld extends React.Component {
  render() {
    return (
      <html>
        <head><title>{this.props.title}</title></head>
        <body>Welcome to {this.props.title}</body>
      </html>
    );
  }
}

module.exports = HelloWorld;