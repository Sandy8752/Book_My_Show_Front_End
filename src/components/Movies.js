import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Image1 from "../images/Movies/1.avif";
import Image2 from "../images/Movies/2.avif";
import Image3 from "../images/Movies/3.avif";
import Image4 from "../images/Movies/4.avif";
import Image5 from "../images/Movies/5.avif";
import Image6 from "../images/Movies/6.avif";
import Image7 from "../images/Movies/7.avif";
import Image8 from "../images/Movies/8.avif";
import Image9 from "../images/Movies/9.avif";
import Image10 from "../images/Movies/10.avif";
import { Link } from "react-router-dom";
import React from "react";
function Movies() {
  return (
    <>
      <Carousel
        interval={null}
        style={{
          width: "1200px",
          marginTop: "50px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Carousel.Item>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={Image1} />
              <Card.Body>
                <Card.Title>RamSetu</Card.Title>
                <Card.Text>This is a wider card with supporting</Card.Text>
                <Link to="/bookingramsetu">
                  {" "}
                  <Button style={{ cursor: "pointer" }} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image2} />
              <Card.Body>
                <Card.Title>Black Panther</Card.Title>
                <Card.Text>This card has supporting</Card.Text>{" "}
                <Link to="/bookingblack">
                  {" "}
                  <Button style={{ cursor: "pointer" }} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image10} />
              <Card.Body>
                <Card.Title>The Menu</Card.Title>
                <Card.Text>This card has supporting</Card.Text>
                <Link to="/bookingthemenu">
                  {" "}
                  <Button style={{ cursor: "pointer" }} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image3} />
              <Card.Body>
                <Card.Title>Bhediya</Card.Title>
                <Card.Text>This is a wider card wit</Card.Text>
                <Link to="/bookingbhediya">
                  {" "}
                  <Button style={{ cursor: "pointer" }} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image4} />
              <Card.Body>
                <Card.Title>Drishyam 2</Card.Title>
                <Card.Text>This is a wider card with s</Card.Text>
                <Button style={{ cursor: "pointer" }} variant="danger">
                  {" "}
                  Book
                </Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>
        <Carousel.Item>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={Image5} />
              <Card.Body>
                <Card.Title>Uunchai</Card.Title>
                <Card.Text>This is a wider card with supp</Card.Text>
                <Link to="/bookinguunchai">
                  {" "}
                  <Button style={{ cursor: "pointer" }} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image9} />
              <Card.Body>
                <Card.Title>Smile</Card.Title>
                <Card.Text>This card has supporting text below</Card.Text>
                <Link to="/bookingsmile">
                  {" "}
                  <Button style={{ cursor: "pointer" }} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image6} />
              <Card.Body>
                <Card.Title>Sunny</Card.Title>
                <Card.Text>This is a wider card with supporting t</Card.Text>
                <Link to="/bookingsunny">
                  {" "}
                  <Button style={{ cursor: "pointer" }} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image7} />
              <Card.Body>
                <Card.Title>Kantara</Card.Title>
                <Card.Text>This is a wider card with supporting</Card.Text>
                <Link to="/bookingkantara">
                  {" "}
                  <Button style={{ cursor: "pointer" }} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Image8} />
              <Card.Body>
                <Card.Title>She Sad</Card.Title>
                <Card.Text>This is a wider card with supporting</Card.Text>
                <Link to="/bookingshesad">
                  {" "}
                  <Button style={{ cursor: "pointer" }} variant="danger">
                    {" "}
                    Book
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Movies;