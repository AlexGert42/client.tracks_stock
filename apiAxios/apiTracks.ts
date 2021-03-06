import axios from "axios"


const instance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})


export const apiTracks = {
    getTracks() {
        return instance.get(`/tracks`)
    }
}