import axios from 'axios';
import { Post } from './Post.types';

const animeClient = axios.create({
    //have to use proxy to get around CORS
    baseURL: "https://corsproxy.io/?https://a.4cdn.org/a",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

    }
})


export default {

    async GetAnimePage(page: number) : Promise<Post[]> {
        //return animeClient.get(`/catalog.json?page=${page}`)

        try{
            var animePosts : Array<Post> = [];
            var animeThreadJson =  await animeClient.get(`/thread/${page}.json`);
            
            //test
            //console.log(animeThreadJson.data.threads[0].posts[0].com);
            console.log(animeThreadJson)
            return animePosts;
        }
        catch(e){
            console.log("Error " + e);
            return [];
        }
    },

    GetAnimeThread(threadID: number) {
        return animeClient.get(`/thread/${threadID}.json`);
    },

    GetAllThreadsSummary(){
        return animeClient.get('/threads.json')
    }
}
