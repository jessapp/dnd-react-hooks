import React, {useState, useEffect} from 'react';


const classesUrl = 'https://api.open5e.com/classes/';
const racesUrl = 'https://api.open5e.com/races/';

function App() {
    const [currentClass, setClass] = useState("");
    const [currentRace, setRace] = useState("");

    const fetchClass = async () => {
        fetch(classesUrl)
        .then(res => res.json())
        .then(response => {
            const all_classes = response.results;
            const random_item = all_classes[Math.floor(Math.random()*all_classes.length)];
            setClass(random_item.name);
        })
        .catch(error => console.log(error));
    };

    const fetchRace = async () => {
        fetch(racesUrl)
        .then(res => res.json())
        .then(response => {
            const all_races = response.results;
            const random_item = all_races[Math.floor(Math.random()*all_races.length)];
            setRace(random_item.name);
        })
        .catch(error => console.log(error));
    };

    useEffect(() => {
        fetchClass();
      }, []);

    useEffect(() => {
        fetchRace();
      }, []);


    return (
        <div>
            <h1>Your class is: {currentClass}</h1>
            <button
                onClick={ () => fetchClass() }
            >Get another class</button>

            <h1>Your race is: {currentRace}</h1>
            <button
                onClick={ () => fetchRace()}
            >Get another race</button>
        </div>
    )
}

export default App;