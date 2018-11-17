import React, { Component } from 'react';
import {connect} from 'react-redux'
import CardList from './components/robots/CardList'
import SearchBar from './components/searchbar/SearchBar'
import Scroll from './components/util/Scroll'
import {setSearchField, requestRobots} from './actions/actions'

class App extends Component {

    componentWillMount(){
        this.props.onRequestRobots()
    }


    render() {
        const {searchField, handleChange, robots, isPending} = this.props

        const filteredRobots = robots.filter((robot) =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        return isPending ?
           <div>Loading</div> : 
            
            (
        
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBar handleChange={handleChange}/>
                <Scroll>
                { filteredRobots.length >=1 ? <CardList robots={filteredRobots}/> : <h2 className="red"> {searchField} does not exist</h2> }
                </Scroll>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error,

    }
}

const mapDispatchToProps = (dispatch) =>{
   return {
       handleChange: (event) => dispatch(setSearchField(event.target.value)),
       onRequestRobots: () => dispatch(requestRobots())
       //we are getting the action and setting it up in this container 
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(App);
