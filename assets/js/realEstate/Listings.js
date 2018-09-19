import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-rangeslider';





export default class Listings extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
          value: 10
        }
    }
    handleChangeStart = () => {
        console.log('Change event started')
    };

    handleChange = value => {
        this.setState({
            value: value
        })
    };

    handleChangeComplete = () => {
        console.log('Change event completed')
    };

    render() {
        const { value } = this.state
        return (
            <section id='listings'>

                <Slider
                    min={0}
                    max={1000}
                    min={500}
                    max={1000}
                    value={value}
                    onChangeStart={this.handleChangeStart}
                    onChange={this.handleChange}
                    onChangeComplete={this.handleChangeComplete}
                />



                <section id='search-area'>
                    <input type='text' name='search' />
                </section>
                <section id='sort-by'>
                    <div>23 results found</div>
                    <div className='sort-options'>
                        <select>
                            <option value='date-des'>
                                Date descending
                            </option>
                            <option value='date-asc'>
                                Date ascending
                            </option>
                            <option value='price-des'>
                                Price dscending
                            </option>
                            <option value='date-asc'>
                                Price ascending
                            </option>
                        </select>
                    </div>
                    <div className='view'>
                        <div>
                            <FontAwesomeIcon icon="list" />
                        </div>
                        <div>
                            <FontAwesomeIcon icon="th" />
                        </div>
                    </div>
                </section>
                <section id='listings-results'>
                    <div className='listing'>
                        <div className='listing-img'>
                            <div className='user-img'>

                            </div>
                            <div className='user-details'>
                                <span className='user-name'>Poggers Champh</span>
                                <span className='post-date'>Posted on</span>
                            </div>
                            <div className='listing-details'>
                                <div className='listing-floor-area'>
                                    <div> <FontAwesomeIcon icon="chart-area" />254m²</div>
                                </div>
                                <div className='furnished'>
                                    <div> <FontAwesomeIcon icon="couch" />unfurnished</div>
                                </div>
                                <div className='bedroom-count'>
                                    <div> <FontAwesomeIcon icon="bed" />7 bedrooms</div>
                                </div>
                                <div className='view-map'>
                                    <div><a href='#'>view map</a></div>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-info'>
                            <span>$1350/mo</span>
                            <span><FontAwesomeIcon icon="map-marker-alt" /> Location: Orlando Fl</span>
                        </div>
                    </div>
                </section>
                <section id='pagination'>
                    <ul className='pagination-nums'>
                        <li>
                            1
                        </li>
                        <li>
                            1
                        </li>
                        <li>
                            1
                        </li>
                        <li>
                            1
                        </li>
                        <li>
                            1
                        </li>
                    </ul>
                </section>


            </section>
        )
    }
}



