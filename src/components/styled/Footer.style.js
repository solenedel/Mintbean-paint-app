import styled from "styled-components";
import Footer from "../Footer";
import { colorVars, fonts } from './css-variables';

export const StyledFooter = styled(Footer)`
  background-color: ${colorVars.primaryDark};
  border-top: solid 3px ${colorVars.primaryLight};
  height: 115px;
  width: 100vw;
  color: ${colorVars.primaryLight};
  position: static;
  font-family: ${fonts.mainFont};
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  & img {
    height: 90px;
    margin-right: 20px;
    margin-top: 12px;
  }

  & h4 {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 5px 0 10px 20px;
    padding-top: 15px;
  }

  & a, a:visited {
      text-decoration: none;
      color: ${colorVars.linkHover};
    }

    & a:hover {
      color: #f8f097;
    }

  & ul {
    margin: 0;
    padding: 0;

    & div.credits {
      font-size: 14px;
      
      & a,
      a:active {
        color: ${colorVars.linkHover};
        text-decoration: none;
      }
      & a:hover {
      color: #f8f097;
      }
    }
  }
  
  #footer-content {
    padding-left: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
`;
