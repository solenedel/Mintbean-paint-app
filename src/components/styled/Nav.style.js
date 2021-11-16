import styled from 'styled-components';
import Nav from '../Nav';
import colorVars from './css-variables';


export const StyledNav = styled(Nav)` 
  border: solid 3px blue;
  background-color: #000000;
  height: 130px;

  h2 {
    color: #C9AAFF;
    margin-left: 30px;
  }

  #nav-flexbox {
    padding-top: 20px;
    display: flex;
    margin-left: 20px;
  }
  img {
    width: 100px;
  }
`;

