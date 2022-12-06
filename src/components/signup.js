import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function SignUp() {
  const [username, setusername] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [password, setpassword] = useState("");
  const [city, setcity] = useState("");
  function username1(e) {
    setusername(e.target.value);
  }
  function password1(e) {
    setpassword(e.target.value);
  }

  function name1(e) {
    setname(e.target.value);
  }
  function email1(e) {
    setemail(e.target.value);
  }
  function number1(e) {
    setnumber(e.target.value);
  }
  function city1(e) {
    setcity(e.target.value);
  }

  let navigate = useNavigate();
  function submit(e) {
    e.preventDefault();
    axios
      .post("https://book-my-show-back-end.onrender.com/user", {
        name: name,
        password: password,
        email: email,
        city: city,
        number: number,
        username: username,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        "error";
      });
    let path = `/`;
    navigate(path);
  }

  return (
    <Form style={{ margin: "200px 200px 200px 200px" }}>
      <Row className="mb-3">
        <Form.Group onChange={email1} as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} onChange={password1} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Col xs="auto">
        <Form.Label
          onChange={username1}
          htmlFor="inlineFormInputGroup"
          visuallyHidden
        >
          Username
        </Form.Label>
        <InputGroup className="mb-2">
          <InputGroup.Text>@</InputGroup.Text>
          <Form.Control
            onChange={username1}
            id="inlineFormInputGroup"
            placeholder="Username"
          />
        </InputGroup>
      </Col>

      <Form.Group onChange={name1} className="mb-3" controlId="formGridName">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Enter your name..." />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group onChange={city1} as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group onChange={number1} as={Col} controlId="formGridNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button onClick={submit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}