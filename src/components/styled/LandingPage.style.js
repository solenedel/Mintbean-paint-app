import styled from 'styled-components';
import LandingPage from '../LandingPage';
import { colorVars, fonts } from './css-variables';

export const StyledLandingPage = styled(LandingPage)`

  display: flex;
  flex-direction: column;

  .demo-section {
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
  }

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
  color: #f8f097;
}

#sentence-2 {
  margin-left: 80px;
  color: #f8f097;
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

img.palette-icon {
  margin-top: 40px;
  width: 200px;
  margin-left: 40%;
  margin-bottom: 100px;
  opacity: 0.8;
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
    margin-bottom: 80px;

    & h3 {
    color: #f8f097;
    }
  }

  #part-2 {
    margin-left: 7%;
    margin-right: 7%;
    border-bottom: solid 3px #ff96c0;
    margin-bottom: 80px;

    & h3 {
    color: #ff96c0;
    }
  }

  #part-3 {
    margin-left: 7%;
    margin-right: 7%;
    border-bottom: solid 3px #5bd6fd;
    margin-bottom: 80px;

    & h3 {
    color: #5bd6fd;
    }
  }

  #part-4 {
    margin-left: 7%;
    margin-right: 7%;
    margin-bottom: 80px;
    border-bottom: solid 3px #B9B4F0;

    & h3 {
    color: #B9B4F0;
    }
  }

  footer {
    height: 230px;
    margin-top: 200px;
    border-top: solid 3px #f8f097;
    display: flex;
    justify-content: space-between;
  }

  & h2 {
    color: #f8f097;
    font-family: ${fonts.mainFont};
    font-weight: 300;
    font-size: 20px;
    margin-top: 20px;
    margin-left: 25px;
    margin-bottom: 25px;
  }

  & h3 {
    color: ${colorVars.primaryLight};
    font-family: ${fonts.mainFont};
    font-weight: 400;
    font-size: 24px;
    margin-top: 20px;
    margin-right: 50px;
  }

  .dev-img {
    border-radius: 100px;
    width: 110px;
  }

  .devs {
    display: flex;
    justify-content: flex-start;
    margin-left: 40px;

    .dev {
      display: flex;
      flex-direction: row;
      align-items: center;
      align-self: center;
    }

    .dev.one {
      margin-right: 100px;
    }

    & h5 {
      font-size: 20px;
      margin-top: 10px;
      margin-bottom: 10px;
      font-family: ${fonts.mainFont};
      font-weight: 300;
      color: ${colorVars.linkHover};
      margin-left: 10px;
    }

    & i.fab {
      font-size: 40px;
      color: ${colorVars.linkHover};
      margin-right: 10px;
      margin-left: 5px;
      opacity: 0.9;

      &:hover {
        color: #f8f097;
        cursor: pointer;
      }
    }
  }


  .right-section {
    margin-right: 50px;

    & h3 {
      color: #f8f097;
      margin-left: 50px;
      margin-bottom: 30px;
      font-weight: 300;
      font-size: 20px;
    }

    & i {
        font-size: 50px;
        margin-left: 50px;
      }

      .fa-react {
        color: #5bd6fd;
      }

      .fa-html5 {
        color: #ff96c0;
      }

      .fa-css3-alt {
        color: #B9B4F0;
      }
    }

`;