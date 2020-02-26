import React, { Component } from "react";
import "./App.css";
import Menu from "./Menu.js";
import OrderForm from "./OrderForm.js";
import Button from "./Button.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  handleAddtoOrder = course => {
    this.setState(prevState => {
      return { orders: [...prevState.orders, course] };
    });
  };

  handleRemoveOrder = course => {
    const newOrders = this.state.orders.filter(
      order => order.title !== course.title
    );
    this.setState(prevState => {
      return { orders: newOrders };
    });
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        {console.log("orders", this.state.orders)}
        <div style={{ flex: 2 }}>
          <Menu handleAddtoOrder={this.handleAddtoOrder} />
        </div>
        <div style={{ flex: 1 }}>
          <OrderForm
            orders={this.state.orders}
            handleRemoveOrder={this.handleRemoveOrder}
          />
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div style={{ display: "flex" }}>
//       <div style={{ flex: 2 }}>
//         <Menu />
//       </div>
//       <div style={{ flex: 1 }}>
//         <OrderForm />
//       </div>
//       {/* <Button /> */}
//     </div>
//   );
// }

export default App;
