import './App.css'
import LaunchItem from "./component/LaunchItem";
import {useEffect, useState} from "react";
import {getAllLaunches} from "./api/launch";
import {Launch} from "./models/launch";

function App() {
    const [launches, setLaunches] = useState<Launch[]>();
    useEffect(() => {
        getAllLaunches().then(data => {
            setLaunches(data)
        })
    }, [])
    return (
        <div>
            <h1>Space X</h1>
            {launches?.map((launch) =>
                <LaunchItem key={launch.id} launch={launch}/>)}
        </div>
    )
}

export default App
