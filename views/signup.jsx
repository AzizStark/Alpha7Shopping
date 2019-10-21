var React = require('react');

class UserSignup extends React.Component {
  render() {
    return (
      <html>
        <head><title>Signup</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        </head>
        <div style={{margin: "auto",marginTop: "14%",width: 300}}>
        <h5 style={{textAlign:"center",width: 300}}>Alpha7Shopping Signup</h5>
        <form id="formAddUser" name="adduser" method="post" action="/adduser">
          <input  class="form-control" style={{width: 300}} id="inputUserName" type="text" placeholder="username" name="username" required/> < br/>
          <input   class="form-control" style={{width: 300}}id="inputUserEmail" type="email" placeholder="email" name="useremail" required/>< br/>
          <input   class="form-control" style={{width: 300}} id="inputUserEmail" type="password" placeholder="password" name="password" required/> < br/>
          <button button style={{marginLeft: "35%"}} class="btn btn-primary" id="btnSubmit" type="submit">Sign Up</button>
       </form>
       <form id="redirect" name="redirect" method="get" action="/login"> < br/>
       <button button style={{marginLeft: "23%"}} class="btn btn-primary">See Login Options</button>
       </form>
       </div>
      </html>
    );
  }
}

module.exports = UserSignup;