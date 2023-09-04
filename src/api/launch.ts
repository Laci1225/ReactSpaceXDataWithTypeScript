import httpClient from "./common";
import {Launch} from "../models/launch";

export const getAllLaunches = (): Promise<Launch[]> => {
    return httpClient.get<Launch[]>("/v5/launches")
        .then((res) => res.data)

}
export const getLaunchById = (id: string):Promise<Launch> =>{
    return httpClient.get<Launch>(`/v5/launches/${id}`)
        .then(value => value.data)
}