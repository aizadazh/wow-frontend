import React, { Component, Fragment } from "react";
import Footer from "./Footer";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import styled from "styled-components";
import { colors } from "../../Config/Var";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <HeaderTop />
        <HeaderBottom />
          <Content theme={theme}>{this.props.children}</Content>
        <Footer />
      </Fragment>  
    );
  }
}
const Content = styled.div` 
  height: 100%;
  margin: 0 auto;
  background: ${colors.grey_1};
`;
const theme = {
  font: "Roboto"
};

export default Layout;