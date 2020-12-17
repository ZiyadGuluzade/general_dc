import React, { Component } from 'react'
import './contacts.css';

import Phone from '../../images/icons/phone.svg';
import Email from '../../images/icons/email.svg';
import Business from '../../images/icons/business.svg';
import ContactsImg from '../../images/cleaning4.jpg';

export class Contacts extends Component {
    render() {
        return (
            <React.Fragment>
                {/* contacts section */}
                <section id='contacts'>
                    <div className='contacts-page'>
                        <h3 className='contacts-page-subtitle'>GET IN TOUCH WITH US</h3>
                        <h4 className='contacts-page-quote'>Need a quote? Request one here</h4>
                        <hr className='contacts-page-line' />
                        <div className='contacts'>
                            <div className='contacts-info'>
                                <div className='contacts-icon-text-div'>
                                    <img className='contact-icon' src={Phone} />
                                    <p className='service-benefits'>Phone: <a className='phone-link' href='tel:6479044550'>+1(647) 904 4550</a></p>
                                </div>
                                <div className='contacts-icon-text-div'>
                                    <img className='contact-icon' src={Email} />
                                    <p className='service-benefits'>Email:<br/> <a className='email-link' href='mailto:generaldiscountcleaning@gmail.com'>generaldiscountcleaning@gmail.com</a></p>
                                </div>
                                <div className='contacts-icon-text-div'>
                                    <img className='contact-icon' src={Business} />
                                    <p className='service-benefits'>Business hours: Mon - Sun, 8am - 8pm</p>
                                </div>
                            </div>

                            <div className='contacts-img-div'>
                                <img className='contacts-img' src={ContactsImg} />
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Contacts
