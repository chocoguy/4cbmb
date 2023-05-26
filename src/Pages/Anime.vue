<template>
    <Navbar />
    <div class="anime">
        <h2>Anime & Manga</h2>
        <button style="background-color: aqua;" v-on:click="fetchDataTest()">Fetch Data</button>
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
            var posts : Post[] = await AnimeService.GetAnimePage(252883225)
            this.currentPosts = posts
        }
    },
    components: { Navbar }
})
</script>