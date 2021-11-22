import styled from 'styled-components';
import LandingPage from '../LandingPage';
import { colorVars, fonts } from './css-variables';

export const StyledLandingPage = styled(LandingPage)`

header {
  margin-left: 40px; 
  margin-top: 40px;
}

p, h1, h2, h3, h4, h5, h6 {
  color: ${colorVars.primaryLight}; 
  font-family: ${fonts.titleFont};
}

h1 {
  font-size: 100px;
}

h4 {
  font-family: ${fonts.mainFont};
  font-size: 20px;
  font-weight: 300;
}

#pintura {
  color: ${colorVars.linkHover};
}

p {
  font-family: ${fonts.mainFont};
}

/* p, h4 {
  font-family: ${fonts.mainFont};
  font-size: 15px;
  font-weight: 300;
} */



`;