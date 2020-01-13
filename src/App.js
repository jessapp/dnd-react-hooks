import React, {Component, useState, useEffect} from 'react';


const classes_url = 'https://api.open5e.com/classes/';
const races_url = 'https://api.open5e.com/races/';

function App() {
    const [currentClass, setClass] = useState("");
    const [currentRace, setRace] = useState("");

    return (
        <div>
            <h1>Your class is: {currentClass}</h1>
            <button
                onClick={
                    () => {
                    fetch(classes_url)
                        .then(res => res.json())
                        .then(response => {
                            const all_classes = response.results;
                            const random_item = all_classes[Math.floor(Math.random()*all_classes.length)];
                            setClass(random_item.name);
                        })
                        .catch(error => console.log(error));
                }
                }>Get another class</button>

            <h1>Your race is: {currentRace}</h1>
            <button
                onClick={
                    () => {
                    fetch(races_url)
                        .then(res => res.json())
                        .then(response => {
                            const allRaces = response.results;
                            const randomRace = allRaces[Math.floor(Math.random()*allRaces.length)];
                            setRace(randomRace.name);
                        })
                        .catch(error => console.log(error));
                }
                }>Get another race</button>
        </div>
    )
}

export default App;