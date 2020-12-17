import React, { Component } from 'react'
import './hero.css';

// icons
import Budget from '../../images/icons/budget_icon.svg'
import Care from '../../images/icons/care.svg'
import Time from '../../images/icons/time.svg';
import Details from '../../images/icons/details.svg';
import Visit from '../../images/icons/visit.svg';
import Schedule from '../../images/icons/schedule.svg';
import Customer from '../../images/icons/customer_service.svg';
import Eco from '../../images/icons/eco.svg';

// images
import HouseCleaning from '../../images/house_cleaning_2.jpeg';
import OfficeCleaning from '../../images/office_cleaning.jpg';
import CondoCleaning from '../../images/condo2.jpg';
import CarpetCleaning from '../../images/carpet_floor_cleaning.jpeg';
import Restaurant from '../../images/restaurant.jpg';
import Commercial from '../../images/commercial.jpeg';

class Hero extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='hero-div'>
                    {/* landing page */}
                    <div className='landing-page'>
                        <div className='landing-text-div'>
                            <h1 className='company-name'>General Discount Cleaning</h1>
                            <h3 className='company-brief-desc'>Proffesional Residential Cleaning Services</h3>
                            <p className='company-services'>We provide complete cleaning services</p>
                            <a className='landing-page-link' href='#' alt='learn more'>Learn more</a>
                        </div>
                    </div>

                    {/* info section */}
                    <div className='info-page'>
                        <h3 className='info-page-subtitle'>WHY US</h3>
                        <h4 className='info-page-quote'>We are confident that you will be satisfied with our service</h4>
                        <hr className='subtitle-line' />
                        <div className='info-page-list'>
                            <div className='benefits-div'>
                                <div className='icon-text-div'>
                                    <img className='icon' src={Care} />
                                    <p className='service-benefits'>Cleaning with Care</p>
                                </div>
                                <div className='icon-text-div'>
                                    <img className='icon' src={Budget} />
                                    <p className='service-benefits'>Affordable Prices</p>
                                </div>
                                <div className='icon-text-div'>
                                    <img className='icon' src={Time} />
                                    <p className='service-benefits'>On Time Service</p>
                                </div>
                                <div className='icon-text-div'>
                                    <img className='icon' src={Details} />
                                    <p className='service-benefits'>Remarkale Attention to Details</p>
                                </div>   
                            </div>

                            <div className='benefits-div'>
                                <div className='icon-text-div'>
                                    <img className='icon' src={Schedule} />
                                    <p className='service-benefits'>Flexible Schedules</p>
                                </div>
                                <div className='icon-text-div'>
                                    <img className='icon' src={Customer} />
                                    <p className='service-benefits'>Outstanding Customer Service</p>
                                </div>
                                <div className='icon-text-div'>
                                    <img className='icon' id='eco' src={Eco} />
                                    <p className='service-benefits'>Eco-friendly organic cleaning</p>
                                </div>
                            </div>  
                        </div>
                    </div>

                    {/* services section */}
                    <section id='service'>
                        <div className='services-page'>
                            <h3 className='services-page-subtitle'>OUR SERVICES</h3>
                            <h4 className='services-page-quote'>We offer variety of cleaning services</h4>
                            <hr className='services-page-line' />
                            <div className='services-div'>
                                <div className='services-row'>
                                    <div className='service-card'>
                                        <img className='service-img' src={HouseCleaning} />
                                        <h4 className='service-name'>House & Cottage Cleaning</h4>
                                    </div>
                                    <div className='service-card'>
                                        <img className='service-img' src={OfficeCleaning} />
                                        <h4 className='service-name'>Office Cleaning</h4>
                                    </div>
                                    <div className='service-card'>
                                        <img className='service-img' src={CondoCleaning} />
                                        <h4 className='service-name'>Building & Condo Cleaning</h4>
                                    </div>
                                </div>
                                <div className='services-row'>
                                    <div className='service-card'>
                                        <img className='service-img' src={CarpetCleaning} />
                                        <h4 className='service-name'>Carpet & Floor Cleaning</h4>
                                    </div>
                                    <div className='service-card'>
                                        <img className='service-img' src={Restaurant} />
                                        <h4 className='service-name'>Restaurant Cleaning</h4>
                                    </div>
                                    <div className='service-card'>
                                        <img className='service-img' src={Commercial} />
                                        <h4 className='service-name'>Commercial Cleaning</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        )
    }
}

export default Hero;
