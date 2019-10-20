var React = require('react');

class IndexPage extends React.Component {
  render() {
    return (
    <body><div>Hello {this.props.title} HEHE and {this.props.titles}</div>
    </body>
    );
  }
}

module.exports = IndexPage;