import React from "react";
import { Container, Card } from "react-bootstrap";
import tourisim1 from "../Images/Tourisim1.jpg";
import Tourisim2 from "../Images/Tourisim2.jpg";

const Tourisim = () => {
  return (
    <>
      <div className="container">
        <Container className="my-5">
          <Card className="p-4 shadow animate__animated animate__fadeIn ">
            <Card.Title
              className="text-center mb-3"
              style={{ fontSize: "2rem", fontWeight: "bold" }}
            >
              Tourisim in Kashmir
            </Card.Title>
            <div className=" ">
              <img
                src={tourisim1}
                alt="tourisim kashmir"
                className="p-3 img-fluid rounded shadow-sm"
              />
            </div>
            <p className="food-para">
              Kashmir, often called "Paradise on Earth," is one of the most
              breathtakingly beautiful destinations in India, drawing tourists
              from around the world. Known for its stunning landscapes, pristine
              lakes, lush valleys, and snow-capped mountains, Kashmir offers a
              diverse range of attractions and experiences. Key destinations
              include the serene Dal Lake, where visitors can enjoy houseboat
              stays and shikara rides, the breathtaking meadows of Gulmarg for
              skiing and winter sports, and Pahalgam, known for its riverside
              views and trekking trails.
            </p>
            <p className="food-para">
              The vibrant culture, warm hospitality, and unique handicrafts like
              Pashmina shawls and intricate woodwork add to the charm of
              Kashmir, giving visitors a glimpse of the rich heritage of the
              region. Adventure seekers can indulge in activities like trekking,
              river rafting, and paragliding, while those seeking relaxation can
              find peace in the serene landscapes and traditional gardens like
              Shalimar Bagh and Nishat Bagh in Srinagar.
            </p>
            <div className=" ">
              <img
                src={Tourisim2}
                alt="tourisim kashmir"
                className="p-3 img-fluid rounded shadow-sm"
              />
            </div>
            <p className="food-para">
              Tourism in Kashmir plays a crucial role in the local economy,
              supporting many businesses and communities. Although the region
              has faced challenges, ongoing efforts to enhance safety and
              infrastructure continue to make Kashmir a welcoming and accessible
              destination for travelers looking to experience its natural
              beauty, cultural richness, and tranquil ambiance.
            </p>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Tourisim;
