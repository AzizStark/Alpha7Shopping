var React = require('react');

class UserSignup extends React.Component {
  render() {
    return (
      <html>
        <head><title>Signup</title>
        </head>
        <body>Signup</body>
        <form id="formAddUser" name="adduser" method="post" action="/adduser">
          <input id="inputUserName" type="text" placeholder="username" name="username" required/> < br/>
          <input id="inputUserEmail" type="email" placeholder="email" name="useremail" required/>< br/>
          <input id="inputUserEmail" type="password" placeholder="password" name="password" required/> < br/>
          <button id="btnSubmit" type="submit">Sign Up</button>
       </form>
       <form id="redirect" name="redirect" method="get" action="/login">
       <button>See Login Options</button>
       </form>
      </html>
    );
  }
}

module.exports = UserSignup;