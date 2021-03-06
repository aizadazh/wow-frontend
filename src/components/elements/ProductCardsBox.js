import React, { Component } from "react";
import styled from "styled-components";
import { Col} from "styled-bootstrap-grid";
import CategoryCard from "./CategoryСard";
import DropdownCategory from "./DropdownCategory";
import { colors} from "../../Config/Var";


const MainProductBox = styled.div`
    display: flex;
    flex-direction: column;
    background: ${colors.white};
`;

const ProductBox = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export default class ProductCardBox extends Component {
    render() {
        return (
            <Col md={12} lg={10} xl={10}>
                <MainProductBox>
                    <DropdownCategory/>
                    <ProductBox>
                       <CategoryCard/>
                    </ProductBox>
                </MainProductBox>
            </Col>
        );
    }
}






