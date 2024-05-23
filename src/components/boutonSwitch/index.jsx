import React from 'react';
import monitor from './monitor.png';
import video from './video-circle.png';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: none;
`;

const SwitchButtonWrapper = styled.div`
  position: fixed;
  width: 120px;
  top: 5%;
  z-index: 100;
  height: 60px;
  background-color: #2E2E2E;
  border-radius: 35px;
  border: solid 1px #2E2E2E;
  cursor: pointer;
  overflow: hidden;
  box-shadow: inset 6px 6px 5px #252525, inset -1px -2px 5px #373737, 1px 2px 4px #252525, -2px -1px 4px #373737;

  @media (max-width: 768px) {
    width: 100px;
    height: 50px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 40px;
  }

  opacity: 0;
  transform: translateY(-50px);
  animation: fadeInUp 1s ease-out forwards;
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ButtonSlider = styled.div.attrs(props => ({
  style: {
    left: props.isPageOne ? '0' : 'calc(100% - 61px)',
  }
}))`
  position: absolute;
  border: 0px;
  top: 0;
  width: 45px;
  margin: 3px;
  height: 45px;
  background-color: #1F1F1F;
  border-radius: 50%;
  transition: left 0.6s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    left: ${props => (props.isPageOne ? '0' : 'calc(100% - 51px) ! important')};
  }

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
    left: ${props => (props.isPageOne ? '0' : 'calc(100% - 41px) ! important')};
  }
`;

const SwitchButton = ({ isPageOne, onClick }) => {
  return (
    <ButtonContainer >
      <SwitchButtonWrapper onClick={onClick}>
        <ButtonSlider isPageOne={isPageOne}>
          {isPageOne ? <img src={monitor} alt="Monitor Icon" /> : <img src={video} alt="Video Icon" />}
        </ButtonSlider>
      </SwitchButtonWrapper>
    </ButtonContainer>
  );
};

export default SwitchButton;
