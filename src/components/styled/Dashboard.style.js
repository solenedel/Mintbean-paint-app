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
    border-radius: 5px;
  }

 #save {
  color: #9FFBB3;
  border: solid 3px #9FFBB3;
  transition: color 0.5s;
  transition: background 0.5s;
  background: black;

  &:hover {
    color: black;
    transition: color 0.5s;
    transition: background 0.5s;
    background: #9FFBB3;
  }
 }

 #undo {
  color: #9FD8FB;
  border: solid 3px #9FD8FB;
  transition: color 0.5s;
  transition: background 0.5s;
  background: black;

  &:hover {
    color: black;
    transition: color 0.5s;
    transition: background 0.5s;
    background: #9FD8FB;
  }
 }

 #clear {
  color: #FFAEC9;
  border: solid 3px #FFAEC9;
  transition: color 0.5s;
  transition: background 0.5s;
  background: black;

  &:hover {
    color: black;
    transition: color 0.5s;
    transition: background 0.5s;
    background: #FFAEC9;
  }
 }

 #canvas-optn {
  color: #FFEFAE;
  border: solid 3px #FFEFAE;
  transition: color 0.5s;
  transition: background 0.5s;
  background: black;

  &:hover {
    color: black;
    transition: color 0.5s;
    transition: background 0.5s;
    background: #FFEFAE;
  }
 }

 #brush-optn {
  color: #D6AEFF;
  border: solid 3px #D6AEFF;
  transition: color 0.5s;
  transition: background 0.5s;
  background: black;

  &:hover {
    color: black;
    transition: color 0.5s;
    transition: background 0.5s;
    background: #D6AEFF;
  }
 }



`;