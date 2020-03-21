import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDom from 'react-dom';

class TarjetaFruta extends React.Component{

  state = {
    cantidad: 5
  }
  agregar=()=>this.setState({    
    cantidad:this.state.cantidad+1    
    
  })
  quitar=()=>this.setState({    
    cantidad:this.state.cantidad-1
  })
  limpiar =()=>this.setState({    
    cantidad:0
  })
  render(){
    return(
      <div>
      <h3>
        {this.props.name}                
      </h3>
    <div>Cantidad:{this.state.cantidad}</div>
      <button onClick ={this.agregar}>+</button>
      <button onClick ={this.quitar}>-</button>
      <button onClick ={this.limpiar}>Limpiar</button>
      <p>${this.props.price}</p>
    </div>
    );
  }  
}


const App = () =>(
  <div>
    <TarjetaFruta name="sandia" price={8.00}/>
    <TarjetaFruta name="Naranja" price={3.00} />
    <TarjetaFruta name="Kiwi"price={5.00}/>
    <TarjetaFruta name="Pina"price={2.50}>
        
    </TarjetaFruta>
  </div>

)

export default App;
