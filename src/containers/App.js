import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    const filteredRobots = robots.filter(robot => 
        robot.name.toLowerCase().includes(searchField.toLowerCase()));

    useEffect(() => {
        async function fetchData(){
            let res = await fetch('https://jsonplaceholder.typicode.com/users');
            res = await res.json();
            setRobots(res);
        }
        fetchData();
    });

    if(robots)
    
    return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox onChange = {e => setSearchField(e.target.value)}/>
            <Scroll><CardList robots= {filteredRobots}/></Scroll>
            
        </div>
    );
}

export default App;