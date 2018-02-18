import React, { Component } from 'react';
import { Nav, NavItem, NavLink,  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Homepage.css';
import Review from './Review.js';

class homepage extends Component {
        constructor(props){
        super(props);
        
        this.state = {
            mode: 0
        }
        
//        this.fbLogin = this.fbLogin.bind(this);
        this.changeMode=this.changeMode.bind(this);
//        this.signup = this.signup.bind(this);
    }
    
    changeMode(bool){
        this.setState({
            mode:bool
        })
    }
componentDidMount(){
        var fd = new FormData();

        fd.append('name', this.props.fbName);
        fd.append('email', this.props.fbPic);

           console.log(fd);
           fetch('http://sherrychenxy.com/beautytwin/insert.php', {
               method:'POST',
               body:fd
           })
}
    
  render() {
      var comp = null;
        
        if(this.state.mode === 0 ){
            comp = (
                <div className="App">
      <div>
		
		<span className="loginName"> Hello, sherry </span>
		<a className="signout"  href="#" >Sign out</a> 
		<br/>
       <hr/> 
	
        <Nav>
          <NavItem>
            <NavLink href="#">HOME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">MYREVIEW</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"> LOGIN</NavLink>
          </NavItem>
          <NavItem>
            <NavLink  href="#">SIGN UP</NavLink>
          </NavItem>
        </Nav>
      
       <img id="Brandlogo" src="./img/logo.png" alt="logo"/>
      
      </div>
		
		<div id="landingDiv">
		<button className="addRBtn" onClick={this.changeMode.bind(this,1)}> ADD MYREVIEW</button> 
		
		
		</div>
		<p>Top Rated Exfoliants</p>
	
	<div id="wrap">
		
		<div id="columns" className="clumns_4">
		
		<figure>
			<figcaption>COLLECTOR PALETTE DAZZLING LIGHTS EDITION</figcaption>
			<img src="/img/YSL.png" alt="product1"/>
			<br/>
		 	<span className="userName">Tiffanytt</span>
		    <br/>

			<br/>
			<p>This is a really beautiful palette and I’m happy I bought it. The standout product is the highlighter: a friend actually told me I was glowing. </p>
    		<a className="shopBtn" href="#">Find Online</a>
		</figure>
		
				<figure>
			<figcaption>COLLECTOR PALETTE DAZZLING LIGHTS EDITION</figcaption>
			<img href="/img/1.JEGP" />
			<br/>
		 	<span className="userName">Caizi</span>
			<br/>
			<p>Love it ! Leaves My Skin Feeling Soft And Glowing. Takes The Powder Look AwAy. Makes My Make-up Look And Feel Flawless .</p>
    		<a className="shopBtn" href="#">Find Online</a>
		</figure>
				<figure>
			<figcaption>COLLECTOR PALETTE DAZZLING LIGHTS EDITION</figcaption>
			<img href="/img/1.JEGP" />
			<br/>
		 	<span className="userName">Pony</span>
			<br/>
			<p>This color has a great payoff. Looks perfect on me. But the product itself leaves much to be desired. 
		     dasfasggadgfd
		fdasfdasfadsfdas</p>
    		<a className="shopBtn" href="#">Find Online</a>
		</figure>
		<figure>
			<figcaption>COLLECTOR PALETTE DAZZLING LIGHTS EDITION</figcaption>
			<img src="/img/1.jepg" />
			<br/>
		 	<span className="userName">Pony</span>
			<br/>
			<p>This color has a great payoff. Looks perfect on me. But the product itself leaves much to be desired. 
		     dasfasggadgfd
		fdasfdasfadsfdas</p>
    		<a className="shopBtn" href="#">Find Online</a>
		</figure>
		<figure>
			<figcaption>COLLECTOR PALETTE DAZZLING LIGHTS EDITION</figcaption>
			<img src="/img/1.jepg" />
			<br/>
		 	<span className="userName">Pony</span>
			<br/>
			<p>This color has a great payoff. Looks perfect on me. But the product itself leaves much to be desired. 
		     dasfasggadgfd
		fdasfdasfadsfdas</p>
    		<a className="shopBtn" href="#">Find Online</a>
		</figure>
		<figure>
			<figcaption>COLLECTOR PALETTE DAZZLING LIGHTS EDITION</figcaption>
			<img src="/img/1.jepg" />
			<br/>
		 	<span className="userName">Pony</span>
			<br/>
			<p>This color has a great payoff. Looks perfect on me. But the product itself leaves much to be desired. 
		     dasfasggadgfd
		fdasfdasfadsfdas</p>
    		<a className="shopBtn" href="#">Find Online</a>
		</figure>
		<figure>
			<figcaption>COLLECTOR PALETTE DAZZLING LIGHTS EDITION</figcaption>
			<img src="/img/1.jepg" />
			<br/>
		 	<span className="userName">Pony</span>
			<br/>
			<p>This color has a great payoff. Looks perfect on me. But the product itself leaves much to be desired. 
		     dasfasggadgfd
		fdasfdasfadsfdas</p>
    		<a className="shopBtn" href="#">Find Online</a>
		</figure>
		<figure>
			<figcaption>COLLECTOR PALETTE DAZZLING LIGHTS EDITION</figcaption>
			<img src="/img/1.jepg" />
			<br/>
		 	<span className="userName">Pony</span>
			<br/>
			<p>This color has a great payoff. Looks perfect on me. But the product itself leaves much to be desired. 
		     dasfasggadgfd
		fdasfdasfadsfdas</p>
    		<a className="shopBtn" href="#">Find Online</a>
		</figure>
		
		
		</div>
		</div>
	</div>
            );
        }else if(this.state.mode === 1){
         comp = (
             <Review 
             />
                );
        } 
      
    return (
             <div>
                    {comp}
                </div>
      
    );
  }
}

export default homepage;