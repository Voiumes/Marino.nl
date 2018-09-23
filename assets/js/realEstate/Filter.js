import React, { Component } from 'react'


export default class Filter extends Component {
    constructor() {
        super()
        this.state = {
        }
        // this.locations = this.locations.bind(this)
    }
    componentWillMount(){
            this.props.populateAction()
    }
//     locations(){
//         let locations = this.props.globalState.populateFormsData
//         console.log(locations)
//                 // return locations.map((item)=>{
//                 // return(
//                 //         <option value='{item}'>
//                 //                 {item}
//                 //         </option>
//                 // )
//         // })
//     }
//     homeTypes(){

//     }
//     bedrooms(){

//     }

    render() {
        return (
            <section id='filter'>
                <div className='filter-container'>
                    <h4>FILTER</h4>
                    <select name='location' className='filters neighbourhood' onChange={this.props.change}>
                    <option value='All'>
                            All Locations
                    </option>
                     

                    </select>
                    <select name='houseType' className='filters housetype' onChange={this.props.change} >
                    <option value='All'>
                            Housing Type
                    </option>
                    <option value='apartment'>
                            Apartment
                    </option>
                    <option value='condo'>
                            Condo
                    </option>
                    <option value='house'>
                            House
                    </option>




                    </select>
                    <select name='bedrooms' className='filters bedrooms' onChange={this.props.change}>
                    <option value='0'>
                            Rooms
                    </option>
                    <option value='1'>
                            1+
                    </option>
                    <option value='2'>
                            2+
                    </option>
                    <option value='3'>
                            3+
                    </option>


                    </select>

                    <div className='filters price'>
                        <span>Price</span>
                        <input type='text' name='min_price' className='min-price' placeholder='0.00' onChange={this.props.change} value={this.props.globalState.min_price}/>
                        <input type='text' name='max_price' className='max-price' placeholder='1,000,000' onChange={this.props.change} value={this.props.globalState.max_price} />
                    </div>
                    <div className='filters floor-space'>
                        <span>Floor Space</span>
                        <input type='text' name='min_area' className='min-price' placeholder='90 m²' onChange={this.props.change} value={this.props.globalState.min_area} />
                        <input type='text' name='max_area' className='max-price' placeholder='150 m²' onChange={this.props.change} value={this.props.globalState.max_area}/>
                    </div>
                    <h3>Facilities</h3>
                    <div className='filters facilities'>
                        <label><span>Elevators </span><input  name="elevator" type="checkbox" onChange={this.props.change} /></label>
                        <label><span>Storage </span><input  name='storage' type="checkbox" onChange={this.props.change}/></label>
                        <label><span>Bath tub</span> <input name='bath_tub' type="checkbox" onChange={this.props.change}/></label>
                        <label><span>Separate shower</span> <input name='separate_shower' type="checkbox" onChange={this.props.change} /></label>
                        <label><span>Fireplace</span> <input  name='fireplace' type="checkbox" onChange={this.props.change} /></label>
                        <label><span>Swimming Pool</span><input  name='swimming_pool' type="checkbox" onChange={this.props.change} /></label>
                    </div>
                </div>


            </section>
        )
    }
}



