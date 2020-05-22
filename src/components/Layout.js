import React, {useState} from "react";
import panda from "../image/panda-img.jpg"
import pandaFoot from "../image/panda-Foot.jpg"

import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';




const Layout = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return ( 
        <div className="row">
            <div className="col-sm-9">
                <div className="row pt-2">
                <img className="panda-img ml-3" src={panda} alt="panda-image" />
                <h2 className="mt-2">Panda</h2>
                </div>
            </div>


            <div className="col-sm-3">
                <Navbar color="faded" light expand="md">
                    <NavbarToggler onClick={toggleNavbar}/>
                    <Collapse isOpen={!collapsed} navbar>

                    <div className="col d-flex justify-content-end">
                    <Nav navbar>
                        <NavItem>
                        <NavLink href="#"><img className="panda-foot-img" src={pandaFoot} alt="panda-foot" /></NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="#"><button className="log-in">Log In</button></NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="#"><button className="sign-up">Sign Up</button></NavLink>
                        </NavItem>
                    </Nav>
                    </div>
                    
                    </Collapse>
                </Navbar>
                
            </div>
        </div>
    
    )
}

export default Layout