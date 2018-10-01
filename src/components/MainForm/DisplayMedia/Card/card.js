import React, { Component} from 'react';
import "./card.css"

export default class Card extends Component {

    render(){
        return(
            <div className='card'>
                <div class="cards">
                    <div class="square"></div> 
                    <div class="container">
                        <h4><b>Nombre de pelicula</b></h4> 
                        <p>Accion</p> 
                        <p>ver mas,   agregar a favoritos</p> 
                    </div>
                 </div>

            </div>
        )
    }

}