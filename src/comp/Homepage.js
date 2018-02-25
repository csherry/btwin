import React, { Component } from 'react';
import {
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/Homepage.css';
import logo from "./css/img/logo.png";
import landImg from "./css/img/landingPageBG2.jpg";
import Review from "./Review";
import MakeupImg from "./css/img/01.jpg";
import MakeupImg02 from "./css/img/02.jpeg";
import MakeupImg03 from "./css/img/03.png";
import StarRatingComponent from 'react-star-rating-component';

class Homepage extends Component {
constructor(props){
        super(props);
        
        this.state = {
            data:[]
        }
    }
    
    componentDidMount(){
        console.log(this.props.aa);
        var fd = new FormData();
        fd.append("fbName", this.props.fbName);
        fd.append("fbPic", this.props.fbPic);

        console.log(this.props.fbPic);
        console.log(this.props.fbName);
        fetch('http://sherrychenxy.com/beautytwin/insert.php', {
            method:'POST',
            body:fd
        })
        
        /*var fd1 = new FormData();

        fd1.append('gName', e.displayName);
        

        console.log(e.displayName);
        fetch('http://sherrychenxy.com/beautytwin/ginset.php', {
            method:'POST',
            body:fd1
        })*/
        
        fetch("http://sherrychenxy.com/beautytwin/reviewPost.php").then((resp)=>{
           console.log(resp); 
            return resp.json();
        }).then ((json)=>{
            console.log(json[0].color);
            this.setState({
                data:json
            })
        });
        
       console.log(this.state.data.productName);
    }
    
  render() {
      
      var comp = this.state.data.map((obj,i)=>{
         return(
            <div className="postCard" key={i}>
                            
            <div className="col-lg-4 col-sm-6 portfolio-item">
          <div className="card h-100">
		    <div className="card-img-top">
            <img className="img-fluid" alt="Responsive image" src={MakeupImg}  />
		     </div>
            <div className="card-body">
		      <p className= "productName"> {obj.brandName} {obj.productName} {obj.color}</p>
              <p className="usersName">
                  Sherry Chen
              </p>
            <StarRatingComponent 
                    name="rating" 
                    starCount={5}
                    value={obj.rating}
            />
              <p className="card-text">{obj.description}</p>
				<a className="shopBtn" href="#">Find Online</a>
            </div>
          </div>
        </div>
      
        </div>
         )
     })
      
      
    return (
      <div>
      <div id="header">
		
		  <Navbar color="faded" light expand="md">
          <NavbarBrand>
				<span className="navbar-brand">
				<img src={logo} id="Brandlogo" alt="logo" />
				 </span>
			 </NavbarBrand>
     
       
            <Nav id="menu" className="mr-auto" navbar>
              <NavItem>
                <NavLink onClick={this.props.changeModeto1}>Home</NavLink>
              </NavItem>
              <NavItem>
               <NavLink onClick={this.props.changeModeto2}>My Review</NavLink>
              </NavItem>
			<NavItem id="uName" className="mr-auto">
				Sherry Chen
			</NavItem>
              
            </Nav>
         
        </Navbar>
		
		<hr/> 
		
		</div>
		<br/>
		
		<div id= "homepageBG" className="container">
		
		<p id="slogan" >We’re your Personal Cosmetic Lab,<br/> Helping Test and Find Makeup at a Fraction of the Price</p>
		<button type="button" className="addRBtn"> ADD MYREVIEW</button>
		</div>
	
	
		<div id="wrap" className="wrap">
		<div>           
		<h2>Top Reviews</h2>
		</div>
		</div>
		
		<div className="row">
        <div className="col-lg-4 col-sm-6 ">
          <div className="card h-100">
		    <div className="card-img-top">
            <img className="img-fluid" alt="Responsive image" src={MakeupImg}  />
		     </div>
            <div className="card-body">
		      <p className= "productName"> YSL Couture Palette</p>
              <p className="usersName">
                  Tiffanytt
              </p>
              <p className="card-text">This is a really beautiful palette and I’m happy I bought it. The standout product is the highlighter.</p>
				<a className="shopBtn" href="#">Find Online</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 ">
          <div className="card h-100">
		    <div className="card-img-top">
            <img className="img-fluid" alt="Responsive image" src={MakeupImg02} />
		    </div>
            <div className="card-body">
				<p className= "productName">
				MAC Viva Glam Lipstick 
				</p>
              <p className="usersName">
               Caizi
              </p>
              <p className="card-text">Love it ! Leaves My Skin Feeling Soft And Glowing. Takes The Powder Look AwAy. Makes My Make-up Look And Feel Flawless .</p>
				<a className="shopBtn" href="#">Find Online</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 ">
          <div className="card h-100">
			<div className="card-img-top">	
           <img  className="img-fluid" alt="Responsive image" src={MakeupImg03} />
		    </div>
            <div className="card-body">
				<p className= "productName">
				TOO FACED Born This Way Foundation 
				</p>
              <p className="usersName">
               Pony
              </p>
              <p className="card-text">
		      I have extremely extremely oily skin and I bought this because I heard many great reviews but I am thinking about returning it because of the lasting power.  
		      </p>
		 		<a className="shopBtn" href="#">Find Online</a>
            </div>
          </div>
        </div>
        
        
        
	</div>	
        {comp}
	</div>
    );
  }
}

export default Homepage;