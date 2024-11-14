import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Food from "../Images/food1.jpeg";
import pic2 from "../Images/card2.jpg";
import pic3 from "../Images/card3.jpg";
import { useNavigate } from "react-router-dom";

const Card1 = () => {
  const navigate = useNavigate();
  const goToFarming = () => {
    navigate("/Farming");
  };
  const goToTourism = () => {
    navigate("/Tourisim");
  };

  const goToFood = () => {
    navigate("/Food");
  };

  return (
    <>
      <h2 className="p-2 fw-bold">You can explore more Below: </h2>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={4} className="mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img className="img-card" variant="top" src={Food} />
              <Card.Body>
                <Card.Title>Food</Card.Title>
                <Card.Text>
                  Kashmiri cuisine is known for its aromatic spices, rich flavors, and unique dishes like Rogan Josh, Yakhni, and Dum Aloo. A highlight is the traditional...
                </Card.Text>
                <Button variant="primary" onClick={goToFood}>Go on Food in Kashmir</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img className="img-card" variant="top" src={pic2} />
              <Card.Body>
                <Card.Title>Tourism</Card.Title>
                <Card.Text>
                  Kashmir, often called "Paradise on Earth," is one of the most breathtakingly beautiful destinations in India, drawing tourists from around the world.
                </Card.Text>
                <Button variant="primary" onClick={goToTourism}>Go on Tourism</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Card style={{ width: "100%" }}>
              <Card.Img className="img-card" variant="top" src={pic3} />
              <Card.Body>
                <Card.Title>Farming</Card.Title>
                <Card.Text>
                  Farming in Kashmir is central to the region's economy and culture, with crops like rice, apples, walnuts, and saffron being staples.
                </Card.Text>
                <Button variant="primary" onClick={goToFarming}>Go On Farming</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Card1;