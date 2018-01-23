import React, { Component } from 'react';
import Book from './components/Book';
import Cart from './components/Cart';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myVal: "",
      bookColln: [],
      myCart: []
    }

    this.styles = {
      outerDiv: {
        margin: "10px",
        padding: "10px"
      },
      display: {
        margin: "10px",
        padding: "20px",
        background: '#e2e2e2',
        width: "50%"
      }
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({bookColln: [
        {title: "Are your lights on", author: "Donald C. Gause, Gerald M. Weinberg", publication: "John Wiley & Sons", year: "30 August 1990", price: "1,500/-"},
        {title: "Data Model Resource Book", author: "Len Silverston", publication: "John Wiley & Sons", year: "9 April 2001", price: "6,000/-"},
        {title: "The Mind Map Book", author: "Tony Buzan, Barry Buzan", publication: "Penguin USA", year: "6 September 1993", price: "2,000/-"},
        {title: "An Introduction to General Systems Thinking", author: "Gerald M. Weinberg", publication: "John Wiley & Sons", year: "1 January 1975", price: "3,000/-"},
        {title: "Flow: The Psychology of Optimal Experience", author: "Mihaly Csikszentmihalyi", publication: "Harper Perennial Modern Classics", year: "1 July 2008", price: "800/-"}
      ]})
    }, 3000);
  }

  handleInput = (e) => {
    this.setState({
      myVal: e.target.value
    })
  }

  handleAddToCart = (book) => {
    let cart = this.state.myCart;
    cart.push(book);
    this.setState({
      myCart: cart
    })
  }

  render() {
    console.log("App is rendering")
    return (
      <div style={this.styles.outerDiv}>
        <div style={this.styles.outerDiv}>
          Please type something
          <input type="text" value={this.state.myVal} onChange={this.handleInput}/>
        </div>
        <p style={this.styles.display}>
          {this.state.myVal}
        </p>
        <div>
        <h2>Books</h2>
        {
          (this.state.bookColln.length > 0) ?
            this.state.bookColln.map((b, index) => {
            return (<Book key={index} data={b} onAddToCart={this.handleAddToCart}/>)
            })
          : 'Loading....!'
        }
        </div>
        <div>
          <Cart items={this.state.myCart}/>
        </div>
      </div>
    );
  }
}

export default App;
