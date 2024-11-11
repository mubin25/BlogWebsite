import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../Images/img1.jpg'
import pic2 from '../Images/img4.jpeg'
import pic3 from '../Images/img3.jpeg'
import Card1 from './Card';

const Home = () => {
    const images = [pic1, pic2, pic3];
  return (
    <> 
    <div>
        <Carousel>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100 half-page-img"
                        src={image}
                        alt={`Slide ${index}`}
                    />
                    <Carousel.Caption>
                        {/*<h3></h3>*/}
                        <p className = "para-image">This is Beautiful Kashmir.  </p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
        <Card1/>
        </div>
    </>
  )
}

export default Home
