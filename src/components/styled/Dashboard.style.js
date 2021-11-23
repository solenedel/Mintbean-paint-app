import styled from "styled-components";
import { colorVars, fonts } from './css-variables';
import { Dashboard } from "../Dashboard";


export const StyledDashboard = styled(Dashboard)`
  margin-bottom: 25px;
  margin-top: 40px;
  display: flex;
  justify-content: center;

  button {
    cursor: pointer;
    margin-right: 10px;
  }

  div.normal-buttons {
    display: flex;
    justify-content: space-between;
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
  }
  
  button {
    width: fit-content;
    height: fit-content;
    font-size: 25px;
    font-family: ${fonts.mainFont};
    color: #C9AAFF;
    background: none;
    border-radius: 5px;
    margin-bottom: 20px;
    margin-left: 15px;

    & span {
       padding: 10px;
    }
  }

 #save {
  color: ${colorVars.primaryLight};
  border: solid 3px ${colorVars.primaryLight};
  transition: color 0.5s;
  transition: background 0.5s;
  background: black;

  &:hover {
    color: black;
    transition: color 0.5s;
    transition: background 0.5s;
    background: ${colorVars.primaryLight};
  }
 }


 #clear {
  color: ${colorVars.red};
  border: solid 3px ${colorVars.red};
  transition: color 0.5s;
  transition: background 0.5s;
  background: black;

  &:hover {
    color: black;
    transition: color 0.5s;
    transition: background 0.5s;
    background: ${colorVars.red};
  }
 }

 #canvas-optn {
  color: ${colorVars.blue};
  border: solid 3px ${colorVars.blue};
  transition: color 0.5s;
  transition: background 0.5s;
  background: black;

  &:hover {
    color: black;
    transition: color 0.5s;
    transition: background 0.5s;
    background: ${colorVars.blue};
  }
 }

 #brush-color {
  color: ${colorVars.purple};
  border: solid 3px ${colorVars.purple};
  transition: color 0.5s;
  transition: background 0.5s;
  background: black;

  &:hover {
    color: black;
    transition: color 0.5s;
    transition: background 0.5s;
    background: ${colorVars.purple};
  }
 }

 #brush-size {
  color: ${colorVars.orange};
  border: solid 3px ${colorVars.orange};
  transition: color 0.5s;
  transition: background 0.5s;
  background: black;

  &:hover {
    color: black;
    transition: color 0.5s;
    transition: background 0.5s;
    background: ${colorVars.orange};
  }
 }

 .size {
   color: #FFC397;
   font-family: ${fonts.mainFont};
   display: flex;
   flex-direction: column;
   margin-left: 60px;
   margin-bottom: 10px;

   & label {
     margin-left: 10px;
   }

 }

 .small {
  font-size: 18px;
 }

 .medium {
  font-size: 22px;
 }

 .large {
  font-size: 26px;
 }

 div.canvas , div.brush{
   margin-bottom: 70px;
 }


 .slider-picker {
   margin-top: 10px;
 }

 #rc-editable-input-2, 
 #rc-editable-input-4, 
 #rc-editable-input-6, 
 #rc-editable-input-8,
 #rc-editable-input-10 {
  width: fit-content;
  font-family: ${fonts.mainFont};
 } 


// media queries to resize dashboard buttons
@media screen and (max-width: 930px) {
  margin-left: 20%;
  margin-right: 20%;
}

@media screen and (max-width: 800px) {
  margin-left: 25%;
  margin-right: 25%;
}
`;