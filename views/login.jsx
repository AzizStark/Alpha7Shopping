//import '../public/stylesheets/login.css';

var React = require('react');

class UserSignup extends React.Component {
  render() {
    return (
      <html>
        <head><title>Login</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        </head>

        <div style={{margin: "auto",marginTop: "14%",width: 300}}>
        <h5 style={{textAlign:"center",width: 300}}>Alpha7Shopping Login</h5>
        <form id="formAddUser" name="adduser" method="post" action="/userlogin">
          <input class="form-control" style={{width: 300}} id="inputUserName" type="email" placeholder="email" name="usermail" /> < br/>
          <input class="form-control" style={{width: 300}} id="inputUserEmail" type="password" placeholder="password" name="password" /> < br/>
          <button id="btnSubmit" style={{marginLeft: "36%"}}  class="btn btn-primary" type="submit">Login</button>
       </form> < br/>
       <form id="redirect" name="redirect" method="get" action="/auth/google">
       <button style={{marginLeft: "20%"}} class="btn btn-primary">Signin with google</button> < br/>
       </form> < br/>
       <form id="oauth" name="oauth" method="get" action="/signup"> 
       <button style={{marginLeft: "34%"}} class="btn btn-primary">Sign Up</button> < br/>
       </form>
    
       </div>
      </html>
    );
  }
}

module.exports = UserSignup;