
import styled from 'styled-components';
import Canvas from '../Canvas';
// import colorVars from './css-variables';

export const StyledCanvas = styled(Canvas)`
  margin-top: 50px;
  margin-bottom: 10px;
  /* background-color: #FFC0D9; */
  border: solid white 7px;
  border-radius: 10px;
  /* margin-left: 10%; */

  #canvas-and-dashboard {
    display: flex;
    flex-direction: column;
  }
/* 
  width:100%;
  max-width:100%;
  height:100%; */

  /* @media screen and (max-width: 600px) {
    width: 300px;
    height: 300px;
  } */

`;
 