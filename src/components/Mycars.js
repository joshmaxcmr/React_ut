import React, { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
   render() {
      return (
         <div>
            <h1>{this.props.title}</h1>

            <Car color="red">Mercedes</Car>
            <Car >Ferrari</Car>
            <Car color="green"></Car>
         </div>
      )
   }
}

export default Mycars;