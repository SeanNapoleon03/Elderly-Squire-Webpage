import React from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import './PageOne.css';

function PageOne({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart
}) {
    return (
        <>
            <div

                className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
            >
                <div className='container'>
                    <div
                        className='row home__hero-row'
                        style={{
                            display: 'flex',
                            flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
                        }}
                    >
                        <div className='col'>

                            <div className='home__hero-text-wrapper'>
                                <div className='top-line'>{topLine}</div>
                                <MessengerCustomerChat
                                    pageId="1713924158861422"
                                    appId="562326415523070"
                                />,
                                <h1 className={lightText ? 'heading' : 'heading dark'}>
                                    {headline}
                                </h1>
                                <p
                                    className={
                                        lightTextDesc
                                            ? 'home__hero-subtitle'
                                            : 'home__hero-subtitle dark'
                                    }
                                >
                                    {description}
                                </p>
                                <Link to='/'>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home__hero-img-wrapper'>
                                <img src={img} alt={alt} className='home__hero-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageOne
