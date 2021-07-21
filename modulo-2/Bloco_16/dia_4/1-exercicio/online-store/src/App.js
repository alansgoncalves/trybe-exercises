import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';

import Header from './components/Header';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import DetailsPage from './pages/DetailsPage';
import Login from './pages/LoginPage';
// import { getProducts } from './actions';

// import searchProductByText from './service/API.js';

import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // this.onClick = this.onClick.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
    this.removeProductOfCart = this.removeProductOfCart.bind(this);

    this.state = {
      // products: [],
      cartProducts: [],
    };
  }

  // async onClick(searchText) {
  //   const { getProductsAction } = this.props;
  //   this.setState({ loading: true });
  //   const { results } = await searchProductByText(searchText);
  //   getProductsAction({ products: results})
  // }

  addProductToCart(id) {
    const { products } = this.state;
    const product = products.find((prod) => prod.id === id);
    this.setState((prevState) => ({
      cartProducts: [...prevState.cartProducts, product],
    }));
  }

  removeProductOfCart(id) {
    const { cartProducts: products } = this.state;
    const cartProducts = products.filter((prod) => prod.id !== id);
    this.setState({ cartProducts });
  }

  render() {
    const {
      cartProducts,
    } = this.state;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Login />} />
          <Route exact path="/products" render={() => <MainPage addToCart={this.addProductToCart} />} />
          <Route exact path="/cart" render={() => <CartPage products={cartProducts} onClick={this.removeProductOfCart} />} />
          <Route path="/details/:id" render={(props) => <DetailsPage {...props} addToCart={this.addProductToCart} />} />
        </Switch>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   getProductsAction: (payload) => dispatch(getProducts(payload)),
// })

// export default connect(null, mapDispatchToProps)(App);
export default App;
