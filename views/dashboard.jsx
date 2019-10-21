var React = require("react");

class UserDashboard extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Login</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        </head>
        <body>
          <h1>DASHBOARD</h1>
          <h1>Welcome to Alpha Se7en Shopping! {this.props.user}</h1>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxrqarInnJHzJfv1MCIKk_79EKZLYrZOaiYWRlVRscBpK65GZm" alt="Flowers in Chania" width="460" height="345"></img>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjb9ccUsFR3-Ou7Kt4zuFk4HgQp0VquskZUg92GzeuQn_l9Yqk" alt="Flowers in Chania" width="460" height="345"></img>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5QMFn_ptSSm9zN9CwjLw2s5WZ_98uSUg-AjSk-PJzrEswYETD" alt="Flowers in Chania" width="460" height="345"></img>
          <form id="redirect" name="redirect" method="get" action="/signout">
            <button style={{marginLeft: "34%",position: "absolute",marginBottom:0}} class="btn btn-primary">Signout</button>
          </form >
        </body>
      </html>
    );
  }
}

module.exports = UserDashboard;
