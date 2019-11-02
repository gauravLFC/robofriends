import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import {requestRobots} from '../actions'
import './App.css';

const App = ({searchField, requestRobots, robotData: {isPending, robots, error}}) => {

    useEffect(() => requestRobots(), [requestRobots]);

    if(isPending){
        return (
            <h1>Loading...</h1>
        )
    }

    else if (error){
        return (
            <h1>Some Error occurred while fetching data</h1>
        )
    }

    else {
        const filteredRobots = robots.filter(robot => 
        robot.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox/>
                <Scroll><CardList robots= {filteredRobots}/></Scroll>
                
            </div>
        );
    }
    
    
}

const mapStateToProps = state => ({
    searchField: state.searchRobots.searchField,
    robotData: state.requestRobots
});
   

export default connect(mapStateToProps, {
    requestRobots
})(App);