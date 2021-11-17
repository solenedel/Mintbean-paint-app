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
  color: #00ddc2;
  border: solid 3px #00ddc2;
  transition: color 0.5s;
  transition: background 0.5s;
  background: black;

  &:hover {
    color: black;
    transition: color 0.5s;
    transition: background 0.5s;
    background: #00ddc2;
  }
 }

 #undo {
  color: #5bd6fd;
  border: solid 3px #5bd6fd;
  transition: color 0.5s;
  transition: background 0.5s;
  background: black;

  &:hover {
    color: black;
    transition: color 0.5s;
    transition: background 0.5s;
    background: #5bd6fd;
  }
 }

 #clear {
  color: #ff96c0;
  border: solid 3px #ff96c0;
  transition: color 0.5s;
  transition: background 0.5s;
  background: black;

  &:hover {
    color: black;
    transition: color 0.5s;
    transition: background 0.5s;
    background: #ff96c0;
  }
 }

 #canvas-optn {
  color: #f8f097;
  border: solid 3px #f8f097;
  transition: color 0.5s;
  transition: background 0.5s;
  background: black;

  &:hover {
    color: black;
    transition: color 0.5s;
    transition: background 0.5s;
    background: #f8f097;
  }
 }

 #brush-optn {
  color: #B9B4F0;
  border: solid 3px #B9B4F0;
  transition: color 0.5s;
  transition: background 0.5s;
  background: black;

  &:hover {
    color: black;
    transition: color 0.5s;
    transition: background 0.5s;
    background: #B9B4F0;
  }
 }



`;