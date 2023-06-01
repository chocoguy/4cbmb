import axios from 'axios';
import { Post } from './Post.types';

const animeClient = axios.create({
    //have to use proxy to get around CORS
    baseURL: "https://corsproxy.io/?https://a.4cdn.org/a",
    //baseURL: "https://a.4cdn.org/a",
    withCredentials: false,
    headers: {
        Accept: "application/json",
    }
})


export default {

    async GetAnimePage(page: number) : Promise<Post[]> {
        //return animeClient.get(`/catalog.json?page=${page}`)
        

        try{
            var animePosts : Array<Post> = [];
            var animeThreadJson =  await animeClient.get(`/thread/${page}.json`);
            for(var i = 0; i < animeThreadJson.data.posts.length; i++){
                var post = animeThreadJson.data.posts[i];
                //static assets must be manually loaded by client
                //it will not show in the app
                if(post.tim != null && post.ext != null){
                    var image_url = "https://i.4cdn.org/a/" + post.tim + post.ext;
                    var thumbnail_url = "https://i.4cdn.org/a/" + post.tim + "s.jpg";
                }
                else{
                    var image_url = "none";
                    var thumbnail_url = "none";
                }
                var newPost : Post = {
                    no : post.no,
                    time : post.time,
                    resto : post.resto,
                    replies : i == 0 ? post.replies : 0,
                    images : i == 0 ? post.images : 0,
                    tim : post.tim != null ? post.tim : 0,
                    filename : post.filename != null ? post.filename : "",
                    ext : post.ext != null ? post.ext : "",
                    com : post.com != null ? post.com : "",
                    sub : post.sub != null ? post.sub : "",
                    w : post.w != null ? post.w : 0,
                    h : post.h != null ? post.h : 0,
                    tn_w : post.tn_w != null ? post.tn_w : 0,
                    tn_h : post.tn_h != null ? post.tn_h : 0,
                    image_url : image_url,
                    thumbnail_url : thumbnail_url,
                }
                animePosts.push(newPost);
            }
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
