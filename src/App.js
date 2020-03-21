import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDom from 'react-dom';
 const TarjetaFruta = (props) =>{
   console.log(props)
  return (
    <div>
      <h3>
        {props.name}                
      </h3>
      
      <p>${props.price}</p>
    </div>
  );
}
const App = () =>(
  <div>
    <TarjetaFruta name="sandia" price={2.00}/>
    <TarjetaFruta name="Naranja" price={3.00} />
    <TarjetaFruta name="Kiwi"price={5.00}/>
    <TarjetaFruta name="Pina"price={2.50}>
        
    </TarjetaFruta>
  </div>

)

export default App;
