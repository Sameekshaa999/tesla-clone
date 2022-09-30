import React from 'react';
import Section from './Section';
// import styledComponents from 'styled-components';
// import { Container } from 'postcss';

const Home = () => {
  return (
    <div>
        <Section
          title= "Model S"
          description= "Order Online for Touchless Delivery"
          backgroundImg= "model-s.jpg"
          leftbtn= "Custom Order"
          rightbtn= "Existing Inventory"
        />
        <Section
          title= "Model Y"
          description= "Order Online for Touchless Delivery"
          backgroundImg= "model-y.jpg"
          leftbtn= "Custom Order"
          rightbtn= "Existing Inventory"
        />
        <Section
          title= "Model 3"
          description= "Order Online for Touchless Delivery"
          backgroundImg= "model-3.jpg"
          leftbtn= "Custom Order"
          rightbtn= "Existing Inventory"
        />
        <Section
          title= "Model X"
          description= "Order Online for Touchless Delivery"
          backgroundImg= "model-x.jpg"
          leftbtn= "Custom Order"
          rightbtn= "Existing Inventory"
        />
        <Section
          title= "Solar Panels"
          description= "Lowest Cost Panels in America"
          backgroundImg= "solar-panel.jpg"
          leftbtn= "Order Now"
          rightbtn= "Learn More"
        />
        <Section
          title= "Solar Roof"
          description= "Produce Clean Energy From Your Roof"
          backgroundImg= "solar-roof.jpg"
          leftbtn= "Order Now"
          rightbtn= "Learn More"
        />
        <Section
          title= "Accessories"
          backgroundImg= "accessories.jpg"
          leftbtn= "Shop Now"
        />
    </div>
  )
}

export default Home;



