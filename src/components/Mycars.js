import React, { Component } from "react";
import Car from "./Cars";

class Mycars extends Component {
   render() {
      return (
         <div>
            <h1>{this.props.title}</h1>

            <p onCopy={this.noCopy}>Lorem ipsum dolores</p>

            <Car color={this.state.voitures[0].color} year={this.state.voitures[0].year}>{this.state.voitures[0].name}</Car>
            <Car color={this.state.voitures[1].color} year={this.state.voitures[1].year}>{this.state.voitures[1].name}</Car>
            <Car color={this.state.voitures[2].color
            } year={this.state.voitures[2].year}>{this.state.voitures[2].name}</Car>
         </div>
      )
   }
}

export default Mycars;