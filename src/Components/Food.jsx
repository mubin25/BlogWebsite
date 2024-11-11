import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import food from "../Images/food1.jpeg";
import { Card, Container } from "react-bootstrap";

const Food = () => {
  return (
    <>
      <div className="container">
        <Container className="my-5">
          <Card className="p-4 shadow animate__animated animate__fadeIn ">
            <Card.Title
              className="text-center mb-3 text-danger"
              style={{ fontSize: "2rem", fontWeight: "bold" }}
            >
              Kashmiri cuisine{" "}
            </Card.Title>
          </Card>
          <div className="row align-items-center">
            <div className=" ">
              <img
                src={food}
                alt="kashmiri food"
                className="p-3 img-fluid rounded shadow-sm"
              />
            </div>
            <div className="food-para">
              <p>
                Kashmiri cuisine is a celebration of rich flavors, aromatic
                spices, and unique ingredients that reflect the region’s
                cultural heritage and diverse influences. Known for its use of
                saffron, fennel, dry ginger, and cardamom, Kashmiri dishes bring
                a unique warmth and depth to each meal. Iconic dishes include
                Rogan Josh, a robust lamb curry; Yakhni, a subtle yogurt-based
                mutton curry; and Dum Aloo, spicy potatoes cooked to perfection.
                Central to Kashmiri hospitality is the traditional Wazwan, a
                multi-course feast that showcases the art and intricacy of
                Kashmiri cooking. Each dish in this cuisine is a flavorful
                tribute to the region’s history and traditions.
              </p>
            </div>
          </div>
          <div className="food-para">
            <p>
              Kashmiri cuisine stands out not only for its flavors but also for
              its deep-rooted traditions and cultural significance. Influenced
              by Persian, Afghan, and Central Asian culinary styles, it has
              developed into a unique gastronomic experience that emphasizes
              both flavor and presentation. The use of spices like fennel,
              ginger, and cloves, alongside rich ingredients like yogurt and
              ghee, gives the dishes a distinctive taste profile that balances
              warmth and subtlety.
            </p>
          </div>
          <div className="food-para">
            <p>
              Vegetarian dishes are also an essential part of the cuisine, with
              classics like Nadru Yakhni (lotus stems in yogurt gravy) and Haak
              (Kashmiri greens) showcasing the region’s agricultural abundance.
              Enjoyed with traditional bread like sheermal or lavasa and often
              concluded with a warming cup of Kahwa (a saffron and
              almond-infused green tea), Kashmiri cuisine offers a multisensory
              journey through flavors, textures, and a rich culinary heritage.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Food;
