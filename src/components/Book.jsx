import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Book extends Component {
  // Refer https://reactjs.org/docs/typechecking-with-proptypes.html
  static propTypes = {
    data: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func.isRequired,
  }

  handleAddToCart(e) {
    this.props.onAddToCart(this.props.data);
  }

  /*handleAddToCart = (e) => {
    this.props.onAddToCart({ title: this.props.data.title, price: this.props.data.price});
  }*/

  render() {
    console.log("Book is rendering")
    return (
      <div style={{"margin": "10px", "padding": "35px", "background": "#e8e8e8", "width": "175px", "display": "inline-grid"}}>
        <h3 style={{color: 'blue'}}>{this.props.data.title}</h3>
        <p>
          {this.props.data.author} <br/>
          {this.props.data.publication} <br/>
          {this.props.data.year} <br/>
          <h4>{this.props.data.price}</h4>
        </p>
        <button onClick={this.handleAddToCart.bind(this)} style={{padding: "15px", background: 'teal', color: 'white'}}>
        {/*<button onClick={this.handleAddToCart}>*/}
          Add to Cart
        </button>
      </div>
    )
  }
}