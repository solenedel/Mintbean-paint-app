import styled from 'styled-components';
import LandingPage from '../LandingPage';
import { colorVars, fonts } from './css-variables';

export const StyledLandingPage = styled(LandingPage)`

header {
  padding-left: 40px;
  background-color:${colorVars.primaryLight};
  height: 100px;
  margin-bottom: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tagline {
  margin-left: 40px;
}

#title {
  color: black;
  font-size: 70px;
  font-family: ${fonts.titleFont};
}

button {
  height: 60px;
  border: solid black 3px;
  border-radius: 5px;
  padding-left: 5px;
  padding-right: 5px;
  margin-right: 80px;
  background-color: ${colorVars.linkHover};

  &:hover {
    background-color: #f8f097;
  }
}

a, a:visited {
  font-family: ${fonts.mainFont};
  font-size: 25px;
  font-weight: 500;
  color: black;
  text-decoration: none;
}


p, h1, h2, h3, h4, h5, h6 {
  color: ${colorVars.primaryLight}; 
  font-family: ${fonts.titleFont};
}

h1 {
  font-size: 100px;
  margin-top: 40px;
}

h4 {
  font-family: ${fonts.mainFont};
  font-size: 25px;
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