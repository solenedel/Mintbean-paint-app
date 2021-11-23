
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
  

@media screen and (max-width: 1000px) {
        margin-left: 10vw;
  } 

`;
 