import styled from 'styled-components';
import Nav from '../Nav';
import { colorVars, fonts } from './css-variables';


export const StyledNav = styled(Nav)` 
  background-color: #000000;
  height: 130px;
  color: ${colorVars.linkHover};

  h2 {
    margin-left: 50px;
    font-family: ${fonts.titleFont};
    font-size: 80px;
  }


  p {
    font-family: ${fonts.mainFont};
    color: ${colorVars.primaryLight};;
    font-size: 22px;
    margin-right: 60px;
    opacity: 0.78;
    margin-top: 18px;
    font-weight: 400;
    font-style: italic;
    text-align: right;
  }

  #nav-flexbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #title {
    padding-top: 20px;
    display: flex;
    margin-left: 50px;
  }

  #quote {
    margin-left: 100px;
  }

  img {
    width: 100px;
  }

  @media screen and (max-width: 950px) {
    & p {
      display: none;
    }
  }
`;

