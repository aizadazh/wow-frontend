import React, { Component } from "react";
import Slider from "../elements/Slider";
import styled from "styled-components";
import WomenSlider from "../elements/WomenSlider";
import BottomBanners from "../elements/BottomBanners";
import SideBarCard from "../elements/SideBarCard";

const InnerCont = styled.div`
  grid-template-columns: 70% 30%;
  width: 100%;
  height:auto;
  div.allMiniSliders{
  grid-template-rows: 20% 20% 20% 20% 20%;
  }
  div.allBanners{
    grid-template-rows: 20% 20% 20%;    
    width: 100%; 
    padding: 10px 0;
  } 
`;


class MainContent extends Component {  
    render(){
      return (
       <>
          <Slider />
            <InnerCont>
              <div className="allMiniSliders">
                <WomenSlider /> 
                <WomenSlider />
                <WomenSlider /> 
                <BottomBanners />
                <WomenSlider /> 
                </div> 
                <div className="allBanners">
                  <SideBarCard />
                  <SideBarCard />  
                  <SideBarCard />              
                </div> 
                   
            </InnerCont>   
        </>
      );
    }
  }
  export default MainContent;