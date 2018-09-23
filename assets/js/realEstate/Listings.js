import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Listings extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        } 
        this.loopListings.bind(this)
    }
    listingLength(){
        let { listingData } = this.props
        return listingData.map((listing , index) => {
            return (
                <div key ={index} className='inline'>
                    let listingNumber = {listingData.length}
                     listingNumber.length
                </div>        
            )
        })
    }
    loopListings() {
        let { listingData } = this.props
        if(listingData == undefined || listingData.length == 0){
            return 'Sorry your search did not match any results'
        }

        return listingData.map((listing , index) => {
            return (
                
                <div className='listing' key={index}>
               
                    <div className='listing-img' style={{background: `url("${listing.image}") no-repeat center center`}}>
                        <span className='address'>{listing.name}</span>
                        <div className='details'> 
                            <div className='user-img'>
                            </div>
                            <div className='user-details'>
                                <div className='user-name'>{listing.user}</div>
                                <div className='post-date'>Posted on {listing.postDate}</div>
                            </div>
                            <div className='listing-details'>
                                <div className='listing-floor-area'>
                                    <div> <FontAwesomeIcon icon="chart-area" /> {listing.area}m²</div>
                                </div>
                                <div className='furnished'>
                                    <div> <FontAwesomeIcon icon="couch" /> {listing.furnished}</div>
                                </div>
                                <div className='bedroom-count'>
                                    <div> <FontAwesomeIcon icon="bed" /> {listing.bedrooms} bedrooms <a className='view-map' href='#'>view map</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-info'>
                        <div className='listing-price'>${listing.price}/month (ex.)</div>
                        <div className='listing-location'><FontAwesomeIcon icon="map-marker-alt" /> Location: {listing.location}</div>
                    </div>
                </div>
            )
        })
    }

    render() {
        const { value } = this.state
        return (
            <section id='listings'>

                <section id='search-area'>
                    <input type='text' name='search' placeholder='Search' />

                </section>
                <section id='sort-by'>
                    <div className='results'>
                    <span>{this.listingLength().length} result(s) found</span>
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
                        {this.loopListings()}
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



