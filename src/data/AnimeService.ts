import axios from 'axios';


const animeClient = axios.create({
    baseURL: "https://a.4cdn.org/a",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})


export default {

    GetAnimePage(page: number) {
        //return animeClient.get(`/catalog.json?page=${page}`)
        return animeClient.get(`/${page}.json`);
    },

    GetAnimeThread(threadID: number) {
        return animeClient.get(`/thread/${threadID}.json`);
    },

    GetAllThreadsSummary(){
        return animeClient.get('/threads.json')
    }
}
