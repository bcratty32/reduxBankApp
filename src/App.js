import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";
import store from "./store";
import ButtonGroup from "./ButtonGroup";

// class App extends Component {
//   state = {
//     username: "Janny",
//     totalAmount: 2500701
//   };
//   render() {
//     const { totalAmount, username } = this.state;
//     return (
//       <div className="App">
//         <img className="App__userpic" src={photographer} alt="user" />
//         <p className="App__username">Hello, {username}! </p>
//         <div className="App__amount">
//           {formatNumber({ prefix: "$" })(totalAmount)}
//           <p className="App__amount--info">Total Amount</p>
//         </div>

//         <section className="App__buttons">
//           <button data-amount="10000">WITHDRAW $10,000</button>
//           <button data-amount="5000">WITHDRAW $5,000</button>
//         </section>

//         <p className="App__giveaway">Give away all your cash to charity</p>
//       </div>
//     );
//   }
// }
const App = () => {

  return (
    <div className="App">
      <img className="App__userpic" src={photographer} alt="user" />
      <p className="App__username">Hello, {store.getState().username}! </p>
      <div className="App__amount">
        {formatNumber({ prefix:  "$"})(store.getState().balance)}
        <p className="App__amount--info">Total Amount</p>
      </div>

      <section className="App__buttons">
        <ButtonGroup key={1} amounts={["10000", "5000"]} />

      </section>

    </div>
  );

}

export default App;
