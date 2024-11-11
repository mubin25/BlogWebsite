import React from "react";
import { Card, Container } from "react-bootstrap";
import movie from "../Images/Movie1.jpg";
import movie2 from "../Images/Movie2.jpg";

const Movie = () => {
  return (
    <>
      <div>
        <Container className="my-5">
          <Card className="p-4 shadow animate__animated animate__fadeIn ">
            <Card.Title
              className="text-center mb-3 food-para"
              style={{ fontSize: "2rem", fontWeight: "bold" }}
            >
              Movie Shooting in Kashmir
            </Card.Title>
            <div className=" ">
              <img
                src={movie}
                alt="movie in kashmir"
                className="p-3 img-fluid rounded shadow-sm"
              />
            </div>
            <p className="food-para " style={{ fontSize: "1.1rem" }}>
              Kashmir, with its breathtaking landscapes and snow-capped
              mountains, has long been a favored location for filmmakers. Over
              the decades, numerous Bollywood movies have showcased the beauty
              of Kashmir, from classic films like Kashmir Ki Kali to recent
              projects that highlight its serene valleys and cultural richness.
              Despite periods of turmoil, Kashmir’s scenic charm remains
              unparalleled, attracting filmmakers from around the world who wish
              to capture its natural allure. Films shot in this region not only
              celebrate the picturesque environment but often delve into themes
              of love, resilience, and the rich cultural heritage of the
              Kashmiri people.
            </p>
            <div className=" ">
              <img
                src={movie2}
                alt="movie in kashmir"
                className="p-3 img-fluid rounded shadow-sm"
              />
            </div>
            <p className="food-para" style={{ fontSize: "1.1rem" }}>
              Kashmir has always been a highly sought after film location in
              India, and has always attracted film makers, producers, directors
              and actors. Bollywood’s love affair with Kashmir began from the
              1960’s, when several movies like Himalaya Ki God Mein, Jab Jab
              Phool Khile, Kashmiri ki Kali and Janwar were some of the popular
              films shot in Jammu and Kashmir. Not only did the pristine alpine
              location play a large role in contributing to their success, but
              also increased Kashmir’s popularity as a shooting location.
            </p>
            <div className=" ">
              <img
                src={movie2}
                alt="movie in kashmir"
                className="p-3 img-fluid rounded shadow-sm"
              />
            </div>
            <p className="food-para">
              The valley is considered to be a fitting backdrop for romantic
              movies. Many romantic Bollywood flicks have been shot in valley
              among which Kashmir Ki Kali, Jungle, Jab Jab Phool Khile, Kabhi
              Kabhi, Bobby, Silsila are famous ones. Recently movies like Jab
              Tak Hain Jaan, Ye Jawani Hain Deewani, Rockstar, Highway, Haider,
              Bhajrangi Baijaan have also been shot in Kashmir.
            </p>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Movie;
