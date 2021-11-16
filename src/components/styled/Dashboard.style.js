import styled from "styled-components";
import { colorVars, fonts } from './css-variables';
import { Dashboard } from "../Dashboard";


export const StyledDashboard = styled(Dashboard)`
  /* border: solid blue 3px; */
  height: 200px;
  padding: 40px 10% 20px 10%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  button {
    width: fit-content;
    height: 40px;
    font-size: 30px;
    padding: 0 7px 0 7px;
    font-family: ${fonts.mainFont};
    color: #C9AAFF;
    background: none;
    border: solid 3px #C9AAFF;
    border-radius: 5px;
  }

  /* #dashboard {
    
  } */

`;