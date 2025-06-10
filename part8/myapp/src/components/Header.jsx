import React,{Component} from 'react';
import {Link,NavLink} from 'react-router-dom';


class Header extends Component{
    render(){

        return(
            <div>
                <header>
                    <Link to="/">
                    <h4>React Router Exercises</h4>
                    </Link>
                    <nav>
                        <ul>
                            {/* Navlink is included active */}
                            <li><NavLink to={'/home'}>Home</NavLink></li>
                            <li><NavLink to={'/contact'}>Contact</NavLink></li>
                            <li><NavLink to={'/about'}>About</NavLink></li>
                            <li><NavLink to={'/product/1001'}>Product</NavLink></li>
                            <li><NavLink to={'/newsletter'}>Newsletter</NavLink></li>
                            <li><NavLink to={'/donate'}>Donate</NavLink></li>

                            <li><NavLink to={'/product/redbull/1001'}>Product Detail</NavLink></li>
                            <li><NavLink to={'/product/?q=reactjs'}>Product List By Query</NavLink></li>
                            <li><NavLink to={'/product/?keyword=reactjs&batch=2&fee=40000'}>Product List By multi Query</NavLink></li>

                            <li><NavLink to={'/language'}>Language</NavLink></li>
                            <li><NavLink to={'/language/en'}>Language English</NavLink></li>
                            <li><NavLink to={'/language/th'}>Language Thailand</NavLink></li>
                            <li><NavLink to={'/language/sri'}>Language Srilanka</NavLink></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;