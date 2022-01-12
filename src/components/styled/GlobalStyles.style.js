import { createGlobalStyle } from 'styled-components';
import { colorVars, fonts } from './css-variables';

export const GlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#my-canvas:hover {
  cursor: url(images/cursor.cur), auto;
}

body {
    background-color: ${colorVars.primaryDark};
    color: ${colorVars.primaryLight};
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
    height: 100%; 
    min-height: 100%;
}

#canvas-container {
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

div.notify-user {
  font-family: ${fonts.mainFont};
  font-style: italic;
  margin-top: 20px;
  font-size: 20px;
  margin-left: 30px;
}

`;