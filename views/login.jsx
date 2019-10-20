var React = require('react');

class UserSignup extends React.Component {
  render() {
    return (
      <html>
        <head><title>Login</title>
        </head>
        <body>Login</body>
        <form id="formAddUser" name="adduser" method="post" action="/userlogin">
          <input id="inputUserName" type="email" placeholder="email" name="usermail" /> < br/>
          <input id="inputUserEmail" type="password" placeholder="password" name="password" /> < br/>
          <button id="btnSubmit" type="submit">Login</button>
       </form>
       <form id="redirect" name="redirect" method="get" action="/auth/google">
       <button>Signin with google</button>
       </form>
       <form id="oauth" name="oauth" method="get" action="/auth/google">
       <button>Sign Up</button>
       </form>
      </html>
    );
  }
}

module.exports = UserSignup;