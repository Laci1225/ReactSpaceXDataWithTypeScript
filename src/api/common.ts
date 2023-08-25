import axios from "axios"

const httpClient = axios.create({baseURL: "https://api.spacexdata.com/"})

export default httpClient;