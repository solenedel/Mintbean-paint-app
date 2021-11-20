import styled from "styled-components";
import { colorVars, fonts } from './css-variables';
import { Dashboard } from "../Dashboard";


export const StyledDashboard = styled(Dashboard)`
  /* border: solid blue 3px; */
  /* height: 200px; */
  /* margin-left: 40px;
  margin-right: 40px; */
  border: solid blue 3px;
  margin-bottom: 30px;
  margin-top: 40px;


  div.normal-buttons {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
 
  div.options {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  div.collapsibles {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-left: 10%;
    margin-right: 10%;
  }
  
  button {
    width: fit-content;
    height: 50px;
    font-size: 25px;
    font-family: ${fonts.mainFont};
    color: #C9AAFF;
    background: none;
    border-radius: 5px;
    margin-bottom: 25px;
    margin-left: 15px;

    & span {
       padding: 10px;
    }
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