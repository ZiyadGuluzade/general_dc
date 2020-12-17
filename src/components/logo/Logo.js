import React, { Component } from 'react'
import './logo.css';

import Leaf from '../../images/icons/maple.png'

class Logo extends Component {
    render() {
        return (
            <React.Fragment>
                <span className='logo-span'>GDC <img className='logo-svg' src={Leaf} /></span>
            </React.Fragment>
        )
    }
}


export default Logo;
