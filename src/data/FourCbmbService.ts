import axios from 'axios';
import { FourCbmbPost } from './FourCbmbPost.types';
import { FourCbmbPage } from './FourCbmbPage.types';

const fourCbmbClient = axios.create({
    //Placeholder
    baseURL: "http://192.168.0.87/FourCbmb",
    withCredentials: false,
    headers: {
        Accept: "application/json",
    }
})

export default {
    async GetThread(board: string, threadID: number) : Promise<FourCbmbPost[]> {
        try{
            var fourCbmbPosts : Array<FourCbmbPost> = [];
            var fourCbmbThreadJson =  await fourCbmbClient.get(`/Thread/${board}/${threadID}`);
            for(var i = 0; i < fourCbmbThreadJson.data.length; i++){
                var post = fourCbmbThreadJson.data[i];
                console.log(post);
                var newPost : FourCbmbPost = {
                    Id : post.id,
                    IdRepliedTo : post.idRepliedTo,
                    IsSticky : post.isSticky,
                    IsClosed : post.isClosed,
                    DatePostedString : post.datePostedString,
                    Title: post.title,
                    Content: post.content,
                    ImageName: post.imageName,
                    ImageSize: post.imageSize,
                    ImageWidth: post.imageWidth,
                    ImageHeight: post.imageHeight,
                    ThumbnailImageWidth: post.thumbnailImageWidth,
                    ThumbnailImageHeight: post.thumbnailImageHeight,
                    ImageDeleted: post.imageDeleted,
                    ImageSpoiler: post.imageSpoiler,
                    Replies: post.replies,
                    ImageReplies: post.imageReplies,
                    ImageUrl: post.imageUrl,
                    ThumbnailUrl: post.thumbnailUrl,
                }
                fourCbmbPosts.push(newPost);
            }
            console.log(fourCbmbThreadJson)
            return fourCbmbPosts;
        }
        catch(error){
            console.log(error);
            return [];
        }
    },

    async GetPage(board: string, page: number) : Promise<FourCbmbPage[]> {
        try{
            var fourCbmbThreads : Array<FourCbmbPage> = [];
            var fourCbmbThread : Array<FourCbmbPost> = [];
            var fourCbmbPageJson =  await fourCbmbClient.get(`/Page/${board}/${page}`);
            for(var i = 0; i < fourCbmbPageJson.data.length; i++){
                fourCbmbThread = [];
               for (var e = 0; e < fourCbmbPageJson.data[i].posts.length; e++){
                    var post = fourCbmbPageJson.data[i].posts[e];
                    var newPost : FourCbmbPost = {
                        Id : post.id,
                        IdRepliedTo : post.idRepliedTo,
                        IsSticky : post.isSticky,
                        IsClosed : post.isClosed,
                        DatePostedString : post.datePostedString,
                        Title: post.title,
                        Content: post.content,
                        ImageName: post.imageName,
                        ImageSize: post.imageSize,
                        ImageWidth: post.imageWidth,
                        ImageHeight: post.imageHeight,
                        ThumbnailImageWidth: post.thumbnailImageWidth,
                        ThumbnailImageHeight: post.thumbnailImageHeight,
                        ImageDeleted: post.imageDeleted,
                        ImageSpoiler: post.imageSpoiler,
                        Replies: post.replies,
                        ImageReplies: post.imageReplies,
                        ImageUrl: post.imageUrl,
                        ThumbnailUrl: post.thumbnailUrl,
                    }
                    fourCbmbThread.push(newPost);
                }
                fourCbmbThreads.push({posts: fourCbmbThread});
            }

            return fourCbmbThreads;

        }
        catch(error){
            console.log(error);
            return [];
        }
    },

    async GetOPPostsFromPage(board: string, page: number) : Promise<FourCbmbPost[]>{
        try{
            var fourCbmbPosts : Array<FourCbmbPost> = [];
            var fourCbmbPageJson =  await fourCbmbClient.get(`/Page/${board}/${page}`);
            for(var i = 0; i < fourCbmbPageJson.data.length; i++){
                var post = fourCbmbPageJson.data[i].posts[0];
                var newPost : FourCbmbPost = {
                    Id : post.id,
                    IdRepliedTo : post.idRepliedTo,
                    IsSticky : post.isSticky,
                    IsClosed : post.isClosed,
                    DatePostedString : post.datePostedString,
                    Title: post.title,
                    Content: post.content,
                    ImageName: post.imageName,
                    ImageSize: post.imageSize,
                    ImageWidth: post.imageWidth,
                    ImageHeight: post.imageHeight,
                    ThumbnailImageWidth: post.thumbnailImageWidth,
                    ThumbnailImageHeight: post.thumbnailImageHeight,
                    ImageDeleted: post.imageDeleted,
                    ImageSpoiler: post.imageSpoiler,
                    Replies: post.replies,
                    ImageReplies: post.imageReplies,
                    ImageUrl: post.imageUrl,
                    ThumbnailUrl: post.thumbnailUrl,
                }
                fourCbmbPosts.push(newPost);
            }
            return fourCbmbPosts;
        }
        catch(error){
            console.log(error);
            return [];
        }
    }

    

}