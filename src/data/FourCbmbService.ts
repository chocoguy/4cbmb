import axios from 'axios';
import { FourCbmbPost } from './FourCbmbPost.types';

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
    }
}