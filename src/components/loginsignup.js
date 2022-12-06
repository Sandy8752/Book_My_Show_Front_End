import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [afterlogin, setafterlogin] = useState("");

  function username1(e) {
    setusername(e.target.value);
  }
  function password1(e) {
    setpassword(e.target.value);
  }
  function submit(e) {
    e.preventDefault();
    axios
      .post("https://book-my-show-back-end.onrender.com//login", {
        username: username,
        password: password,
      })
      .then((response) => {
       setafterlogin(response.data);
      })
  }
  return (
    <Form
      style={{
        width: "700px",
        margin: "auto auto",
        backgroundColor: "black",
        padding: "50px 50px 50px 50px",
        borderRadius: "10px",
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={username1}
          type="nme"
          placeholder="Enter Username"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={password1}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submit}>
        Submit
      </Button>
      
      <Link to="/signup">
        <Button style={{ marginLeft: "10px" }} variant="secondary">
          SignUp
        </Button>
      </Link>
      <div>{afterlogin}</div>
    </Form>
  );
}