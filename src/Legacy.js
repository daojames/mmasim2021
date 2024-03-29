import React, { useState } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './mmasim2021logo.png';
import ReactTooltip from "react-tooltip";
import './App.css';
import randomSchedule from "./RandomSchedule";


const ButtonA = styled.button`
background-color: transparent;
color: white;
padding: 20px;
width: 775px;
text-align: center;
margin: 10px;
font-size: 40px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 2px;
outline: 0;
`

const Button = styled.button`
background-color: transparent;
color: white;
padding: 2.132196162vh;
width: 14.322916666vw;
text-align: center;
margin: 1.066098081vh;
font-size: 2.083333333vw;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 2px solid white;
border-radius: 2px;
outline: 0;
transition: ease background-color 250ms;
&:hover {
  background-color: #616161;
}
`

const ButtonG = styled.button`
background-color: grey;
color: white;
padding: 2.132196162vh;
width: 14.322916666vw;
text-align: center;
margin: 1.066098081vh;
font-size: 2.083333333vw;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 2px solid white;
border-radius: 2px;
outline: 0;
transition: ease background-color 250ms;
&:hover {
  background-color: #616161;
}
`

const Button1 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 14.322916666vw;
height: 5.330490405vh;
text-align: center;
margin: 1.066098081vh;
font-size: 1.5625vw;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button1a = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 800px;
height: 50px;
text-align: center;
margin: 10px;
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button2 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 14.322916666vw;
height: 5.330490405vh;
text-align: center;
margin: 1.066098081vh;
font-size: 5.208333333vw;
font-family: 'Roboto', sans-serif;
font-style: italic; 
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button2a = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 800px;
height: 100px;
text-align: center;
margin: 10px;
font-size: 100px;
font-family: 'Roboto', sans-serif;
font-style: italic; 
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button3 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 14.322916666vw;
height: 1.041666666vh;
text-align: center;
margin-top: -0.53304904vh;
margin-left: 8.333333333vw;
margin-right: 8.333333333vw;
font-size: 3.198294243vh;
font-family: 'Roboto', sans-serif;
font-style: italic; 
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button4 = styled.button`
background-color: transparent;
color: white;
padding: 0px;
width: 14.322916666vw;
height: 5.330490405vh;
text-align: center;
margin-top: -0.53304904vh;
margin-left: 8.333333333vw;
margin-right: 8.333333333vw;
font-size: 2.08334vw;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 2px solid white;
border-radius: 2px;
outline: 0;
transition: ease background-color 250ms;
&:hover {
  background-color: #616161;
}
`

