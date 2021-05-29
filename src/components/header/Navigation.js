import React,{Component} from 'react';
import {Navbar,NavbarBrand,Nav,NavItem,NavbarToggler,Collapse} from 'reactstrap';
import {Link} from 'react-router-dom';

class Navigation extends Component {
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false
        }
    }
   
    navbarToggler = () =>{
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }


    render(){
        return(
            <div>
                 <Navbar dark color="dark" expand="sm">
                     <div class="container">
                         <NavbarToggler onClick={this.navbarToggler} />
                         <NavbarBrand href="#">Nazrul Resturent</NavbarBrand>
                         <Collapse isOpen={this.state.isNavOpen} navbar>
                         <Nav className="mr-auto" navbar style={{marginLeft:"55px"}}>
                             <NavItem>
                                 <Link to="/" className="nab-link active " style={{margin:"5px"}}>Home</Link>
                             </NavItem>
                             <NavItem>
                                 <Link to="/menu" className="nab-link " style={{margin:"5px"}}>Menu</Link>
                             </NavItem>
                             <NavItem>
                                 <Link to="/about" className="nab-link " style={{margin:"5px"}}>About</Link>
                             </NavItem>
                             <NavItem>
                                 <Link to="/contact" className="nab-link " style={{margin:"5px"}}>Contact</Link>
                             </NavItem>
                         </Nav>

                         </Collapse>
                     </div>
                     </Navbar> 
            </div>
        )
    }
   
}

export default Navigation;