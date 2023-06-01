<template>
    <Navbar />
    <div class="anime">
        <h2>Anime & Manga</h2>
        <button style="background-color: aqua;" v-on:click="fetchDataTest()">Fetch Data</button>

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

export default defineComponent({
    name: "Anime",
    props: {

    },
    data() {
        return {
            currentPosts: [] as Post[]
        }
    },
    created(){

    },
    methods: {
        async fetchDataTest() {
            var posts : Post[] = await AnimeService.GetAnimePage(253202325)
            this.currentPosts = posts
        },
        handler () {
            console.log('vis')
        }
    },
    components: { Navbar }
})
</script>