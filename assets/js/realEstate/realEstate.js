import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Filter from './Filter.js';
import Listings from './Listings.js';
import Footer from './Footer.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faList, faTh, faChartArea, faCouch, faBed, faMapMarkerAlt, faAppleAlt, faPlay } from '@fortawesome/free-solid-svg-icons';
import listingData from './listingData/listingData.js';
library.add(faTh, faChartArea, faList, faCouch, faBed, faMapMarkerAlt, faAppleAlt, faPlay  )


class App extends Component {
    constructor() {
        super()
        this.state = {
            listingData,
            location:'All',
            houseType:'All',
            bedrooms:0,
            min_price:0,
            max_price:100000,
            min_area:0,
            max_area:10000,
            elevator: false,
            storage:false,
            bath_tub:false,
            separate_shower:false,
            fireplace:false,
            swimming_pool:false,
            filteredData: listingData,
            populateFormsData:'',
            sortby:'price_dsc',
            search:''
        },
            this.change = this.change.bind(this)
            this.filteredData = this.filteredData.bind(this)
            this.populateForms = this.populateForms.bind(this)
    }
    change(event) {
        let name = event.target.name
        let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
        this.setState({
            [name]: value
        }, ()=>{
            console.log(this.state)
            this.filteredData()
        })
    }
    filteredData(){
        let newData = this.state.listingData.filter((item)=>{
            return item.price >= this.state.min_price && item.price <= this.state.max_price &&
                    item.area >= this.state.min_area && item.area <= this.state.max_area &&
                    item.bedrooms >= this.state.bedrooms
            
            })   
        if(this.state.location != 'All'){
            newData = newData.filter((item)=>{
                return item.location == this.state.location
            })
            

        }
        if(this.state.houseType != 'All'){
            newData = newData.filter((item)=>{
                return item.houseType == this.state.houseType
            })
        }
        if(this.state.sortby === 'price_asc'){
            newData = newData.sort((a, b)=>{
                return a.price - b.price
            })
        }
        if(this.state.sortby === 'price_dsc'){
            newData = newData.sort((a, b)=>{
                return b.price - a.price
            })
        }
        this.setState({
            filteredData: newData
        })
        if(this.state.search !== ''){
            newData = newData.filter((item)=>{
                var city = item.city.toLowerCase();
                var searchText = this.state.search.toLowerCase();
                var n = city.match(searchText)

                if(n != 'null'){
                    return true
                }
            })
        }

    }

    populateForms(){

        let locations = this.state.listingData.map((item)=>{
            return item.location
        })
        locations = new Set(locations)
        locations = [...locations]
        locations = locations.sort()

        let houseTypes = this.state.listingData.map((item)=>{
            return item.houseType
        })
        houseTypes = new Set(houseTypes)
        houseTypes =[...houseTypes]
        houseTypes = houseTypes.sort()

        let bedrooms = this.state.listingData.map((item)=>{
            return item.bedrooms
        })
        bedrooms = new Set(bedrooms)
        bedrooms = [...bedrooms]
        bedrooms = bedrooms.sort()
        this.setState({
            populateFormsData:{
                locations,
                houseTypes,
                bedrooms
            }   
        }, ()=>{
            console.log(//this.state)
            )
        })
    }
   componentWillMount(){
       let listingData = this.state.listingData.sort((a, b)=>{
            return a.price - b.price
       })
   }




    render() {
        return (
            <div>
                <Header />
                    <div className='filterListingGrid'>
                        <div><Filter change={this.change} globalState={this.state} populateAction={this.populateForms}/></div>
                        <div><Listings listingData={this.state.filteredData} change={this.change} /></div>
                        
                    </div>
                    
                    <Footer />
            </div>
        )
    }
}


const app = document.getElementById('app')

ReactDOM.render(<App />, app)
