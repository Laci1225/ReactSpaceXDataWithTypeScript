import {useParams} from "react-router-dom";

function LaunchDetails() {
    const params = useParams();

    return (
        <div>Launch details: {params.id}</div>  //todo summoner/id a lolban
    )

}

export default LaunchDetails;