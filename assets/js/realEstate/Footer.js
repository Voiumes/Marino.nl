import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default class Header extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <section id='footer'>
                <div className='footerGrid'>
                    <div className='footerPicture'>
                        <img className='phone' src='https://i.gyazo.com/39d9f76f7896d311925bb5f82fc115c0.png'></img><p>Marino.nl</p>
                    </div>
                    <div className='footerSocialMedia'>
                        <div className='download'>
                            <h1>Download Marino App</h1>
                            <p>Use our app to have 11,359</p><p>rental properties at hand</p>
                        </div>
                        <div>
                            <button>
                            <a href='#'> <FontAwesomeIcon icon="play" />  Playstore</a> 
                            </button>
                            <button>
                                <a href='#'> <FontAwesomeIcon icon="apple-alt" />  AppStore</a> 
                            </button>
                        </div>
                        <div className='socialMedia'>
                            <a href='#'><img  src='https://i.gyazo.com/eac54c5f749ac2a497e7ea348cb2d1ed.png'></img></a>
                            <a href='#'><img  src='https://i.gyazo.com/eb7d2f7d9bc0804b470064b54830d87f.png'></img></a>
                        </div>
                        <div className='dates'>2006-2017 Marino.nl B.V.</div>
                    </div>
                    <div className='footerLinksGrid'>
                        <div className='forTenants'>
                            <h4>For Tenants</h4>
                            <ul>
                                <li>
                                    <a href="#">About Marino</a>
                                </li>
                                <li>
                                    <a href='#'>Sign Up for Free</a> 
                                </li>
                                <li>
                                    <a href='#'>This is us</a>
                                </li>
                                <li>
                                    <a href='#'>Wonen OK</a>
                                </li>
                                <li>
                                    <a href='#'>Marino App</a>
                                </li>
                            </ul>
                        </div>
                        <div className='forAdv'>
                            <h4>For Advertisers</h4>
                                <ul>
                                    <li>
                                        <a href='#'>About Marino</a>
                                    </li>
                                </ul>
                                
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}



