import {combineReducers} from 'redux';
import {searchRobots, requestRobots} from './searchRobots';

export default combineReducers({
    searchRobots,
    requestRobots
}) ;

