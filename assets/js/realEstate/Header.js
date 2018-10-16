import React, { Component } from 'react'


export default class Header extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <header>
                <div className='container'>
                    <div className='logo'>Logo</div>
                    <nav className='navbar'>
                        <div>
                            <ul>
                                <li>
                                    <a href="#">Create Ads</a>
                                    <a href="#">About Us</a>
                                    <a href="#">Log In</a>
                                    <a href="#" className='register-btn'>Register</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

            </header>
        )
    }
}



