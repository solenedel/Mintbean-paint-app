import styled from 'styled-components';
import LandingPage from '../LandingPage';
import { colorVars, fonts } from './css-variables';

export const StyledLandingPage = styled(LandingPage)`

  display: flex;
  flex-direction: column;

  .demo-section {
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .B {
    flex-direction: row-reverse;
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

#sentence-1, #sentence-2 {
  margin-bottom: 40px;
  color: #f8f097;
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

#try-pintura {
  width: fit-content;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 10px;
  align-self: center;

  & a {
    font-size: 30px;
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
  width: 150px;
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
    margin-bottom: 80px;

    & h3 {
    color: #f8f097;
    }
  }

  #part-2 {
    margin-left: 7%;
    margin-right: 7%;
    margin-bottom: 80px;

    & h3 {
    color: #f8f097;
    }
  }

  #part-3 {
    margin-left: 7%;
    margin-right: 7%;
    margin-bottom: 80px;

    & h3 {
    color: #f8f097;
    }
  }

  #part-4 {
    margin-left: 7%;
    margin-right: 7%;
    margin-bottom: 120px;

    & h3 {
    color: #f8f097;
    }
  }

  footer {
    height: 200px;
    margin-top: 100px;
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

  .gif {
    border-radius: 10px;
    border: solid #f8f097 3px;
  }

  .dev-img {
    border-radius: 100px;
    width: 110px;
  }

  .devs {
    display: flex;
    justify-content: flex-start;

    .dev {
      display: flex;
      flex-direction: row;
      align-items: center;
      align-self: center;
    }

    .dev.one {
      margin-right: 10vw;
      margin-left: 30px;
    }
    
    .dev.two {
      margin-right: 30px;
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

  .social-icons {
    width: 150px;
  }

  .right-section {
    margin-right: 50px;
    margin-top: 25px;
    padding-left: none;

    & .tools {
      display: flex;
      justify-content: space-around;
    }

    & h3 {
      color: #f8f097;
      margin-left: 50px;
      margin-bottom: 30px;
      font-weight: 300;
      font-size: 20px;
    }

    & i {
        font-size: 40px;

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

    .warning {
      /* border: solid red 3px; */
      margin: 50px 80px 0 80px;
      line-height: 40px;
      font-size: 22px;

      & #important {
        color: #f8f097;
      }
    }

 

@media screen and (max-width: 950px) {

 & .right-section {
   display: none;
 }

 &.dev.one {
      margin-right: 0;
    }

  .devs {
    padding-bottom: 10px;

    & img {
      width: 80px;
    }
  }

}

@media screen and (max-width: 590px) {

header {
  padding-left: 15px;
  button {
    width: 100px;
    margin-right: 20px;

    & a {
      font-size: 25px;

      & span {
        display: none;
      }
    }

  }
}

#sentence-1, #sentence-2, #sentence-3 {
  margin-left: 0;
}

#sentence-3 {
  margin-right: 20px;
  margin-left: 10px;
  font-size: 70px;
}

}

`;