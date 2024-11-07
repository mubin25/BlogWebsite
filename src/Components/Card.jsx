import React from "react";
import Button from "react-bootstrap/Button";
// import Farm from "./Farming";
import Card from "react-bootstrap/Card";
import pic1 from "../Images/img2.jpg";
import pic2 from "../Images/card2.jpg";
import pic3 from "../Images/card3.jpg";
import { useNavigate } from "react-router-dom";

const Card1 = () => {
    const navigate = useNavigate();
    const goToFarming = () =>{
       navigate('/Farming')
    }
  return (
    <>
      <h2>Some Other Place to Visit</h2>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pic1} />
            <Card.Body>
              <Card.Title>Manovier Trek</Card.Title>
              <Card.Text>
                This is most famous trek in Kashmir to do in Winter unlike other
                locations it is not over croweded you can feel here real sense
                of nature.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pic2} />
            <Card.Body>
              <Card.Title>Narang in JK</Card.Title>
              <Card.Text>
                This is most famous trek in Kashmir to do in Winter unlike other
                locations it is not over croweded you can feel here real sense
                of nature.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pic3} />
            <Card.Body>
              <Card.Title>Farming</Card.Title>
              <Card.Text>
                Farming in Kashmir is central to the region's economy and
                culture, with crops like rice, apples, walnuts, and saffron
                being staples. The fertile valleys and favorable climate support
                diverse agriculture, from rice paddies in lowland areas to apple
                orchards and saffron fields in higher altitudes. However,
                challenges such as unpredictable weather, limited
                infrastructure, and geopolitical issues impact productivity.
              </Card.Text>
              <Button variant="primary" onClick={goToFarming}>Go On Farming</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Card1;
