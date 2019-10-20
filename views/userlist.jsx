var React = require('react');

class UserLists extends React.Component {
  render() {
    return (
      <html>
      <head>
        <title>User List</title>
        <link rel='stylesheet' href='/stylesheets/style.css' />
      </head>
      <body>
        <h1>User List</h1>
        <h1><p>{this.props.userlist[0].email}</p></h1>
      </body>
      </html>
    );
  }
}

module.exports = UserLists;