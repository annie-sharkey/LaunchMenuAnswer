import React, { Component } from "react";
import "./OrderForm.css";
import { isEmpty } from "lodash";

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   orders: [
      //     {
      //       title: "Main Course 1",
      //       description: "Nice description woot 1",
      //       price: 10
      //     },
      //     {
      //       title: "Main Course 2",
      //       description: "Nice description woot 2",
      //       price: 15
      //     },
      //     {
      //       title: "Main Course 3",
      //       description: "Nice description woot 3",
      //       price: 10
      //     }
      //   ]
    };
  }
  render() {
    let totalCost = !isEmpty(this.props.orders)
      ? this.props.orders
          .map(order => order.price)
          .reduce((prev, next) => prev + next)
      : 0;

    return (
      <div>
        <div
          className="orderHeader"
          style={{ borderStyle: "double", padding: "10px" }}
        >
          Your Order
        </div>{" "}
        {this.props.orders.map(order => {
          return (
            <div style={{ margin: "5px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "10px"
                }}
              >
                <div>{order.title}</div>
                <div>{order.price}</div>
              </div>
              <button
                className="removeButton"
                onClick={() => this.props.handleRemoveOrder(order)}
              >
                Remove
              </button>
            </div>
          );
        })}
        <div className="total">Total cost: {totalCost}</div>
      </div>
    );
  }
}

export default OrderForm;
