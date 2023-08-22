<template>
    <Navbar />
    <div class="fashion">
        <h2 class="orange-text" style="font-weight: bold; text-align: center; margin: 10px;">{{threadTitle}}</h2>
        <div class="thread-container" >
            <div style="display: flex; flex-direction: row; margin: 10px;">
                <i class="fa-solid fa-comments"></i>
                <p class="blue-text" style="margin-left: 5px;">{{replies}}</p>
                <i class="fa-solid fa-image" style="margin-left: 5px;"></i>
                <p class="blue-text" style="margin-left: 5px;">{{imageReplies}}</p>         
            </div>
            <div v-if="posts.length != 0" v-for="post in posts" v-bind:key="post.Id" style="width: 80%;">
                <SinglePost v-bind:post="post" v-bind:isOP="post.Replies == -1 ? false : true" />
            </div>
            <div v-else>
                <p class="orange-text">Loading...</p>
            </div>
            <div style="display: flex; flex-direction: row; margin-top: 20px; margin-bottom: 20px;">
                <div class="page-selector" style="margin-left: 10px;" v-for="i in 10">
                    <a v-bind:href="'/fa/' + i" class="orange-text" style="cursor: pointer; text-decoration: underline;">{{ i }}</a>
                </div>
                </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';
import { FourCbmbPost } from '@/data/FourCbmbPost.types';
import FourCbmbService from '@/data/FourCbmbService';
import SinglePost from '../Pieces/SinglePost.vue';
import router from '@/router';

export default defineComponent({
    name: "FashionThread",
    props: ['id'],
    data() {
        return {
            posts: [] as FourCbmbPost[],
            threadTitle: "",
            replies: 0,
            imageReplies: 0
        }
    },
    created() {
        //list of posts
        //1st post OP
        this.getPost()
    },
    methods: {
        async getPost () {
            var newPosts : FourCbmbPost[] = await FourCbmbService.GetThread("fa", this.id)
            //console.log("Count: " + newPosts.length)
            this.posts = newPosts
            this.threadTitle = newPosts[0].Title
            this.replies = newPosts[0].Replies
            this.imageReplies = newPosts[0].ImageReplies
        },
        NavigateToPage(id: number){
            router.push("/fa/" + id)
        },
    },
    components: { Navbar, SinglePost }
})

</script>