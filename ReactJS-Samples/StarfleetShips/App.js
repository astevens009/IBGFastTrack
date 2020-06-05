import React, { Component } from 'react';
import Ship from "./StarShip/Ship"
import './App.css';

class App extends Component {
  state = {
    starShipInfo: [
      {id: "NCC1701", status: "Destroyed", callSign: "NCC-1701", shipName: "U.S.S. Enterprise"},
      {id: "NCC1701f", status: "On Assignment", callSign: "NCC-1701-F", shipName: "U.S.S. Enterprise-F"},
      {id: "NCC11638", status: "Active", callSign: "NCC-11638", shipName: "U.S.S. Agamemnon"},
      {id: "NCC2893", status: "Destroyed", callSign: "NCC-2893", shipName: "U.S.S. Stargazer"},
      {id: "NCC72617", status: "Repairs", callSign: "NCC-72617", shipName: "U.S.S. Mekong"}
    ],

    // NOTE: Add a property (flag) that will determine whether or not to show the list of ships
    showShips: false
  }

  updateStatusHandler = () => {
    // Test
    // console.log("Handler reached");
    this.setState({
      starShipInfo: [
        {id: "NCC1701", status: "Rebuilt", callSign: "NCC-1701", shipName: "U.S.S. Enterprise"},
        {id: "NCC1701F", status: "Mission Complete", callSign: "NCC-1701-F", shipName: "U.S.S. Enterprise-F"},
        {id: "NCC11638", status: "Active", callSign: "NCC-11638", shipName: "U.S.S. Agamemnon"},
        {id: "NCC2893", status: "Restored", callSign: "NCC-2893", shipName: "U.S.S. Stargazer"},
        {id: "NCC72617", status: "Repairs", callSign: "NCC-72617", shipName: "U.S.S. Mekong"}
      ]
    })
  }

  deleteShipHandler = (shipIndex) =>{
    // NOTE : Retrieve the array; remember this is a pointer and we are mutating the original element it's pointing to
    // const ships = this.state.starShipInfo;

    // Alternative #1: Rather than mutating the original arry use the slice() method to make a copy...
    // const ships = this.state.starShipInfo.slice();

    // Alternative #2: Use the spread operator; most common approach
    const ships =[...this.state.starShipInfo];

    // NOTE: Remove the selected element from the array; remember this is still poiting to the original array therfore we are mutating the original array which is bad practice
    ships.splice(shipIndex, 1);

    // NOTE: Update and re-render the component
    this.setState({
      starShipInfo: ships
    })
  }

  displayStatusHandler = (currentStatus) => {
    alert("Current Status is: " + currentStatus);
  }

  // NOTE: The following code will only change the name of the Stargazer ship
  changeShipNameHandler = (event, id) => {
    // NOTE: Using the find() method and the id to identify the specific ship element to change
    // const shipIndex = this.state.starShipInfo.find();

    // ALTERNATIVELY: Use the findIndex() method; findIndex() takes a method which is executed on every element of the array
    const shipIndex = this.state.starShipInfo.findIndex(sh =>{
      return sh.id === id;
    })

    /* NOTE: Retrieve the ship whose index is returned; remember not to mutate the original but to create a "copy" using the spread operator
       ALTERNATIVELY:
      Using the assign() method of Object class
      const person = Object.assign({}, this.state.starShipInfo[shipIndex]);
    */
    const fleetShipsUpdate = {
      ...this.state.starShipInfo[shipIndex]
    };

    // NOTE: Modify the copy...
    fleetShipsUpdate.shipName = event.target.value;

    // NOTE: Create a copy of the array using the spread operator
    const starShipInfo = [...this.state.starShipInfo]
    starShipInfo[shipIndex] = fleetShipsUpdate;

    this.setState({
      starShipInfo: starShipInfo
    })
  }

  toggleShipsHandler = () =>{
    // NOTE: Displays or hides the list of ships
    const displayShipsList = this.state.showShips;

    this.setState({
      showShips: !displayShipsList
    })
  }

  render() {
    // NOTE: Whenever ReactJS loads the app this render() method is called

    let ships = null;

    if(this.state.showShips){
      ships = (
        // NOTE: Using JavaScript to render dynamic content
        <div>
          {/* Use the map() function to convert the array to a list of ship components
            The map() method can take a second argument; in this example we'll pass in the index of the array
          */}
          {this.state.starShipInfo.map(
            (shipList, index) => {
            return <Ship 
            key={shipList.id}
            callSign={shipList.callSign}
            shipName={shipList.shipName}
            changeName={(event) => this.changeShipNameHandler(event, shipList.id)}
            remove={() => this.deleteShipHandler(index)}>
              Current Status: {shipList.status}            
            </Ship>
            }
          )}
        </div>
      );
    }


    return (
      <div className="App">
        <h1>UFP Starfleet Ships</h1>
        <button className="buttonStyle" onClick={this.toggleShipsHandler}>Display Ships</button>
        <button className="buttonStyle" onClick={this.updateStatusHandler}>Update Status</button>
        <br/>
        <br/>
        {
          // NOTE: Display the result of the ships variable defined inside the render() method above
          ships
        }
      </div>
    );
  }
}

export default App;

/*
<Ship
        callSign = {this.state.starShipInfo[0].callSign}
        shipName = {this.state.starShipInfo[0].shipName}
        onShipClick = {this.displayStatusHandler.bind(this, "On Assignment")}
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
*/
