import React from "react";
import styledComponents from "styled-components";
import Fade from 'react-reveal/Fade';

const Section = ({title, description, leftbtn, rightbtn, backgroundImg}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
      <ItemText>
        <h1 className="text-4xl font-bold" > {title}</h1>
        <p>{description}</p>
      </ItemText>
      </Fade>
      <Button>
      <Fade bottom>
        <ButtonGroup>
          <LeftButton className="border-white" >{leftbtn}</LeftButton>
          {rightbtn && 
           <RightButton>{rightbtn}</RightButton>
          }
        </ButtonGroup>
        <DownArrow src='/images/down-arrow.svg' className="animate-bounce"></DownArrow>
      </Fade>
      </Button>
    </Wrap>
  );
};

export default Section;

const Wrap = styledComponents.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between; // vertical
    align-items: center; // horizontal
`;
const ItemText = styledComponents.div`
    padding-top: 15vh;
    text-align: center;
`;
const ButtonGroup = styledComponents.div`
    display: flex;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
`;
const LeftButton = styledComponents.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex; 
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`;
const RightButton = styledComponents(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.65
`;
const DownArrow = styledComponents.img`
    height: 40px;
    overflow-x: hidden;
    // animation: animateDown infinite 1.5s;
`;
const Button = styledComponents.div`
    display: flex;
    flex-direction: column;    
    align-items: center;
    margin-bottom: 10px;
`;
