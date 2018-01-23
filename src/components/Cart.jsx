import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Cart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      discount: ""
    }

    this.styles = {
      d: {
        padding: "15px",
        background: 'grey',
        color: "black"
      },
      e: {
        padding: "15px",
        background: 'orange',
        color: "black"
      }
    }
  }

  static propTypes = {
    items: PropTypes.array.isRequired
  }

  handleCheckout = (e) => {
  }

  handleShowDiscount = (e) => {
    this.setState({discount: "10%"});
  }

  render() {
    console.log("Cart is rendering")
    return (
      <div style={{"margin": "10px", "padding": "35px"}}>
        <h3 style={{color: 'orange'}}>{"Cart"}</h3>
        <div>
          { (!this.props.items.length) ? 'No items in your cart..!': `${this.props.items.length} to checkout`}
        </div>
        <br/>
        <div>
        <ol>
        {
          (this.props.items.length > 0) ?
            this.props.items.map((i, index) => {
            return (<li key={index}>{i.title}</li>)
            })
          : ''
        }
        </ol>
        </div>
        <button onClick={this.handleShowDiscount} style={{padding: "15px"}}>
          Ask for Discount
        </button>
        <button onClick={this.handleCheckout} style={(this.props.items.length > 0)?this.styles.e:this.styles.d} disabled={!this.props.items.length}>
          Check out
        </button>
      </div>
    )
  }
}