import React, { Component } from 'react'


export default class Filter extends Component {
        constructor() {
                super()
                this.state = {
                }
                this.locations = this.locations.bind(this)
                this.houseTypes = this.houseTypes.bind(this)
                this.bedrooms = this.bedrooms.bind(this)
        }
        componentWillMount() {
                this.props.populateAction()
        }
        locations() {
                let locations = this.props.globalState.populateFormsData.locations
                if (locations != undefined) {
                        // console.log(locations)
                        return locations.map((item) => {
                                return (
                                        <option value={item} key={item}>
                                                {item}
                                        </option>
                                )
                        })
                }

        }
        houseTypes() {
                let houseTypes = this.props.globalState.populateFormsData.houseTypes
                if (houseTypes != undefined) {
                        // console.log(houseTypes)
                        return houseTypes.map((item) => {
                                return (
                                        <option value={item} key={item}>
                                                {item}
                                        </option>
                                )
                        })
                }
        }
        bedrooms() {
                let bedrooms = this.props.globalState.populateFormsData.bedrooms
                if (bedrooms != undefined) {
                        // console.log(bedrooms)
                        return bedrooms.map((item) => {
                                return (
                                        <option value={item} key={item}>
                                                {item}+
                                        </option>
                                )
                        })
                }
        }

        render() {
                return (
                        <section id='filter'>
                                <div className='filter-container'>
                                        <h4>FILTER</h4>
                                        <select name='location' className='filters neighbourhood' onChange={this.props.change}>
                                                <option value='All'>
                                                        All Locations
                                                </option>
                                                {this.locations()}

                                        </select>
                                        <select name='houseType' className='filters housetype' onChange={this.props.change} >
                                                <option value='All'>
                                                        Housing Type
                                                </option>
                                                {this.houseTypes()}




                                        </select>
                                        <select name='bedrooms' className='filters bedrooms' onChange={this.props.change}>
                                                <option value='0'>
                                                        Rooms
                                                 </option>
                                                {this.bedrooms()}


                                        </select>

                                        <div className='filters price'>
                                                <span>Price</span>
                                                <input type='text' name='min_price' className='min-price' placeholder='0.00' onChange={this.props.change} value={this.props.globalState.min_price} />
                                                <input type='text' name='max_price' className='max-price' placeholder='1,000,000' onChange={this.props.change} value={this.props.globalState.max_price} />
                                        </div>
                                        <div className='filters floor-space'>
                                                <span>Floor Space</span>
                                                <input type='text' name='min_area' className='min-price' placeholder='90 m²' onChange={this.props.change} value={this.props.globalState.min_area} />
                                                <input type='text' name='max_area' className='max-price' placeholder='150 m²' onChange={this.props.change} value={this.props.globalState.max_area} />
                                        </div>
                                        <h3>Facilities</h3>
                                        <div className='filters facilities'>
                                                <label><span>Elevators </span><input name="elevator" type="checkbox" onChange={this.props.change} /></label>
                                                <label><span>Storage </span><input name='storage' type="checkbox" onChange={this.props.change} /></label>
                                                <label><span>Bath tub</span> <input name='bath_tub' type="checkbox" onChange={this.props.change} /></label>
                                                <label><span>Separate shower</span> <input name='separate_shower' type="checkbox" onChange={this.props.change} /></label>
                                                <label><span>Fireplace</span> <input name='fireplace' type="checkbox" onChange={this.props.change} /></label>
                                                <label><span>Swimming Pool</span><input name='swimming_pool' type="checkbox" onChange={this.props.change} /></label>
                                        </div>
                                </div>


                        </section>
                )
        }
}



