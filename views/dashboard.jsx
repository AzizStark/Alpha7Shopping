var React = require("react");

class UserDashboard extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Login</title>
        </head>
        <body>
          <h1>DASHBOARD</h1>
          <h1>Welcome to Alpha Se7en Shopping! Mr.{this.props.user}</h1>
          <form id="redirect" name="redirect" method="get" action="/signout">
            <button>Signout</button>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = UserDashboard;
