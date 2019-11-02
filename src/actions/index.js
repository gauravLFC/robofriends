import { 
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAIL 
} from './types';

export const setSearchField = text => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
});

export const requestRobots = () => async dispatch => {
    dispatch({type: REQUEST_ROBOTS_PENDING});
    try{
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        res = await res.json();
        dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: res});
    }
    catch(e){
        dispatch({type: REQUEST_ROBOTS_FAIL, payload: e.message});
    }

}

