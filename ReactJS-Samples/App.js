import React, { Component } from 'react';
import Ship from "./StarShip/Ship"
import './App.css';

class App extends Component {
  state = {
    starShipInfo: [
      {status: "Destroyed", callSign: "NCC-1701", shipName: "U.S.S. Enterprise"},
      {status: "On Assignment", callSign: "NCC-1701-F", shipName: "U.S.S. Enterprise-F"},
      {status: "Active", callSign: "NCC-11638", shipName: "U.S.S. Agamemnon"},
      {status: "Destroyed", callSign: "NCC-2893", shipName: "U.S.S. Stargazer"},
      {status: "Repairs", callSign: "NCC-72617", shipName: "U.S.S. Mekong"}
    ]
  }

  updateStatusHandler = () => {
    // Test
    // console.log("Handler reached");
    this.setState({
      starShipInfo: [
        {status: "Rebuilt", callSign: "NCC-1701", shipName: "U.S.S. Enterprise"},
        {status: "Mission Complete", callSign: "NCC-1701-F", shipName: "U.S.S. Enterprise-F"},
        {status: "Active", callSign: "NCC-11638", shipName: "U.S.S. Agamemnon"},
        {status: "Restored", callSign: "NCC-2893", shipName: "U.S.S. Stargazer"},
        {status: "Repairs", callSign: "NCC-72617", shipName: "U.S.S. Mekong"}
      ]
    })
  }

  displayStatusHandler = (currentStatus) => {
    alert("Current Status is: " + currentStatus);
  }

  // NOTE: The following code will only change the name of the Stargazer ship
  changeShipNameHandler = (event) => {
    this.setState({
      starShipInfo: [
        {status: "Rebuilt", callSign: "NCC-1701", shipName: "U.S.S.Enterprise"},
        {status: "Mission Complete", callSign: "NCC-1701-F", shipName: "U.S.S. Enterprise-F"},
        {status: "Active", callSign: "NCC-11638", shipName: "U.S.S. Agamemnon"},
        {status: "Restored", callSign: "NCC-2893", shipName: event.target.value},
        {status: "Repairs", callSign: "NCC-72617", shipName: "U.S.S. Mekong"}
      ]
    })
  }

  render() {
    // NOTE: Defining an inline style
    // This is scoped to whichever local element it is applied to
    const ufpStyle = {
      backgroundColor: 'goldenrod',
      color: '#00001a',
      border: '1px solid #0000b3',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>UFP Starfleet Ships</h1>
        <button 
        style={ufpStyle}
        onClick={this.updateStatusHandler}>Update Status</button>
        <br/>
        <br/>
        <Ship
        callSign = {this.state.starShipInfo[0].callSign}
        shipName = {this.state.starShipInfo[0].shipName}
        onShipClick = {this.displayStatusHandler.bind(this, "On Assignment")}
        changeName = {this.changeShipNameHandler}
    ><strong>Current Status: </strong>{this.state.starShipInfo[0].status}</Ship>
        <br/>
        <Ship
        callSign = {this.state.starShipInfo[1].callSign}
        shipName = {this.state.starShipInfo[1].shipName}
        ><strong>Current Status: </strong>{this.state.starShipInfo[1].status}</Ship>
        <br/>
        <Ship
        callSign = {this.state.starShipInfo[2].callSign}
        shipName = {this.state.starShipInfo[2].shipName}
        ><strong>Current Status: </strong>{this.state.starShipInfo[2].status}</Ship>
        <br/>
        <Ship
        callSign = {this.state.starShipInfo[3].callSign}
        shipName = {this.state.starShipInfo[3].shipName}
        onShipClick = {this.displayStatusHandler.bind(this, this.state.starShipInfo[3].status)}
        changeName = {this.changeShipNameHandler}
        ><strong>Current Status: </strong>{this.state.starShipInfo[3].status}</Ship>
        <br/>
        <Ship
        callSign = {this.state.starShipInfo[4].callSign}
        shipName = {this.state.starShipInfo[4].shipName}
        ><strong>Current Status: </strong>{this.state.starShipInfo[4].status}</Ship>
      </div>
    );
  }
}

export default App;
