
import styled from 'styled-components';
import Canvas from '../Canvas';

export const StyledCanvas = styled(Canvas)`

  margin-top: 50px;
  margin-bottom: 10px;
  border: solid white 7px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  border: solid blue 3px;
  /* margin-left: 8%;
  */

  /* #canvas-and-dashboard {
    border: solid yellow 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  } */

/* 
  width:100%;
  max-width:100%;
  height:100%; */
  

@media screen and (max-width: 1000px) {
        margin-left: 10vw;
       border: solid red 7px;
  } 

`;
 