import React, { Component } from 'react'
import './about.css';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import CleaningTeam from '../../images/cleaning_team.jpg';
import Contacts from '../contacts/Contacts';

export class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className='about-page'>
                    <h3 className='about-title'>ABOUT US</h3>
                    <hr className='about-page-line' />
                    <div className='about-div'>
                        <img className='about-image' src={CleaningTeam} />
                        <div className='about-text-div'>
                            <h4 className='about-text-title'>Cleaning Your Environment</h4>
                            <hr className='about-page-line' />
                            <p className='about-text'>
                                We offer our clients a wide variety of services in a range of facilities including Offices, Buildings and Condos, Commercial buildings, Cottages etc. General Discount Cleaning is the right team to provide the highest level of service. We work with every customer to assess the needs of each facility. We developed a customized service program with systems that will ensure a smooth transition and achieve the highest level of service and professionalism. Our team recognizes the importance that green products have become an essential part of the facility industry. We provide eco-friendly cleaning in order to keep environment clean and safe.</p>
                            <br/>
                            <a className='about-page-link' href='/#contacts' alt='contact us'>Learn more</a>
                        </div>
                    </div>
                    <div className='about-extra-info'>
                        <p className='about-text'>Our team at General Discount Cleaning takes commitment in achieving and maintaining high level of standards in the cleaning industry. We cooperate with successful organizations to reach our goals of creating clean and safe environment that we all share together. We give our staff necessary training and tools to help guide them to meet all expectations while maintaining high level of customer satisfaction.</p>
                        <div className='extra-info'></div>
                    </div>
                </div>
                <Contacts />
                <Footer />
            </React.Fragment>
        )
    }
}

export default About

