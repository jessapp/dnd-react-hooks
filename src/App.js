import React, {useState, useEffect} from 'react';
import TitleCard from './components/card';
import Header from './components/header';
import { classesUrl, racesUrl } from './constants'


function App() {
    const [currentClass, setClass] = useState("");
    const [currentRace, setRace] = useState("");

    const fetchClass = async () => {
        fetch(classesUrl)
        .then(res => res.json())
        .then(response => {
            const all_classes = response.results;
            const random_item = all_classes[Math.floor(Math.random()*all_classes.length)];
            setClass(random_item);
        })
        .catch(error => console.log(error));
    };

    const fetchRace = async () => {
        fetch(racesUrl)
        .then(res => res.json())
        .then(response => {
            const all_races = response.results;
            const random_item = all_races[Math.floor(Math.random()*all_races.length)];
            setRace(random_item);
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
            <Header/>

            <div className="row">
                <div className="col-sm-6">
                    <TitleCard
                        title="class"
                        currentItem={ currentClass }
                        callback={ fetchClass }
                    />
                </div>

                <div className="col-sm-6">
                    <TitleCard
                        title="race"
                        currentItem={ currentRace }
                        callback={ fetchRace }
                    />
                </div>
            </div>
        </div>
    )
}

export default App;