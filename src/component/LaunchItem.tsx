import {JSX} from "react"
import {Launch} from "../models/launch";


interface LaunchItemProps {
    launch: Launch
}

export default function LaunchItem({launch}: LaunchItemProps): JSX.Element {
    return (<div>
        <p>{launch.name}</p>
        {launch.details && (
            <p>{launch.details ?? "No details yet"}</p>)
        }
        <a href={`/launch/${launch.id}`}>Show details</a>
    </div>)
}