import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Catalog from './components/Catalog';
import Download from './components/Download';
import Contacts from './components/Contacts';
import Cart from './components/Cart';
import Footer from './components/Footer';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      navigation: "home",
      count: 0
    }
  }

  updateNav = value => {
    this.setState({
      navigation: value
    });
  };

  render() {
    return (
      <div>
        <Navbar
          navigation={this.state.navigation}
          updateNav={this.updateNav} />
        <div className="container mt-12">
          {this.state.navigation === "home" ? <Main /> : ""}
          {this.state.navigation === "shop" ? <Catalog
            sumPrice={this.sumPrice}
            addToCart={this.addToCart} /> : ""}
          {this.state.navigation === "app" ? <Download /> : ""}
          {this.state.navigation === "contacts" ? <Contacts /> : ""}
          {this.state.navigation === "cart" ? <Cart
            addToCart={this.addToCart}
            removeFromCart={this.removeFromCart}
            sumPrice={this.sumPrice}
            minPrice={this.minPrice} /> : ""}
        </div>
        <Footer />
      </div>
    )
  }

}

export default App;
