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
            sortby:'price_dsc'
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

    }

    populateForms(){
        //location
        let locations = this.state.listingData.map((item)=>{
            return item.location
        })
        locations = new Set(locations)
        locations = [...locations]
        locations = locations.sort()
        //houseType
        let houseTypes = this.state.listingData.map((item)=>{
            return item.houseType
        })
        houseTypes = new Set(houseTypes)
        houseTypes =[...houseTypes]
        houseTypes = houseTypes.sort()
        //bedrooms
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
                <section id='content-area'>
                    <Filter change={this.change} globalState={this.state} populateAction={this.populateForms}/>
                    <Listings listingData={this.state.filteredData} change={this.change} />

                </section>
            </div>
        )
    }
}


const app = document.getElementById('app')

ReactDOM.render(<App />, app)
