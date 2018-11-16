import React, { Component } from 'react';
import CardList from './components/robots/CardList'
import {robots} from './robots'
import SearchBar from './components/searchbar/SearchBar'

class App extends Component {

    state={
        robots: robots,
        searchfield: ""
    }

    handleChange = (event) =>{

        this.setState({
            searchfield: event.target.value
        })

    }



    render() {
        const filteredRobots = this.state.robots.filter((robot) =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return (
            
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBar handleChange={this.handleChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;
