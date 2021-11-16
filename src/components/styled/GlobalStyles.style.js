import { createGlobalStyle } from 'styled-components';
import { colorVars } from './css-variables';

export const GlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
    background-color: ${colorVars.primaryDark};
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
    height: 100%; 
    min-height: 100%;
}

#canvas-container {
  display: flex; 
  justify-content: center;
  /* border: solid red 3px; */
}

`;