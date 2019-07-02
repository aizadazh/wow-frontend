import React, { Component } from "react";
import styled from "styled-components";
import { Col } from "react-bootstrap";
import { colors } from "../../Config/var";

import ProdImg from "../../static/images/product.jpg";


const TabCont = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background: ${colors.grey_1};
    width: 200px;
    height: 50px;
    margin-bottom: 10px;
    
`;

const TabText = styled.p`
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 5px;
    font-family: Roboto;
    font-size: ${font_size.productText};
    font-weight: 400;
    color: ${colors.dark_3};
`;

export default class TabCont extends Component {
    render() {
        return (
            <Col sm={6} md={4} lg={3} xl={3}>
                <TabCont>
                    <TabText> Est et modo omittam,
                                elit dolores molestie pro eu, 
                                duis iudicabit ne duo. Ex verear 
                                deseruisse est, his legere possit 
                                theophrastus ut
                    </TabText>
                </TabCont>
            </Col>
        );
    }
}
