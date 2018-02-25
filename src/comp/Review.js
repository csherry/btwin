import React, { Component } from 'react';
import {
  Row,
  Col,
  Collapse,
  Container,
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
import './css/Review.css';
import 'bootstrap/dist/css/bootstrap.css';
import StarRatingComponent from 'react-star-rating-component';
import logo from "./css/img/logo.png";
import plder from"./css/img/placeholder.png";
 

class Review extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: 0,
            picture:plder,
            description:"",
            name:"",
            Pname:"",
            color:"",
            rating:0,
            
        }
        this.changeMode=this.changeMode.bind(this);
        this.saveimage=this.saveimage.bind(this);
        this.savename=this.savename.bind(this);
        this.savePname=this.savePname.bind(this);
        this.savecolor=this.savecolor.bind(this);
        this.savedesc=this.savedesc.bind(this);
        this.onStarClick=this.onStarClick.bind(this);
        this.onImageChange=this.onImageChange.bind(this);
        this.pushToDB=this.pushToDB.bind(this);
    }

  changeMode(bool){
      this.setState({
          mode:bool
      })
  }
    
    saveimage(image){
        var myimage = image.target.value;
        this.setState({
            picture:myimage
        });
        console.log(this.state.picture);
    } 
    
    savename(evt){
        var myname = evt.target.value;
        
        this.setState({
            name:myname
        })
        console.log(this.state.name);
    }  
    
    savePname(evt){
        var myPname = evt.target.value;
        
        this.setState({
            Pname:myPname
        })
        console.log(this.state.Pname);
    }  
    
    savedesc(evt){
        var mydescription = evt.target.value;
        
        this.setState({
            description:mydescription
        })
        console.log(this.state.description);
    }  
    
    savecolor(evt){
        var mycolor = evt.target.value;
        
        this.setState({
            color:mycolor
        })
        console.log(this.state.color);
    }  
    
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }
    
    onImageChange(event) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({
					picture: e.target.result
				});
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    
    pushToDB(){
       var obj ={
            picture:this.state.picture,
            name: this.state.name,
            Pname: this.state.Pname,
            color: this.state.color,
            description: this.state.description,
            rating: this.state.rating
        }
        console.log(obj);
    }
    
    insertData=()=>{
        var fd = new FormData();
        fd.append('brandName', this.state.name);
        fd.append('productName', this.state.Pname);
        fd.append('color', this.state.color);
        fd.append('description', this.state.description);
        fd.append('rating', this.state.rating);
        fd.append('picture', this.state.picture);
        
        console.log(fd);
        fetch("http://sherrychenxy.com/beautytwin/review.php",{
            method:'POST',
            body: fd 
        })
    }
    
    render() {
        
        const { rating } = this.state;
        
        
    return (
       <div>
		<div id="header">
		
		  <Navbar color="faded" light expand="md">
          <NavbarBrand>
				<span className="navbar-brand">
				<img src={logo}  id="Brandlogo" alt="logo" />
				 </span>
			 </NavbarBrand>
     
       
            <Nav id="menu" className="mr-auto" navbar>
              <NavItem>
                <NavLink onClick={this.props.changeModeto1}>Home</NavLink>
              </NavItem>
              <NavItem>
               <NavLink onClick={this.props.changeModeto2}>My Review</NavLink>
              </NavItem>
         	<NavItem>
				Sherry Chen
			</NavItem>
		
            </Nav>
         
        </Navbar>
		
		<hr/> 
		</div>
		
		
		
         <Container id="main-review">
		   <h2 >ADD YOUR RATE AND REVIEW</h2>
            <Row>

                <Col sm="4">
                <img id="target" alt="no image yet" src={this.state.picture}/>
                </Col>
                    
		        <Col sm="8">
                <input type="file" id="input-image" onChange={this.onImageChange.bind(this)}/>
                </Col>
                <Col sm="12">
                <h6>Rating: {rating} stars</h6>
                <StarRatingComponent 
                    name="rating" 
                    starCount={5}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
                </Col>
            </Row>
            <Row>
                <Col sm="12">
                <input type="text" placeholder="Brand Name" onChange={this.savePname}/>
                <input type="text" placeholder="Product Name" onChange={this.savename}/>
                <input type="text" placeholder="Color" onChange={this.savecolor}/>
                </Col>
                
                <Col sm="12">
                <textarea id="review" type="text" maxLength="400" placeholder="Review" onChange={this.savedesc}></textarea>
                <p id="text">Max: 200 words</p>
                </Col>
                
            </Row>
            <br/>
            <Row>
                <button className="uploadBtn" onClick={this.insertData}>Add my Review</button>
            </Row>
        </Container>
				
	    
        </div>
        );
    }
}

export default Review;
