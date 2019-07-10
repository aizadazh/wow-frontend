import React, { Component } from "react";
import {Link} from "react-router-dom";
import {LogoLink,LogoImg,SearchBox,Input,Label,HighLight,SearchButton,SearchIcon,HeaderLeftPart} from "../../Config/HeaderTopStyle";
import logo from "../../static/images/11a.png";


  
  
  
//   
  
//     .input:not(:placeholder-shown) + .label {
//       font-size: 0.9rem;
//       top: 3px;
//       color: #6c757d;
//     }
  
//     .input:focus ~ .label {
//       font-size: 0.9rem;
//       top: 3px;
//       color: #4279a3;
//       transition: all 0.5s ease;
//     }
  

//     .input:focus ~ .highlight {
//       width:80%;
//       transition: all 1s ease;
//     }
  
//   }








class SearchInput extends Component {  
    render(){
      return (
        <HeaderLeftPart>
            <LogoLink><Link to = "/" ><LogoImg  alt = "logo" src={logo}/></Link></LogoLink>
            <form>
                <div>
                    <SearchBox>
                        <Input type="text"  placeholder="&nbsp;"/>
                        <Label>хочу купить</Label>
                        <HighLight/>
                        <SearchButton>
                            <SearchIcon className="icon-search "></SearchIcon>
                        </SearchButton>
                    </SearchBox>
                </div>
            </form>       
        </HeaderLeftPart>              
      )
    }
  }
export default SearchInput