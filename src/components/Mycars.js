import React, { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {

    noCopy = () => {
        alert('merci de ne pas copier le text');
    }


   render() {
      return (
         <div>
            <h1>{this.props.title}</h1>

            <p onCopy={this.noCopy}>Lorem ipsum dolores</p>

            <Car color="red">Mercedes</Car>
            <Car >Ferrari</Car>
            <Car color="green"></Car>
         </div>
      )
   }
}

export default Mycars;