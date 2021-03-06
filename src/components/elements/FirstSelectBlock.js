import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, font_size} from "../../Config/Var";
import { BtnSelect } from "./BtnSelect";

const Selectblock = styled.div`
   width: 130px;
   height: 120px;
   transition: 0.5s;
   padding: 0;
   margin-left: 15px;
   position: absolute; 
   z-index:1;
   background: ${colors.white};
   border-radius: 3px;
   text-align: center;
   a {
    font-family: Roboto;
    font-weight: 400;
    font-size: ${font_size.product_title};
    color: ${colors.dark_3};
    text-decoration: none;
  &:hover {
    color: ${colors.dropdown};
    }
`;
export default class FirstSelectBlock extends Component {
    render() {
        return (
            <Selectblock>
                <Link to="/Category"> Lorem ipsum </Link>
                <Link to="/Category"> Lorem ipsum </Link>
                <Link to="/Category"> Lorem ipsum </Link>
                <Link to="/Category"> Lorem ipsum </Link>
                <BtnSelect>Применить</BtnSelect>
            </Selectblock>
        );
    }
}    