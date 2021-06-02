import './App.css';
import React from 'react'

class App extends React.Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    // iteramos sobre shoppingList com uma HOF (.map) que retorne, em um novo array , cada item da lista envolvido por um elemento <li>
    const items = shoppingList.map((item) => {
      console.log("item: ", item);
      return (<li>{ item }</li>);
    });

    return (
      <div>
        <h2>Lista de compras</h2>
        <ul>
          { items }
        </ul>
      </div>
    );
  }
}

export default App;
