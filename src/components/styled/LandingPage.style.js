import styled from 'styled-components';
import LandingPage from '../LandingPage';
import { colorVars, fonts } from './css-variables';

export const StyledLandingPage = styled(LandingPage)`

  display: flex;
  flex-direction: column;
  margin-bottom: 200px;

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

#sentence-1 {
  margin-bottom: 40px;
}

#sentence-2 {
  margin-left: 80px;
}

#sentence-3 {
  margin-left: 140px;
}

#title {
  color: black;
  font-size: 60px;
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


p, h1, h2, h4, h5, h6 {
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

img {
  margin-top: 40px;
  width: 200px;
  margin-left: 40%;
  margin-bottom: 100px;
}

p {
  font-family: ${fonts.mainFont};
}


& h3 {
    font-family: ${fonts.mainFont};
    font-weight: 300;
    font-size: 38px;
  }

  #part-1 {
    margin-left: 7%;
    margin-right: 7%;
    border-bottom: solid 3px #f8f097;

    & h3 {
    color: #f8f097;
    }
  }

  #part-2 {
    margin-left: 7%;
    margin-right: 7%;
    border-bottom: solid 3px #ff96c0;

    & h3 {
    color: #ff96c0;
    }
  }

  #part-3 {
    margin-left: 7%;
    margin-right: 7%;
    border-bottom: solid 3px #5bd6fd;

    & h3 {
    color: #5bd6fd;
    }
  }

  #part-4 {
    margin-left: 7%;
    margin-right: 7%;
    border-bottom: solid 3px #B9B4F0;

    & h3 {
    color: #B9B4F0;
    }
  }




`;