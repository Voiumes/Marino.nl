import React, { Component } from 'react'


export default class Filter extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <section id='filter'>
                <div className='filter-container'>
                    <h4>FILTER</h4>
                    <select name='neighbourhood' className='filters neighbourhood'>
                    <option>
                            Neighbourhood
                    </option>
                        <option>
                            Windermere
                    </option>
                        <option>
                            Pine Hills
                    </option>
                        <option>
                            Gotha
                    </option>
                    </select>
                    <select name='housetype' className='filters housetype' >
                    <option>
                            Housing 
                    </option>
                        <option>
                            Apartment
                    </option>
                        <option>
                            House
                    </option>
                        <option>
                            Condo
                    </option>
                    </select>
                    <select name='bedrooms' className='filters bedrooms' >
                    <option>
                            Rooms
                    </option>
                        <option>
                            1
                    </option>
                        <option>
                            2
                    </option>
                        <option>
                            3
                    </option>
                    </select>

                    <div className='filters price'>
                        <span>Price</span>

                        <input type='text' name='min-price' className='min-price' placeholder='$0.00' />
                        <input type='text' name='max-price' className='max-price' placeholder='$1,000,000' />
                    </div>
                    <div className='filters floor-space'>
                        <span>Floor Space</span>

                        <input type='text' name='min-price' className='min-price' placeholder='90 ft²' />
                        <input type='text' name='max-price' className='max-price' placeholder='150 ft²' />
                    </div>
                    <h3>Facilities</h3>
                    <div className='filters facilities'>
                        <label><span>Elevators </span><input name="facilities" value="elevator" type="checkbox" /></label>
                        <label><span>Storage </span><input name="facilities" value='storage' type="checkbox" /></label>
                        <label><span>Bath tub</span> <input name="facilities" value='bath-tub' type="checkbox" /></label>
                        <label><span>Separate shower</span> <input name="facilities" value='separate-shower' type="checkbox" /></label>
                        <label><span>Fireplace</span> <input name="facilities" value='fireplace' type="checkbox" /></label>
                        <label><span>Swimming Pool</span><input name="facilities" value='swimming-pool' type="checkbox" /></label>
                    </div>
                </div>


            </section>
        )
    }
}



