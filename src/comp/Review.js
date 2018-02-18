import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './css/review.css';
import 'bootstrap/dist/css/bootstrap.css';

class Review extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: 0,
            picture:"",
            description:"",
            name:"",
        }
        this.changeMode=this.changeMode.bind(this);
        this.onDrop=this.onDrop.bind(this);
        this.savename=this.savename.bind(this);
        this.savedesc=this.savedesc.bind(this);
    }

  changeMode(bool){
      this.setState({
          mode:bool
      })
  }
    
onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }    
    
    savename(evt){
        var myname = evt.target.value;
        
        this.setState({
            name:myname
        })
        console.log(this.state.name);
    }  
    
    savedesc(evt){
        var mydescription = evt.target.value;
        
        this.setState({
            description:mydescription
        })
        console.log(this.state.description);
    }  
    
    
    render() {
        
    return (
       <div>
         <Container id="main-review">
            <Row>
                <Col sm="12">
                <input type="file" placeholder="Upload Image" /> 
                <div></div>
                </Col>
                
                <Col sm="4">
                <input type="text" placeholder="Product Name" onChange={this.savename}/>
                </Col>
        
                <Col sm="8">
                <input type="text" placeholder="Description" onChange={this.savedesc}/>
                </Col>
                
                <Col sm="12">
                
                </Col>
            </Row>
        </Container>
        </div>
        );
    }
}

export default Review;