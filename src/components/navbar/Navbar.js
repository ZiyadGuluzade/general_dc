import React, { Component } from 'react'
import './navbar.css';
import Logo from '../logo/Logo';

export class Navbar extends Component {

    state = {
        isClicked: false
    }

    render() {

    const isOn = this.state.isClicked;

    return (
        <React.Fragment>
            <nav className='nav'>
                <div className='logo'>
                    <a className='logo-link' alt='logo' href='/'> 
                        <Logo />
                    </a> 
                </div>

                <ul className={isOn ? 'nav-links-list nav-active' : 'nav-links-list'}>
                    <li className='nav-list-item'><a className='nav-list-item-link' alt='home' href='/'>HOME</a></li>
                    <li className='nav-list-item'><a className='nav-list-item-link' alt='about' href='/about'>ABOUT</a></li>
                    <li className='nav-list-item'><a className='nav-list-item-link' alt='home' href='/#service'>SERVICE</a></li>
                    <li className='nav-list-item'><a className='nav-list-item-link' alt='about' href='/#contacts'>CONTACT</a></li>
                </ul>

                <div className='nav-burger' onClick={() => this.setState({isClicked: !isOn })}>
                    <i className="fas fa-bars fa-2x"></i>
                </div>
            </nav>
        </React.Fragment>
    )
    }
}

export default Navbar;