const Button5 = styled.button`
background-color: #00ff7f;
color: black;
padding: 0px;
width: 100px;
height: 50px;
text-align: center;
margin: 0px;
font-size: 30px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button5a = styled.button`
background-color: #00ff7f;
color: black;
padding: 0px;
width: 200px;
height: 50px;
text-align: center;
margin: 0px;
font-size: 30px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button5b = styled.button`
background-color: #00ff7f;
color: black;
padding: 0px;
width: 150px;
height: 50px;
text-align: center;
margin: 0px;
font-size: 30px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button5c = styled.button`
background-color: #00ff7f;
color: black;
padding: 0px;
width: 150px;
height: 50px;
text-align: center;
margin: 0px;
font-size: 30px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button5d = styled.button`
background-color: #00ff7f;
color: black;
padding: 0px;
width: 400px;
height: 50px;
text-align: center;
margin: 0px;
font-size: 30px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button5e = styled.button`
background-color: #00ff7f;
color: black;
padding: 0px;
width: 200px;
height: 50px;
text-align: center;
margin: 0px;
font-size: 30px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button6 = styled.button`
background-color: #616161;
color: white;
padding: 0px;
width: 98px;
height: 50px;
text-align: center;
margin: 0px;
margin-right: 2px;
font-size: 30px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button6a = styled.button`
background-color: #616161;
color: white;
padding: 0px;
width: 196px;
height: 50px;
text-align: center;
margin: 0px;
margin-left: 2px;
margin-right: 2px;
font-size: 30px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button6b = styled.button`
background-color: #616161;
color: white;
padding: 0px;
width: 146px;
height: 50px;
text-align: center;
margin: 0px;
margin-left: 2px;
margin-right: 2px;
font-size: 30px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button6c = styled.button`
background-color: #616161;
color: white;
padding: 0px;
width: 146px;
height: 50px;
text-align: center;
margin: 0px;
margin-left: 2px;
margin-right: 2px;
font-size: 30px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button6d = styled.button`
background-color: #616161;
color: white;
padding: 0px;
width: 396px;
height: 50px;
text-align: center;
margin: 0px;
margin-left: 2px;
margin-right: 2px;
font-size: 30px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Button6e = styled.button`
background-color: #616161;
color: white;
padding: 0px;
width: 198px;
height: 50px;
text-align: center;
margin: 0px;
margin-left: 2px;
font-size: 30px;
font-weight: bold;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Type = styled.button`
position: absolute;
pointer-events: none;
background-color: transparent;
color: white;
padding: 0px;
width: 14.322916666vw;
height: 5.330490405vh;
text-align: center;
margin: 1.066098081vh;
font-size: 1.5625vw;
font-family: 'Roboto', sans-serif;
font-style: italic;
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

const Num = styled.button`
position: absolute;
pointer-events: none;
background-color: transparent;
color: white;
padding: 0px;
width: 14.322916666vw;
height: 5.330490405vh;
text-align: center;
margin: 1.066098081vh;
font-size: 5.208333333vw;
font-family: 'Roboto', sans-serif;
font-style: italic; 
border: 0px solid white;
border-radius: 0px;
outline: 0;
`

class Legacy extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            mma: ((sessionStorage.getItem('org') == 0) ? true : false),
            ufc: ((sessionStorage.getItem('org') == 1) ? true : false)
        }
        this.orgMMA = this.orgMMA.bind(this);
        this.orgUFC = this.orgUFC.bind(this);
    }

    orgMMA = (event) => {
        sessionStorage.setItem('org', 0);
            this.setState({
                mma: true,
                ufc: false
            })
        randomSchedule();
    }

    orgUFC = (event) => {
        sessionStorage.setItem('org', 1);
            this.setState({
                mma: false,
                ufc: true
            })
    }

    weightCalc(str) {
        if(str == "FLYWEIGHT"){
            return '125';
        }
        else if(str == "BANTAMWEIGHT"){
            return '135';
        }
        else if(str == "FEATHERWEIGHT"){
            return '145';
        }
        else if(str == 'LIGHTWEIGHT'){
            return '155';
        }
        else if(str == 'WELTERWEIGHT'){
            return '170';
        }
        else if(str == 'MIDDLEWEIGHT'){
            return '185';
        }
        else if(str == 'LIGHT HEAVYWEIGHT'){
            return '205';
        }
        else if(str == 'HEAVYWEIGHT'){
            return '265';
        }
    }

    waweightCalc(str, cut){
        let first = sessionStorage.getItem('first');
        if(first == '1'){
            if(str == "FLYWEIGHT"){
                if(cut == "1"){
                    sessionStorage.setItem('waweight', '130');
                    return '130';
                }
                else if(cut == "2"){
                    sessionStorage.setItem('waweight', '134');
                    return '134';
                }
                else if(cut == "3"){
                    sessionStorage.setItem('waweight', '138');
                    return '138';
                }
                else if(cut == "4"){
                    sessionStorage.setItem('waweight', '141');
                    return '141';
                }
                else if(cut == "5"){
                    sessionStorage.setItem('waweight', '145');
                    return '145';
                }
            }
            else if(str == "BANTAMWEIGHT"){
                if(cut == "1"){
                    sessionStorage.setItem('waweight', '140');
                    return '140';
                }
                else if(cut == "2"){
                    sessionStorage.setItem('waweight', '144');
                    return '144';
                }
                else if(cut == "3"){
                    sessionStorage.setItem('waweight', '149');
                    return '149';
                }
                else if(cut == "4"){
                    sessionStorage.setItem('waweight', '153');
                    return '153';
                }
                else if(cut == "5"){
                    sessionStorage.setItem('waweight', '157');
                    return '157';
                }
            }
            else if(str == "FEATHERWEIGHT"){
                if(cut == "1"){
                    sessionStorage.setItem('waweight', '151');
                    return '151';
                }
                else if(cut == "2"){
                    sessionStorage.setItem('waweight', '155');
                    return '155';
                }
                else if(cut == "3"){
                    sessionStorage.setItem('waweight', '160');
                    return '160';
                }
                else if(cut == "4"){
                    sessionStorage.setItem('waweight', '164');
                    return '164';
                }
                else if(cut == "5"){
                    sessionStorage.setItem('waweight', '168');
                    return '168';
                }
            }
            else if(str == 'LIGHTWEIGHT'){
                if(cut == "1"){
                    sessionStorage.setItem('waweight', '161');
                    return '161';
                }
                else if(cut == "2"){
                    sessionStorage.setItem('waweight', '166');
                    return '166';
                }
                else if(cut == "3"){
                    sessionStorage.setItem('waweight', '171');
                    return '171';
                }
                else if(cut == "4"){
                    sessionStorage.setItem('waweight', '175');
                    return '175';
                }
                else if(cut == "5"){
                    sessionStorage.setItem('waweight', '180');
                    return '180';
                }
            }
            else if(str == 'WELTERWEIGHT'){
                if(cut == "1"){
                    sessionStorage.setItem('waweight', '177');
                    return '177';
                }
                else if(cut == "2"){
                    sessionStorage.setItem('waweight', '182');
                    return '182';
                }
                else if(cut == "3"){
                    sessionStorage.setItem('waweight', '187');
                    return '187';
                }
                else if(cut == "4"){
                    sessionStorage.setItem('waweight', '192');
                    return '192';
                }
                else if(cut == "5"){
                    sessionStorage.setItem('waweight', '197');
                    return '197';
                }
            }
            else if(str == 'MIDDLEWEIGHT'){
                if(cut == "1"){
                    sessionStorage.setItem('waweight', '192');
                    return '192';
                }
                else if(cut == "2"){
                    sessionStorage.setItem('waweight', '198');
                    return '198';
                }
                else if(cut == "3"){
                    sessionStorage.setItem('waweight', '204');
                    return '204';
                }
                else if(cut == "4"){
                    sessionStorage.setItem('waweight', '209');
                    return '209';
                }
                else if(cut == "5"){
                    sessionStorage.setItem('waweight', '215');
                    return '215';
                }
            }
            else if(str == 'LIGHT HEAVYWEIGHT'){
                if(cut == "1"){
                    sessionStorage.setItem('waweight', '213');
                    return '213';
                }
                else if(cut == "2"){
                    sessionStorage.setItem('waweight', '219');
                    return '219';
                }
                else if(cut == "3"){
                    sessionStorage.setItem('waweight', '226');
                    return '226';
                }
                else if(cut == "4"){
                    sessionStorage.setItem('waweight', '232');
                    return '232';
                }
                else if(cut == "5"){
                    sessionStorage.setItem('waweight', '238');
                    return '238';
                }
            }
            else if(str == 'HEAVYWEIGHT'){
                if(cut == "1"){
                    sessionStorage.setItem('waweight', '276');
                    return '276';
                }
                else if(cut == "2"){
                    sessionStorage.setItem('waweight', '284');
                    return '284';
                }
                else if(cut == "3"){
                    sessionStorage.setItem('waweight', '292');
                    return '292';
                }
                else if(cut == "4"){
                    sessionStorage.setItem('waweight', '299');
                    return '299';
                }
                else if(cut == "5"){
                    sessionStorage.setItem('waweight', '307');
                    return '307';
                }
            }
        }
        else {
            let value = sessionStorage.getItem('waweight');
            return value;
        }
    }

    heightCalc(str, height){
        let first = sessionStorage.getItem('first');
        if(first == '1'){
            if(str == "FLYWEIGHT"){
                if(height == "1"){
                    sessionStorage.setItem('height', '5\'2\"');
                    return '5\'2\"';
                }
                else if(height == "2"){
                    sessionStorage.setItem('height', '5\'4\"');
                    return '5\'4\"';
                }
                else if(height == "3"){
                    sessionStorage.setItem('height', '5\'5\"');
                    return '5\'5\"';
                }
                else if(height == "4"){
                    sessionStorage.setItem('height', '5\'6\"');
                    return '5\'6\"';
                }
                else if(height == "5"){
                    sessionStorage.setItem('height', '5\'8\"');
                    return '5\'8\"';
                }
            }
            else if(str == "BANTAMWEIGHT"){
                if(height == "1"){
                    sessionStorage.setItem('height', '5\'4\"');
                    return '5\'4\"';
                }
                else if(height == "2"){
                    sessionStorage.setItem('height', '5\'6\"');
                    return '5\'6\"';
                }
                else if(height == "3"){
                    sessionStorage.setItem('height', '5\'7\"');
                    return '5\'7\"';
                }
                else if(height == "4"){
                    sessionStorage.setItem('height', '5\'8\"');
                    return '5\'8\"';
                }
                else if(height == "5"){
                    sessionStorage.setItem('height', '5\'10\"');
                    return '5\'10\"';
                }
            }
            else if(str == "FEATHERWEIGHT"){
                if(height == "1"){
                    sessionStorage.setItem('height', '5\'6\"');
                    return '5\'6\"';
                }
                else if(height == "2"){
                    sessionStorage.setItem('height', '5\'8\"');
                    return '5\'8\"';
                }
                else if(height == "3"){
                    sessionStorage.setItem('height', '5\'9\"');
                    return '5\'9\"';
                }
                else if(height == "4"){
                    sessionStorage.setItem('height', '5\'10\"');
                    return '5\'10\"';
                }
                else if(height == "5"){
                    sessionStorage.setItem('height', '6\'0\"');
                    return '6\'0\"';
                }
            }
            else if(str == 'LIGHTWEIGHT'){
                if(height == "1"){
                    sessionStorage.setItem('height', '5\'7\"');
                    return '5\'7\"';
                }
                else if(height == "2"){
                    sessionStorage.setItem('height', '5\'9\"');
                    return '5\'9\"';
                }
                else if(height == "3"){
                    sessionStorage.setItem('height', '5\'10\"');
                    return '5\'10\"';
                }
                else if(height == "4"){
                    sessionStorage.setItem('height', '5\'11\"');
                    return '5\'11\"';
                }
                else if(height == "5"){
                    sessionStorage.setItem('height', '6\'1\"');
                    return '6\'1\"';
                }
            }
            else if(str == 'WELTERWEIGHT'){
                if(height == "1"){
                    sessionStorage.setItem('height', '5\'8\"');
                    return '5\'8\"';
                }
                else if(height == "2"){
                    sessionStorage.setItem('height', '5\'10\"');
                    return '5\'10\"';
                }
                else if(height == "3"){
                    sessionStorage.setItem('height', '5\'11\"');
                    return '5\'11\"';
                }
                else if(height == "4"){
                    sessionStorage.setItem('height', '6\'0\"');
                    return '6\'0\"';
                }
                else if(height == "5"){
                    sessionStorage.setItem('height', '6\'2\"');
                    return '6\'2\"';
                }
            }
            else if(str == 'MIDDLEWEIGHT'){
                if(height == "1"){
                    sessionStorage.setItem('height', '5\'10\"');
                    return '5\'10\"';
                }
                else if(height == "2"){
                    sessionStorage.setItem('height', '6\'0\"');
                    return '6\'0\"';
                }
                else if(height == "3"){
                    sessionStorage.setItem('height', '6\'1\"');
                    return '6\'1\"';
                }
                else if(height == "4"){
                    sessionStorage.setItem('height', '6\'2\"');
                    return '6\'2\"';
                }
                else if(height == "5"){
                    sessionStorage.setItem('height', '6\'4\"');
                    return '6\'4\"';
                }
            }
            else if(str == 'LIGHT HEAVYWEIGHT'){
                if(height == "1"){
                    sessionStorage.setItem('height', '5\'11\"');
                    return '5\'11\"';
                }
                else if(height == "2"){
                    sessionStorage.setItem('height', '6\'1\"');
                    return '6\'1\"';
                }
                else if(height == "3"){
                    sessionStorage.setItem('height', '6\'2\"');
                    return '6\'2\"';
                }
                else if(height == "4"){
                    sessionStorage.setItem('height', '6\'3\"');
                    return '6\'3\"';
                }
                else if(height == "5"){
                    sessionStorage.setItem('height', '6\'5\"');
                    return '6\'5\"';
                }
            }
            else if(str == 'HEAVYWEIGHT'){
                if(height == "1"){
                    sessionStorage.setItem('height', '6\'0\"');
                    return '6\'0\"';
                }
                else if(height == "2"){
                    sessionStorage.setItem('height', '6\'2\"');
                    return '6\'2\"';
                }
                else if(height == "3"){
                    sessionStorage.setItem('height', '6\'3\"');
                    return '6\'3\"';
                }
                else if(height == "4"){
                    sessionStorage.setItem('height', '6\'4\"');
                    return '6\'4\"';
                }
                else if(height == "5"){
                    sessionStorage.setItem('height', '6\'6\"');
                    return '6\'6\"';
                }
            }
        }
        else {
            let value = sessionStorage.getItem('height');
            return value;
        }
    }

    strengthCalc(height, cut) {
        let first = sessionStorage.getItem('first');
        if(first == '1'){
            if(height == 1){
                if(cut == 1){
                    sessionStorage.setItem('str', '50');
                    return '50';
                }
                else if(cut == 2){
                    sessionStorage.setItem('str', '60');
                    return '60';
                }
                else if(cut == 3){
                    sessionStorage.setItem('str', '70');
                    return '70';
                }
                else if(cut == 4){
                    sessionStorage.setItem('str', '80');
                    return '80';
                }
                else if(cut == 5){
                    sessionStorage.setItem('str', '90');
                    return '90';
                }
            }
            else if(height == 2){
                if(cut == 1){
                    sessionStorage.setItem('str', '40');
                    return '40';
                }
                else if(cut == 2){
                    sessionStorage.setItem('str', '50');
                    return '50';
                }
                else if(cut == 3){
                    sessionStorage.setItem('str', '60');
                    return '60';
                }
                else if(cut == 4){
                    sessionStorage.setItem('str', '70');
                    return '70';
                }
                else if(cut == 5){
                    sessionStorage.setItem('str', '80');
                    return '80';
                }
            }
            else if(height == 3){
                if(cut == 1){
                    sessionStorage.setItem('str', '30');
                    return '30';
                }
                else if(cut == 2){
                    sessionStorage.setItem('str', '40');
                    return '40';
                }
                else if(cut == 3){
                    sessionStorage.setItem('str', '50');
                    return '50';
                }
                else if(cut == 4){
                    sessionStorage.setItem('str', '60');
                    return '60';
                }
                else if(cut == 5){
                    sessionStorage.setItem('str', '70');
                    return '70';
                }
            }
            else if(height == 4){
                if(cut == 1){
                    sessionStorage.setItem('str', '20');
                    return '20';
                }
                else if(cut == 2){
                    sessionStorage.setItem('str', '30');
                    return '30';
                }
                else if(cut == 3){
                    sessionStorage.setItem('str', '40');
                    return '40';
                }
                else if(cut == 4){
                    sessionStorage.setItem('str', '50');
                    return '50';
                }
                else if(cut == 5){
                    sessionStorage.setItem('str', '60');
                    return '60';
                }
            }
            else if(height == 5){
                if(cut == 1){
                    sessionStorage.setItem('str', '10');
                    return '10';
                }
                else if(cut == 2){
                    sessionStorage.setItem('str', '20');
                    return '20';
                }
                else if(cut == 3){
                    sessionStorage.setItem('str', '30');
                    return '30';
                }
                else if(cut == 4){
                    sessionStorage.setItem('str', '40');
                    return '40';
                }
                else if(cut == 5){
                    sessionStorage.setItem('str', '50');
                    return '50';
                }
            }
        }
        else {
            let value = sessionStorage.getItem('str');
            return value;
        }
    }

    staminaCalc(cut) {
        let first = sessionStorage.getItem('first');
        if(first == '1'){
            if(cut == 1){
                sessionStorage.setItem('stm', '70');
                return '70';
            }
            else if(cut == 2){
                sessionStorage.setItem('stm', '60');
                return '60';
            }
            else if(cut == 3){
                sessionStorage.setItem('stm', '50');
                return '50';
            }
            else if(cut == 4){
                sessionStorage.setItem('stm', '40');
                return '40';
            }
            else if(cut == 5){
                sessionStorage.setItem('stm', '30');
                return '30';
            }
        }
        else {
            let value = sessionStorage.getItem('stm');
            return value;
        }    
    }

    calcPunch(style, height){
        let first = sessionStorage.getItem('first');
        if(first == '1'){
            if(style == 1){
                if(height == 1){
                    sessionStorage.setItem('punch', '80');
                    return '80';
                }
                else if(height == 2){
                    sessionStorage.setItem('punch', '85');
                    return '85';
                }
                else if(height == 3){
                    sessionStorage.setItem('punch', '90');
                    return '90';
                }
                else if(height == 4){
                    sessionStorage.setItem('punch', '95');
                    return '95';
                }
                else if(height == 5){
                    sessionStorage.setItem('punch', '100');
                    return '100';
                }
            }
            else if(style == 2){
                if(height == 1){
                    sessionStorage.setItem('punch', '60');
                    return '60';
                }
                else if(height == 2){
                    sessionStorage.setItem('punch', '65');
                    return '65';
                }
                else if(height == 3){
                    sessionStorage.setItem('punch', '70');
                    return '70';
                }
                else if(height == 4){
                    sessionStorage.setItem('punch', '75');
                    return '75';
                }
                else if(height == 5){
                    sessionStorage.setItem('punch', '80');
                    return '80';
                }
            }
            else if(style == 3){
                if(height == 1){
                    sessionStorage.setItem('punch', '40');
                    return '40';
                }
                else if(height == 2){
                    sessionStorage.setItem('punch', '45');
                    return '45';
                }
                else if(height == 3){
                    sessionStorage.setItem('punch', '50');
                    return '50';
                }
                else if(height == 4){
                    sessionStorage.setItem('punch', '55');
                    return '55';
                }
                else if(height == 5){
                    sessionStorage.setItem('punch', '60');
                    return '60';
                }
            }
            else if(style == 4){
                if(height == 1){
                    sessionStorage.setItem('punch', '30');
                    return '30';
                }
                else if(height == 2){
                    sessionStorage.setItem('punch', '35');
                    return '35';
                }
                else if(height == 3){
                    sessionStorage.setItem('punch', '40');
                    return '40';
                }
                else if(height == 4){
                    sessionStorage.setItem('punch', '45');
                    return '45';
                }
                else if(height == 5){
                    sessionStorage.setItem('punch', '50');
                    return '50';
                }
            }
            else if(style == 5){
                if(height == 1){
                    sessionStorage.setItem('punch', '20');
                    return '20';
                }
                else if(height == 2){
                    sessionStorage.setItem('punch', '25');
                    return '25';
                }
                else if(height == 3){
                    sessionStorage.setItem('punch', '30');
                    return '30';
                }
                else if(height == 4){
                    sessionStorage.setItem('punch', '35');
                    return '35';
                }
                else if(height == 5){
                    sessionStorage.setItem('punch', '40');
                    return '40';
                }
            }
            else if(style == 6){
                if(height == 1){
                    sessionStorage.setItem('punch', '40');
                    return '40';
                }
                else if(height == 2){
                    sessionStorage.setItem('punch', '45');
                    return '45';
                }
                else if(height == 3){
                    sessionStorage.setItem('punch', '50');
                    return '50';
                }
                else if(height == 4){
                    sessionStorage.setItem('punch', '55');
                    return '55';
                }
                else if(height == 5){
                    sessionStorage.setItem('punch', '60');
                    return '60';
                }
            }
        }
        else {
            let value = sessionStorage.getItem('punch');
            return value;
        }  
    }

    calcKick(style, height){
        let first = sessionStorage.getItem('first');
        if(first == '1'){
            if(style == 1){
                if(height == 1){
                    sessionStorage.setItem('kick', '20');
                    return '20';
                }
                else if(height == 2){
                    sessionStorage.setItem('kick', '25');
                    return '25';
                }
                else if(height == 3){
                    sessionStorage.setItem('kick', '30');
                    return '30';
                }
                else if(height == 4){
                    sessionStorage.setItem('kick', '35');
                    return '35';
                }
                else if(height == 5){
                    sessionStorage.setItem('kick', '40');
                    return '40';
                }
            }
            else if(style == 2){
                if(height == 1){
                    sessionStorage.setItem('kick', '40');
                    return '40';
                }
                else if(height == 2){
                    sessionStorage.setItem('kick', '45');
                    return '45';
                }
                else if(height == 3){
                    sessionStorage.setItem('kick', '50');
                    return '50';
                }
                else if(height == 4){
                    sessionStorage.setItem('kick', '55');
                    return '55';
                }
                else if(height == 5){
                    sessionStorage.setItem('kick', '60');
                    return '60';
                }
            }
            else if(style == 3){
                if(height == 1){
                    sessionStorage.setItem('kick', '40');
                    return '40';
                }
                else if(height == 2){
                    sessionStorage.setItem('kick', '45');
                    return '45';
                }
                else if(height == 3){
                    sessionStorage.setItem('kick', '50');
                    return '50';
                }
                else if(height == 4){
                    sessionStorage.setItem('kick', '55');
                    return '55';
                }
                else if(height == 5){
                    sessionStorage.setItem('kick', '60');
                    return '60';
                }
            }
            else if(style == 4){
                if(height == 1){
                    sessionStorage.setItem('kick', '20');
                    return '20';
                }
                else if(height == 2){
                    sessionStorage.setItem('kick', '25');
                    return '25';
                }
                else if(height == 3){
                    sessionStorage.setItem('kick', '30');
                    return '30';
                }
                else if(height == 4){
                    sessionStorage.setItem('kick', '35');
                    return '35';
                }
                else if(height == 5){
                    sessionStorage.setItem('kick', '40');
                    return '40';
                }
            }
            else if(style == 5){
                if(height == 1){
                    sessionStorage.setItem('kick', '20');
                    return '20';
                }
                else if(height == 2){
                    sessionStorage.setItem('kick', '25');
                    return '25';
                }
                else if(height == 3){
                    sessionStorage.setItem('kick', '30');
                    return '30';
                }
                else if(height == 4){
                    sessionStorage.setItem('kick', '35');
                    return '35';
                }
                else if(height == 5){
                    sessionStorage.setItem('kick', '40');
                    return '40';
                }
            }
            else if(style == 6){
                if(height == 1){
                    sessionStorage.setItem('kick', '30');
                    return '30';
                }
                else if(height == 2){
                    sessionStorage.setItem('kick', '35');
                    return '35';
                }
                else if(height == 3){
                    sessionStorage.setItem('kick', '40');
                    return '40';
                }
                else if(height == 4){
                    sessionStorage.setItem('kick', '45');
                    return '45';
                }
                else if(height == 5){
                    sessionStorage.setItem('kick', '50');
                    return '50';
                }
            }
        }
        else {
            let value = sessionStorage.getItem('kick');
            return value;
        }  
    }

    calcWrestling(style, height){
        let first = sessionStorage.getItem('first');
        if(first == '1'){
            if(style == 1){
                if(height == 1){
                    sessionStorage.setItem('wrestling', '50');
                    return '50';
                }
                else if(height == 2){
                    sessionStorage.setItem('wrestling', '40');
                    return '40';
                }
                else if(height == 3){
                    sessionStorage.setItem('wrestling', '30');
                    return '30';
                }
                else if(height == 4){
                    sessionStorage.setItem('wrestling', '20');
                    return '20';
                }
                else if(height == 5){
                    sessionStorage.setItem('wrestling', '10');
                    return '10';
                }
            }
            else if(style == 2){
                if(height == 1){
                    sessionStorage.setItem('wrestling', '50');
                    return '50';
                }
                else if(height == 2){
                    sessionStorage.setItem('wrestling', '40');
                    return '40';
                }
                else if(height == 3){
                    sessionStorage.setItem('wrestling', '30');
                    return '30';
                }
                else if(height == 4){
                    sessionStorage.setItem('wrestling', '20');
                    return '20';
                }
                else if(height == 5){
                    sessionStorage.setItem('wrestling', '10');
                    return '10';
                }
            }
            else if(style == 3){
                if(height == 1){
                    sessionStorage.setItem('wrestling', '50');
                    return '50';
                }
                else if(height == 2){
                    sessionStorage.setItem('wrestling', '40');
                    return '40';
                }
                else if(height == 3){
                    sessionStorage.setItem('wrestling', '30');
                    return '30';
                }
                else if(height == 4){
                    sessionStorage.setItem('wrestling', '20');
                    return '20';
                }
                else if(height == 5){
                    sessionStorage.setItem('wrestling', '10');
                    return '10';
                }
            }
            else if(style == 4){
                if(height == 1){
                    sessionStorage.setItem('wrestling', '100');
                    return '100';
                }
                else if(height == 2){
                    sessionStorage.setItem('wrestling', '90');
                    return '90';
                }
                else if(height == 3){
                    sessionStorage.setItem('wrestling', '80');
                    return '80';
                }
                else if(height == 4){
                    sessionStorage.setItem('wrestling', '70');
                    return '70';
                }
                else if(height == 5){
                    sessionStorage.setItem('wrestling', '60');
                    return '60';
                }
            }
            else if(style == 5){
                if(height == 1){
                    sessionStorage.setItem('wrestling', '70');
                    return '70';
                }
                else if(height == 2){
                    sessionStorage.setItem('wrestling', '60');
                    return '60';
                }
                else if(height == 3){
                    sessionStorage.setItem('wrestling', '50');
                    return '50';
                }
                else if(height == 4){
                    sessionStorage.setItem('wrestling', '40');
                    return '40';
                }
                else if(height == 5){
                    sessionStorage.setItem('wrestling', '30');
                    return '30';
                }
            }
            else if(style == 6){
                if(height == 1){
                    sessionStorage.setItem('wrestling', '70');
                    return '70';
                }
                else if(height == 2){
                    sessionStorage.setItem('wrestling', '60');
                    return '60';
                }
                else if(height == 3){
                    sessionStorage.setItem('wrestling', '50');
                    return '50';
                }
                else if(height == 4){
                    sessionStorage.setItem('wrestling', '40');
                    return '40';
                }
                else if(height == 5){
                    sessionStorage.setItem('wrestling', '30');
                    return '30';
                }
            }
        }
        else {
            let value = sessionStorage.getItem('wrestling');
            return value;
        }  
    }

    calcGrappling(style){
        let first = sessionStorage.getItem('first');
        if(first == '1'){
            if(style == 1){
                sessionStorage.setItem('grappling', '30');
                return '30';
            }
            else if(style == 2){
                sessionStorage.setItem('grappling', '30');
                return '30';
            }
            else if(style == 3){
                sessionStorage.setItem('grappling', '30');
                return '30';
            }
            else if(style == 4){
                sessionStorage.setItem('grappling', '40');
                return '40';
            }
            else if(style == 5){
                sessionStorage.setItem('grappling', '80');
                return '80';
            }
            else if(style == 6){
                sessionStorage.setItem('grappling', '50');
                return '50';
            }
        }
        else {
            let value = sessionStorage.getItem('grappling');
            return value;
        }
    }

    calcClinch(style){
        let first = sessionStorage.getItem('first');
        if(first == '1'){
            if(style == 1){
                sessionStorage.setItem('clinch', '40');
                return '40';
            }
            else if(style == 2){
                sessionStorage.setItem('clinch', '40');
                return '40';
            }
            else if(style == 3){
                sessionStorage.setItem('clinch', '60');
                return '60';
            }
            else if(style == 4){
                sessionStorage.setItem('clinch', '40');
                return '40';
            }
            else if(style == 5){
                sessionStorage.setItem('clinch', '30');
                return '30';
            }
            else if(style == 6){
                sessionStorage.setItem('clinch', '30');
                return '30';
            }
        }
        else {
            let value = sessionStorage.getItem('clinch');
            return value;
        }
    }

    calcMonth(month){
        switch(month){
            case '1':
                return 'JANUARY';
                break;
            case '2':
                return 'FEBRUARY';
                break;
            case '3':
                return 'MARCH';
                break;
            case '4':
                return 'APRIL';
                break;
            case '5':
                return 'MAY';
                break;
            case '6':
                return 'JUNE';
                break;
            case '7':
                return 'JULY';
                break;
            case '8':
                return 'AUGUST';
                break;
            case '9':
                return 'SEPTEMBER';
                break;
            case '10':
                return 'OCTOBER';
                break;
            case '11':
                return 'NOVEMBER';
                break;
            case '12':
                return 'DECEMBER';
                break;
            case '13':
                sessionStorage.setItem('month', 1);
                sessionStorage.setItem('year', ((parseInt(sessionStorage.getItem('year')) + 1)));
                return 'JANUARY';
                break;
        }
    }

    notFirst() {
        sessionStorage.setItem('first', 'false');
    }

    progressTime() {
        sessionStorage.setItem('month', (parseInt(sessionStorage.getItem('month')) + 1));
    }

    getStrikeAcc() {
        let per = ((parseInt(sessionStorage.getItem('sigStrikes'))/(parseInt(sessionStorage.getItem('totalStrikes')))) * 100).toFixed(0);
        if (per >= 0) {
            return per;
        }
        else {
            return 0;
        }
    }

    getTakedownAcc() {
        let per = (((parseInt(sessionStorage.getItem('takedownsTried')) - parseInt(sessionStorage.getItem('takedownsSuccess')))/(parseInt(sessionStorage.getItem('takedownsTried')))) * 100).toFixed(0);
        if (parseInt(sessionStorage.getItem('takedownsTried')) == 0) {
            return 100;
        }
        else if (parseInt(sessionStorage.getItem('takedownsTried')) == parseInt(sessionStorage.getItem('takedownsSuccess'))) {
            return 100;
        }
        else if (per >= 0) {
            return per;
        }
        else {
            return 0;
        }
    }

    getStatus() {
        let fans = sessionStorage.getItem('followers');

        if (fans >= 1000000) {
            return 'SUPERSTAR';
        }
        else if (fans >= 500000) {
            return 'STAR';
        }
        else if (fans >= 250000) {
            return 'MAIN EVENT';
        }
        else if (fans >= 125000) {
            return 'MAIN CARD';
        }
        else if (fans >= 50000) {
            return 'PRELIMINARY';
        }
        else if (fans >= 25000) {
            return 'EARLY PRELIM';
        }
        else {
            return 'NO NAME';
        }
    }

    resColor(x) {
        if (sessionStorage.getItem('legacyRes' + x) === 'CHAMPION') {
            return '#FFF861';
        }
        else if (sessionStorage.getItem('legacyRes' + x) === 'TOP 8') {
            return '#61DBFF';
        }
        else if (sessionStorage.getItem('legacyRes' + x) === 'ELIMINATED') {
            return 'gray';
        }
        else {
            return '#FF6161';
        }

        /*
        if (sessionStorage.getItem('legacyOrg' + x) === 'PFL') {
            return '#19CAE3';
        }
        else {
            return '#19CAE3';
        }
        */
    }

    render() {
        let data = sessionStorage.getItem('player');
        data = JSON.parse(data);
        let first = data.first;
        let last = data.last;
        let weight = data.weight;
        let cut = data.cut;
        let height = data.height;
        let nation = data.nation;
        let style = sessionStorage.getItem('style');
        let win = sessionStorage.getItem('win');
        let loss = sessionStorage.getItem('loss');
        let month = sessionStorage.getItem('month');
        let year = sessionStorage.getItem('year');
        return(
            <div className="App">
                <div className="App-header">
                    <div className="App-header-styleTop">
                        <img src={logo} alt='logo' className="App-logo1" style={{ marginTop: -730 }} />
                        LEGACY<br/><br/>
                    </div>
                    <Type style={{ marginTop: 135, marginLeft: 250 }}>PFL SEASONS</Type>
                    <Num style={{ marginTop: 165, marginLeft: 250 }}><b>{sessionStorage.getItem('pflSeasons')}</b></Num>
                    <Type style={{ marginTop: 135, marginLeft: 850 }}>PLAYOFF BERTHS</Type>
                    <Num style={{ marginTop: 165, marginLeft: 850 }}><b>{sessionStorage.getItem('pflPlayoffBerths')}</b></Num>
                    <Type style={{ marginTop: 135, marginLeft: 1450 }}>PFL TITLES</Type>
                    <Num style={{ marginTop: 165, marginLeft: 1450 }}><b>{sessionStorage.getItem('pflTitles')}</b></Num>
                    <Type style={{ marginTop: 280, marginLeft: 250 }}>UFC FIGHTS</Type>
                    <Num style={{ marginTop: 310, marginLeft: 250 }}><b>{sessionStorage.getItem('ufcFights')}</b></Num>
                    <Type style={{ marginTop: 280, marginLeft: 850 }}>UFC RANK BEST</Type>
                    <Num style={{ marginTop: 310, marginLeft: 850 }}><b>{sessionStorage.getItem('ufcRankBest')}</b></Num>
                    <Type style={{ marginTop: 280, marginLeft: 1450 }}>P4P BEST</Type>
                    <Num style={{ marginTop: 310, marginLeft: 1450 }}><b>{sessionStorage.getItem('ufcP4PBest')}</b></Num>
                    <Type style={{ marginTop: 425, marginLeft: 250 }}>UFC TITLE WINS</Type>
                    <Num style={{ marginTop: 455, marginLeft: 250 }}><b>{sessionStorage.getItem('ufcTitleWins')}</b></Num>
                    <Type style={{ marginTop: 425, marginLeft: 850 }}>BEST DEF. STREAK</Type>
                    <Num style={{ marginTop: 455, marginLeft: 850 }}><b>{sessionStorage.getItem('ufcBestDefStreak')}</b></Num>
                    <Type style={{ marginTop: 425, marginLeft: 1450 }}>BEST WIN STREAK</Type>
                    <Num style={{ marginTop: 455, marginLeft: 1450 }}><b>{sessionStorage.getItem('ufcBestWinStreak')}</b></Num>
                    <Type style={{ marginTop: 570, marginLeft: 250 }}>MAIN EVENTS</Type>
                    <Num style={{ marginTop: 600, marginLeft: 250 }}><b>{sessionStorage.getItem('ufcMainEvents')}</b></Num>
                    <Type style={{ marginTop: 570, marginLeft: 850 }}>POTN BONUSES</Type>
                    <Num style={{ marginTop: 600, marginLeft: 850 }}><b>{sessionStorage.getItem('ufcPotnBonuses')}</b></Num>
                    <Type style={{ marginTop: 570, marginLeft: 1450 }}>FOTN BONUSES</Type>
                    <Num style={{ marginTop: 600, marginLeft: 1450 }}><b>{sessionStorage.getItem('ufcFotnBonuses')}</b></Num>
                    <div className="App-header2" style={{ marginTop: 110, marginBottom: -660, marginLeft: -1000 }}>
                        <div className="Record">
                            <div>
                                <Button6>ORG</Button6>
                                <Button6a>SIGN DATE</Button6a>
                                <Button6b>RANK</Button6b>
                                <Button6c>W - L</Button6c>
                                <Button6e>TOTAL $</Button6e>
                            </div>
                        </div>
                        <div className="Record">
                            {sessionStorage.getItem('legacyYear1') != 'null' ?
                            <div>
                                <Button5 style={{ background: this.resColor(1) }}>{sessionStorage.getItem('legacyOrg1')}</Button5>
                                <Button5a style={{ background: this.resColor(1) }}>{sessionStorage.getItem('legacyYear1')}</Button5a>
                                <Button5b style={{ background: this.resColor(1) }}>{sessionStorage.getItem('legacyRank1')}</Button5b>
                                <Button5c style={{ background: this.resColor(1) }}>{sessionStorage.getItem('legacyRec1')}</Button5c>
                                <Button5e style={{ background: this.resColor(1) }}>${sessionStorage.getItem('legacyPay1')}</Button5e>
                            </div>
                            : undefined}
                        </div>
                        <div className="Record">
                            {sessionStorage.getItem('legacyYear2') != 'null' ?
                            <div>
                                <Button5 style={{ background: this.resColor(2) }}>{sessionStorage.getItem('legacyOrg2')}</Button5>
                                <Button5a style={{ background: this.resColor(2) }}>{sessionStorage.getItem('legacyYear2')}</Button5a>
                                <Button5b style={{ background: this.resColor(2) }}>{sessionStorage.getItem('legacyRank2')}</Button5b>
                                <Button5c style={{ background: this.resColor(2) }}>{sessionStorage.getItem('legacyRec2')}</Button5c>
                                <Button5e style={{ background: this.resColor(2) }}>${sessionStorage.getItem('legacyPay2')}</Button5e>
                            </div>
                            : undefined}
                        </div>
                        <div className="Record">
                            {sessionStorage.getItem('legacyYear3') != 'null' ?
                            <div>
                                <Button5 style={{ background: this.resColor(3) }}>{sessionStorage.getItem('legacyOrg3')}</Button5>
                                <Button5a style={{ background: this.resColor(3) }}>{sessionStorage.getItem('legacyYear3')}</Button5a>
                                <Button5b style={{ background: this.resColor(3) }}>{sessionStorage.getItem('legacyRank3')}</Button5b>
                                <Button5c style={{ background: this.resColor(3) }}>{sessionStorage.getItem('legacyRec3')}</Button5c>
                                <Button5e style={{ background: this.resColor(3) }}>${sessionStorage.getItem('legacyPay3')}</Button5e>
                            </div>
                            : undefined}
                        </div><div className="Record">
                            {sessionStorage.getItem('legacyYear4') != 'null' ?
                            <div>
                                <Button5 style={{ background: this.resColor(4) }}>{sessionStorage.getItem('legacyOrg4')}</Button5>
                                <Button5a style={{ background: this.resColor(4) }}>{sessionStorage.getItem('legacyYear4')}</Button5a>
                                <Button5b style={{ background: this.resColor(4) }}>{sessionStorage.getItem('legacyRank4')}</Button5b>
                                <Button5c style={{ background: this.resColor(4) }}>{sessionStorage.getItem('legacyRec4')}</Button5c>
                                <Button5e style={{ background: this.resColor(4) }}>${sessionStorage.getItem('legacyPay4')}</Button5e>
                            </div>
                            : undefined}
                        </div><div className="Record">
                            {sessionStorage.getItem('legacyYear5') != 'null' ?
                            <div>
                                <Button5 style={{ background: this.resColor(5) }}>{sessionStorage.getItem('legacyOrg5')}</Button5>
                                <Button5a style={{ background: this.resColor(5) }}>{sessionStorage.getItem('legacyYear5')}</Button5a>
                                <Button5b style={{ background: this.resColor(5) }}>{sessionStorage.getItem('legacyRank5')}</Button5b>
                                <Button5c style={{ background: this.resColor(5) }}>{sessionStorage.getItem('legacyRec5')}</Button5c>
                                <Button5e style={{ background: this.resColor(5) }}>${sessionStorage.getItem('legacyPay5')}</Button5e>
                            </div>
                            : undefined}
                        </div><div className="Record">
                            {sessionStorage.getItem('legacyYear6') != 'null' ?
                            <div>
                                <Button5 style={{ background: this.resColor(6) }}>{sessionStorage.getItem('legacyOrg6')}</Button5>
                                <Button5a style={{ background: this.resColor(6) }}>{sessionStorage.getItem('legacyYear6')}</Button5a>
                                <Button5b style={{ background: this.resColor(6) }}>{sessionStorage.getItem('legacyRank6')}</Button5b>
                                <Button5c style={{ background: this.resColor(6) }}>{sessionStorage.getItem('legacyRec6')}</Button5c>
                                <Button5e style={{ background: this.resColor(6) }}>${sessionStorage.getItem('legacyPay6')}</Button5e>
                            </div>
                            : undefined}
                        </div><div className="Record">
                            {sessionStorage.getItem('legacyYear7') != 'null' ?
                            <div>
                                <Button5 style={{ background: this.resColor(7) }}>{sessionStorage.getItem('legacyOrg7')}</Button5>
                                <Button5a style={{ background: this.resColor(7) }}>{sessionStorage.getItem('legacyYear7')}</Button5a>
                                <Button5b style={{ background: this.resColor(7) }}>{sessionStorage.getItem('legacyRank7')}</Button5b>
                                <Button5c style={{ background: this.resColor(7) }}>{sessionStorage.getItem('legacyRec7')}</Button5c>
                                <Button5e style={{ background: this.resColor(7) }}>${sessionStorage.getItem('legacyPay7')}</Button5e>
                            </div>
                            : undefined}
                        </div><div className="Record">
                            {sessionStorage.getItem('legacyYear8') != 'null' ?
                            <div>
                                <Button5 style={{ background: this.resColor(8) }}>{sessionStorage.getItem('legacyOrg8')}</Button5>
                                <Button5a style={{ background: this.resColor(8) }}>{sessionStorage.getItem('legacyYear8')}</Button5a>
                                <Button5b style={{ background: this.resColor(8) }}>{sessionStorage.getItem('legacyRank8')}</Button5b>
                                <Button5c style={{ background: this.resColor(8) }}>{sessionStorage.getItem('legacyRec8')}</Button5c>
                                <Button5e style={{ background: this.resColor(8) }}>${sessionStorage.getItem('legacyPay8')}</Button5e>
                            </div>
                            : undefined}
                        </div><div className="Record">
                            {sessionStorage.getItem('legacyYear9') != 'null' ?
                            <div>
                                <Button5 style={{ background: this.resColor(9) }}>{sessionStorage.getItem('legacyOrg9')}</Button5>
                                <Button5a style={{ background: this.resColor(9) }}>{sessionStorage.getItem('legacyYear9')}</Button5a>
                                <Button5b style={{ background: this.resColor(9) }}>{sessionStorage.getItem('legacyRank9')}</Button5b>
                                <Button5c style={{ background: this.resColor(9) }}>{sessionStorage.getItem('legacyRec9')}</Button5c>
                                <Button5e style={{ background: this.resColor(9) }}>${sessionStorage.getItem('legacyPay9')}</Button5e>
                            </div>
                            : undefined}
                        </div>
                    </div>
                    <div className="App-header-style" style={{ marginTop: 304, marginBottom: 0 }}>
                        <Link to='./career'><Button>STATS</Button></Link>
                        <Link to='./record'><Button>RECORD</Button></Link>
                        <Link to='./legacy'><ButtonG>LEGACY</ButtonG></Link>
                    </div>
                    <div className="Customize-desc1" style={{ textAlign: 'right', marginLeft: 0, marginRight: 0, marginTop: -400, fontSize: 30 }}>
                        <Button3>${sessionStorage.getItem('balance')}</Button3>
                        <Link to='./home'><Button4>BACK</Button4></Link>
                        <Button3>{this.calcMonth(month)} {sessionStorage.getItem('year')}</Button3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Legacy;