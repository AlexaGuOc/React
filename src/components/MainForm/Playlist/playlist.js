import React, { Component} from 'react';

export default class PlayList extends Component {

    render(){
        return(
            <div className='nav-bar'>
              <br></br>
              <h2>Lista de Favoritos</h2> 
              <hr></hr>
              <br></br>
              <h4>Pelicula1</h4>
              <br></br>
              <h4>Pelicula2</h4>
              <br></br>
              <h4>Pelicula3</h4> 
              <br></br>
              <hr></hr>
              <h4>Borrar Todo</h4>
              <h4>Detalles</h4> 
            </div>
        )
    }

}