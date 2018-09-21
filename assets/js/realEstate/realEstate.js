import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Filter from './Filter.js';
import Listings from './Listings.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faList, faTh, faChartArea, faCouch, faBed, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import listingData from './listingData/listingData.js';




library.add(faTh, faChartArea, faList, faCouch, faBed, faMapMarkerAlt)


class App extends Component {
    constructor() {
        super()
        this.state = {
            listingData
        }
    }

    render() {
        console.log(this.state.listingData)
        return (
            <div>
                <Header />
                <section id='content-area'>
                    <Filter />
                    <Listings />
              
                </section>
            </div>
        )
    }
}


const app = document.getElementById('app')

ReactDOM.render(<App />, app)
