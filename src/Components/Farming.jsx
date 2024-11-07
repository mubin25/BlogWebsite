import React from "react";
import { Container, Card } from 'react-bootstrap';
import 'animate.css';

const Farm = () => {
  return (
    <>
      <div>
      <Container className="my-5">
      <Card className="p-4 shadow animate__animated animate__fadeIn ">
        <Card.Title className="text-center mb-3" style={{ fontSize: '2rem', fontWeight: 'bold', backgroundColor:'lightblue' }}>
          Farming in Kashmir
        </Card.Title>
        <p className="animate__animated animate__fadeInLeft" style={{ fontSize: '1.1rem' }}>
          Farming in Kashmir is central to the region’s economy and cultural
          heritage. Nestled in the Himalayas, Kashmir has a unique climate and
          geography that support diverse agricultural activities, ranging from
          rice and wheat cultivation to high-value horticulture like apples and
          saffron. The region's agriculture is heavily influenced by its
          seasons, with temperate weather and abundant rainfall, making it ideal
          for both traditional and cash crops.
        </p>
        <p className="animate__animated animate__fadeInRight" style={{ fontSize: '1.1rem' }}>
          Key Crops and Agricultural Products Rice and Maize: Rice is a staple
          food and is widely cultivated in the valley’s paddy fields. Maize,
          grown on the hilly slopes, is another essential crop, particularly in
          rural areas. Horticulture - Apples, Walnuts, and Pears: Kashmir is
          known for its apple orchards, which produce high-quality apples
          exported across India and internationally. Walnuts, almonds, and pears
          also thrive in the region's climate, contributing significantly to the
          economy. Saffron: Known as "Kashmiri Gold," saffron grown in Kashmir
          is among the finest in the world. The Pampore area, often referred to
          as the “saffron town,” produces high-quality saffron, which requires
          careful cultivation and harvesting. Vegetable Farming: A variety of
          vegetables, including potatoes, cauliflower, and leafy greens, are
          grown in Kashmir. Vegetable farming supports the local economy and
          provides food security for the population. Floriculture: The favorable
          climate supports flower cultivation, which is a growing industry.
          Flowers like marigold, tulip, and rose are not only aesthetically
          pleasing but also contribute to the region’s tourism and local
          markets.
        </p>
        <p className="animate__animated animate__fadeInLeft" style={{ fontSize: '1.1rem' }}>
          Challenges Climate Vulnerability: Unpredictable weather, including
          heavy snowfall and flash floods, can damage crops. Climate change
          poses a growing threat to the region’s agriculture. Infrastructure and
          Market Access: The mountainous terrain and limited infrastructure can
          make it difficult for farmers to transport their produce to markets.
          Government initiatives are working to improve storage facilities and
          transportation. Political Instability: Periodic political issues have
          impacted the agriculture sector, affecting trade, transportation, and
          investment. Pests and Crop Diseases: Farmers also face challenges from
          pests and diseases, which can spread quickly and damage crops,
          especially high-value horticulture like apples and saffron.
        </p>
        <p className="animate__animated animate__fadeInRight" style={{ fontSize: '1.1rem' }}>
          Government Support and Initiatives To support farmers, the government
          and local organizations provide subsidies for seeds, fertilizers, and
          modern farming equipment. Programs focused on organic farming, crop
          insurance, and farmer training aim to improve productivity and
          sustainability
        </p>
        </Card>
        </Container>
      </div>
    </>
  );
};

export default Farm;
