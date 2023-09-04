import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getLaunchById} from "../api/launch.ts";
import {Launch} from "../models/launch.ts";
import LogOutButton from "../component/LogOutButton.tsx";

type LaunchDetailsParams = {
    id: string;
}

function LaunchDetails() {
    const {id} = useParams<LaunchDetailsParams>();
    const [launchDetails, setLaunchDetails] = useState<Launch>()
    useEffect(() => {
        if (id)
            getLaunchById(id).then(
                value => setLaunchDetails(value))
    }, [id]);
    if (launchDetails) {
        return <div>
            <LogOutButton/>
            <div>{launchDetails.name}</div>
            <div>{launchDetails.details}</div>
            <div>{launchDetails.id}</div>
        </div>
    }
    return <div>Loading...</div>
}

export default LaunchDetails;