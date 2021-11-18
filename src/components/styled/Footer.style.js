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
  /* margin-top: 100px; */
  & h4 {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 5px 0 10px 20px;
    padding-top: 15px;

    & a, a:visited {
      text-decoration: none;
      color: ${colorVars.linkHover};
    }

    & a:hover {
      color: #f8f097;
    }
  }
  & ul {
    margin: 0;
    padding: 0;
    & li {
      margin-bottom: 5px;
      font-size: 18px;
    }
    & div.credits {
      font-size: 14px;
      & a,
      a:hover,
      a:active {
        color: ${colorVars.linkHover};
        text-decoration: none;
      }
    }
  }
  #footer-content {
    padding-left: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  & .social-icons {
    display: flex;
    padding-right: 40px;
    & i {
      font-size: 40px;
      margin-left: 20px;
      opacity: 0.85;
      transition: color 0.4s;
      &:hover {
        color: ${colorVars.pinkHover};
        transition: color 0.4s;
      }
    }
  }
`;
