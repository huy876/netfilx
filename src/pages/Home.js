import React from 'react'
import Jumbotron from '../components/Jumbotron'
import jumbosData from '../fixtures/jumbo.json'
import Accordion from '../components/accordion/Accordion'
import EmailForm from '../components/EmailForm'
import backgroundImage from '../fixtures/home-bg.jpg'

const Home = () => {
    const bannerSectionStyle = {
        backgroundImage: `url(${backgroundImage})`
    } 
    return (
        <div className="page__home" >
            <div className="banner-section" style={bannerSectionStyle}>
                <div className="banner-wr">
                    <h2>Unlimitted films, TV programmes and more.</h2>
                    <p className="banner__sub-title">Watch anywhere, cancel at any time.</p>
                    <EmailForm 
                        top="Ready to watch? Enter your email 
                        to create or restart your membership"
                    />
                </div>                
            </div>
            <div className="jumbo-section">
                {jumbosData.map(jumbo => (
                    <Jumbotron 
                        key={jumbo.id}
                        {...jumbo}
                    />
                ))}
            </div>
            <div className="faq-section">
                <h3>Frequently Asked Questions</h3>
                <Accordion />
                <EmailForm 
                    top="Ready to watch? Enter your email to create
                        or restart your membership"
                />
            </div>
        </div>
    )
}

export default Home 

