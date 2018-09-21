import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Listings extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }


    render() {
        const { value } = this.state
        return (
            <section id='listings'>


                <section id='search-area'>
                    <input type='text' name='search' placeholder='Search' />

                </section>
                <section id='sort-by'>
                    <div className='results'>23 results found

                        <select className='result-order'>
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
                        <div className='view'>
                            <span className='list-icon'><FontAwesomeIcon icon="list" /></span><span className='grid-icon'><FontAwesomeIcon icon="th" /></span>
                        </div>
                    </div>

                </section>

                <section id='listings-results'>
                    <div className='listing-grid'>
                        <div className='listing'>
                            <div className='listing-img'>
                                <span className='address'>Lucky Landing</span>
                                <div className='details'>
                                    <div className='user-img'>
                                    </div>
                                    <div className='user-details'>
                                        <div className='user-name'>Meryl Watson</div>
                                        <div className='post-date'>Posted on 5/3/2018</div>
                                    </div>
                                    <div className='listing-details'>
                                        <div className='listing-floor-area'>
                                            <div> <FontAwesomeIcon icon="chart-area" /> 305m²</div>
                                        </div>
                                        <div className='furnished'>
                                            <div> <FontAwesomeIcon icon="couch" /> unfurnished</div>
                                        </div>
                                        <div className='bedroom-count'>
                                            <div> <FontAwesomeIcon icon="bed" /> 3 bedrooms <a className='view-map' href='#'>view map</a></div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className='bottom-info'>
                                <div className='listing-price'>$1550/month (ex.)</div>
                                <div className='listing-location'><FontAwesomeIcon icon="map-marker-alt" /> Location: Rotterdam</div>
                            </div>
                        </div>
                        <div className='listing'>
                            <div className='listing-img'>
                                <span className='address'>Lucky Landing</span>
                                <div className='details'>
                                    <div className='user-img'>
                                    </div>
                                    <div className='user-details'>
                                        <div className='user-name'>Meryl Watson</div>
                                        <div className='post-date'>Posted on 5/3/2018</div>
                                    </div>
                                    <div className='listing-details'>
                                        <div className='listing-floor-area'>
                                            <div> <FontAwesomeIcon icon="chart-area" /> 305m²</div>
                                        </div>
                                        <div className='furnished'>
                                            <div> <FontAwesomeIcon icon="couch" /> unfurnished</div>
                                        </div>
                                        <div className='bedroom-count'>
                                            <div> <FontAwesomeIcon icon="bed" /> 3 bedrooms <a className='view-map' href='#'>view map</a></div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className='bottom-info'>
                                <div className='listing-price'>$1550/month (ex.)</div>
                                <div className='listing-location'><FontAwesomeIcon icon="map-marker-alt" /> Location: Rotterdam</div>
                            </div>
                        </div>

                    </div>



                </section>
                <section id='pagination'>
                    <ul className='pages'>
                        <li className='previous'>
                            prev
                        </li>
                        <li className='active'>
                            1
                        </li>
                        <li>
                            2
                        </li>
                        <li>
                            3
                        </li>
                        <li>
                            4
                        </li>
                        <li>
                            5
                        </li>
                        <li className='next'>
                            next
                        </li>
                    </ul>
                </section>


            </section>
        )
    }
}



