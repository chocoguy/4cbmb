import axios from 'axios';
import { Post } from './Post.types';

const animeClient = axios.create({
    //Placeholder for Dev
    baseURL: "http://192.168.0.87/FourCbmb",
    withCredentials: false,
    headers: {
        Accept: "application/json",
    }
})


export default {

    async GetAnimeThread(threadID: number) : Promise<Post[]> {
        //return animeClient.get(`/catalog.json?page=${page}`)
        

        try{
            var animePosts : Array<Post> = [];
            var animeThreadJson =  await animeClient.get(`/Thread/a/${threadID}`);
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
                    now : post.now,
                    replies : i == 0 ? post.replies : 0,
                    images : i == 0 ? post.images : 0,
                    unique_ips : i == 0 ? post.unique_ips : 0,
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

    async GetAnimePage(pageNum: number) : Promise<Post[]> {
        //eturn animeClient.get(`/thread/${threadID}.json`);
        try{
            var OPAnimePosts : Array<Post> = [];
            var animePageJson =  await animeClient.get(`/${pageNum}.json`);
            console.log(animePageJson);
            for(var i = 0; i < animePageJson.data.threads.length; i++){
                var OPPost = animePageJson.data.threads[i].posts[0];
                var image_url = "https://i.4cdn.org/a/" + OPPost.tim + OPPost.ext;
                var thumbnail_url = "https://i.4cdn.org/a/" + OPPost.tim + "s.jpg";

                var newOPPost : Post = {
                    no : OPPost.no,
                    time : OPPost.time,
                    resto : OPPost.resto,
                    now : OPPost.now,
                    replies : i == 0 ? OPPost.replies : 0,
                    images : i == 0 ? OPPost.images : 0,
                    unique_ips : i == 0 ? OPPost.unique_ips : 0,
                    tim : OPPost.tim != null ? OPPost.tim : 0,
                    filename : OPPost.filename != null ? OPPost.filename : "",
                    ext : OPPost.ext != null ? OPPost.ext : "",
                    com : OPPost.com != null ? OPPost.com : "",
                    sub : OPPost.sub != null ? OPPost.sub : "",
                    w : OPPost.w != null ? OPPost.w : 0,
                    h : OPPost.h != null ? OPPost.h : 0,
                    tn_w : OPPost.tn_w != null ? OPPost.tn_w : 0,
                    tn_h : OPPost.tn_h != null ? OPPost.tn_h : 0,
                    image_url : image_url,
                    thumbnail_url : thumbnail_url,
                }
                OPAnimePosts.push(newOPPost);
            }
            return OPAnimePosts;
        }
        catch(e){
            console.log("Error " + e);
            return [];
        }
    },

    GetAllThreadsSummary(){
        return animeClient.get('/threads.json')
    }
}
