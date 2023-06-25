<template>
    <Navbar />
    <div class="anime">
        <h2>Anime & Manga</h2>
        <button style="background-color: aqua;" v-on:click="fetchDataTest()">Fetch Data</button>
        <button style="background-color: aqua;" v-on:click="fetchDataTestNew()">Fetch Data New</button>
        <button style="background-color: aqua;" v-on:click="fetchPageTest()">Fetch Page</button>



        <div v-for="newPost in currentPostsNew" :key="newPost.Id">
            {{newPost.Title}}
            <p>Posted: {{newPost.DatePostedString}}</p>
            <br />

            <div v-if="newPost.ImageUrl != null" >

                <a v-bind:href="newPost.ImageUrl" target="_blank"><img v-lazy="newPost.ThumbnailUrl" alt="img" /></a>
            </div>
            <div v-html="newPost.Content"></div>
        </div>

        <div  v-for="post in currentPosts" :key="post.no">
            <!-- <p>{{post.sub}}</p>
            <br />
            <div v-html="post.com"></div>
            <br /> -->

          
            <!--no Lazy Loading, limit image to OP only-->
            <iframe v-if='post.tim != 0'  :width="post.tn_w + 10" :height="post.tn_h + 10" title="img" referrerpolicy="same-origin" :src="post.thumbnail_url"></iframe>

            <!-- <img v-lazy="post.thumbnail_url" alt="img" />
            <div style="margin-top: 500px; margin-bottom: 500px;"></div> -->
            </div>

        <!--iframe test-->



    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Navbar from '../components/Navbar.vue'
import AnimeService  from '../data/AnimeService'
import router from '@/router'
import { Post } from '../data/Post.types'
import { FourCbmbPost } from '@/data/FourCbmbPost.types';
import FourCbmbService from '@/data/FourCbmbService';

export default defineComponent({
    name: "Anime",
    props: {

    },
    data() {
        return {
            currentPosts: [] as Post[],
            currentPostsNew: [] as FourCbmbPost[]
        }
    },
    created(){

    },
    methods: {
        async fetchDataTest() {
            var posts : Post[] = await AnimeService.GetAnimeThread(253202325)
            this.currentPosts = posts
        },
        async fetchDataTestNew() {
            var newPosts : FourCbmbPost[] = await FourCbmbService.GetThread("a", 254105326)
            this.currentPostsNew = newPosts
            console.log(this.currentPostsNew)
        },
        async fetchPageTest() {
            var posts : Post[] = await AnimeService.GetAnimePage(1)
            this.currentPosts = posts
        },
        handler () {
            console.log('vis')
        }
    },
    components: { Navbar }
})
</script>