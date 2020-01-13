import React, {Component, useState, useEffect} from 'react';
import Card from './components/card';


const url = 'https://api.open5e.com/classes/';

function App() {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(response => {
                setClasses(response.results);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <Card classes={classes}/>
        </div>
    )
}

export default App;