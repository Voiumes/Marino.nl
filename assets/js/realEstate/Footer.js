import React, { Component } from 'react'


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
                            Download Marino App
                        </div>
                    </div>
                    <div className='footerLinks'>

                    </div>
                </div>
            </section>
        )
    }
}



