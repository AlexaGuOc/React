import React, { Component} from 'react';
import './displaymedia.css';
import Card from './Card/card'
export default class DisplayMedia extends Component {

    render(){
        return(
            <div className='display-media'>
                <h4>Cartelera Bedu By Ale</h4>
                <div class="grid-container2">
                    <div class="grid-item3">
                        <Card></Card>
                    </div>
                    <div class="grid-item3">
                        <Card></Card>
                    </div>
                    <div class="grid-item3">
                        <Card></Card>
                    </div>
                </div>
                <br></br>
                <div class="grid-container2">
                    <div class="grid-item3">
                        <Card></Card>
                    </div>
                    <div class="grid-item3">
                        <Card></Card>
                    </div>
                    <div class="grid-item3">
                        <Card></Card>
                    </div>
                </div>
            </div>
        )
    }

}
