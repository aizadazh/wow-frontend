import React, { Component } from "react";
import { Container, Row } from "styled-bootstrap-grid";
import InnerDIv from "./InnerDiv";
import styled from 'styled-components';
import SearchTab from './SearchTab';

const TabLeft= styled.div`
 padding-top: 20%;
 background: white;
 width: 20%;
 left: 20%;
 height: auto;
 list-style: none;
 vertical-align: baseline;
 margin: 0px;
 padding: 0px;
 border-width: 0px;
 font: inherit;
`;

const TabRight= styled.div`
 background: white;
 width: 70%;
 right: 70%;
 height: auto;
 list-style: none;
 padding-top: 20%;
 margin: 0px;
 padding: 0px;
 border-width: 0px;
 font: inherit;
`;

export default class Questions extends Component { 
    render(){
      return (
        <Container> 
          <Row>
           <TabLeft>
            <div class="container-fluid content-container">
              <div class="col-4 col-md-4">
                <p>Tab 1</p>
                <p>Работа с сайтом</p>
                <p>Tab 2</p>
                <p>Tab 3</p>
                <p>Tab 4</p>
                <p>Tab 5</p>
                <p>Работа с заказом</p>
                <p>Tab 6</p>
                <p>Tab 7</p>
                <p>Tab 8</p>
                <p>Tab 9</p>
                <p>Tab 10</p>
                <p>Возврат</p>
                <p>Tab 11</p>
                <p>Tab 12</p>
              </div>
            </div>
          </TabLeft>
          <TabRight>
          <div class="col-8 col-md-8">
              <SearchTab/>
              <InnerDIv title="Lorem Ipsum is simply dummy text of the printing"/>
              <InnerDIv  title="Lorem Ipsum is simply dummy text of the printing"/>
              <InnerDIv  title="Lorem Ipsum is simply dummy text of the printing"/>
              <InnerDIv  title="Lorem Ipsum is simply dummy text of the printing"/>
              <InnerDIv  title="Lorem Ipsum is simply dummy text of the printing"/>
              <InnerDIv  title="Lorem Ipsum is simply dummy text of the printing"/>
          </div>
          </TabRight>
          </Row>
        </Container>
      );
    }
  }