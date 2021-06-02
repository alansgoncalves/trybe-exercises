// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    const shop = [{
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    },

    {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    }]

    return (
      <div className="App">
        <h1> Orders recently created </h1>
          {/* adicione os componentes aqui */}
          {/* {shop.map(shopper => <Order user={shopper.user} product={shopper.product} price={shopper.price} />)}    //Deixando dessa forma, o console vai exibir erro de key */}
          {shop.map((shopper, index) => <Order key={index} user={shopper.user} product={shopper.product} price={shopper.price} />)}   {/* //Colocando um index, e uma chave para o index, faz corrigir o erro do console */}
      </div>
    );
  }
}
 
export default App;