var React = require('react');

class IndexPage extends React.Component {
  render() {
    return (
    <body><div>Hello {this.props.title} Welcome to Alpha7Shopping {this.props.titles} !</div>
    </body>
    );
  }
}

module.exports = IndexPage;