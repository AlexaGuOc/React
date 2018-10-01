import React, { Component} from 'react';
import './navbar.css';
export default class NabBar extends Component {

    render(){
        return(
            <div className='nav-bar'>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>News</a></li>
                    <li><a>Contact</a></li>
                    <li><a>About</a></li>
                </ul>
            </div>
        )
    }

}