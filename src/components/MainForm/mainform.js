import React, { Component} from 'react';
import NavBar from './NavBar/navbar';
import DisplayMedia from './DisplayMedia/displaymedia';
import Playlist from './Playlist/playlist';
import './mainform.css';


export default class MainForm extends Component {

    render(){
        return(
            <div className='main-form'>
                <NavBar></NavBar>
                <div class="grid-container">
                    <div class="grid-item">
                        <DisplayMedia></DisplayMedia>
                    </div>
                    <div class="grid-item2">
                        <Playlist></Playlist>
                    </div>
                </div>
            </div>
        )
    }

}