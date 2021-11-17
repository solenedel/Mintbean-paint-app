import styled from 'styled-components';
import Nav from '../Nav';
import { colorVars, fonts } from './css-variables';


export const StyledNav = styled(Nav)` 
  /* border: solid 3px blue; */
  background-color: #000000;
  height: 130px;
  color: #00ddc2;

  h2 {
    margin-left: 50px;
    font-family: ${fonts.titleFont};
    font-size: 60px;
  }

  p {
    font-family: ${fonts.quoteFont};
    font-size: 35px;
    margin-right: 100px;
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
`;

