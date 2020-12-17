import React, { Component } from 'react'
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <section id='footer'>
                    <div className='footer'>
                        <span>COPYRIGHT 2020 | <strong>General Discount Cleaning</strong> | ALL RIGHTS RESERVED</span>
                    </div>
                </section>  
            </React.Fragment>
        )
    }
}

export default Footer;
