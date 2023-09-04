import LaunchItem from "../component/LaunchItem";
import {useEffect, useState} from "react";
import {getAllLaunches} from "../api/launch";
import {Launch} from "../models/launch";
import LogOutButton from "../component/LogOutButton.tsx";

function LaunchesList() {
    const [launches, setLaunches    ] = useState<Launch[]>();
    useEffect(() => {
        getAllLaunches().then(data => {
            setLaunches(data)
        })
    }, [])

    return (
        <div>
            <LogOutButton/>
            <h1>Space X</h1>
            {launches?.map((launch) =>
                <LaunchItem key={launch.id} launch={launch}/>)}
        </div>
    )
}

export default LaunchesList;
