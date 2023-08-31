import {JSX} from "react"
import {Launch} from "../models/launch";
import {Link} from "react-router-dom";


interface LaunchItemProps {
    launch: Launch
}

export default function LaunchItem({launch}: LaunchItemProps): JSX.Element {
    return (<div>
        <p>{launch.name}</p>
        {launch.details && (
            <p>{launch.details ?? "No details yet"}</p>)
        }
        <Link to={`/launches/  ${launch.id}`}>Show details</Link>
    </div>)
}

//react router