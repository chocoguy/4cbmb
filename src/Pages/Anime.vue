<template>
    <Navbar />
    <div class="anime">
        <h2 class="orange-text" style="font-weight: bold; text-align: center;">Anime & Manga</h2>
        <div class="OP-posts-container">
            <div v-if="OPPosts.length != 0" v-for="post in OPPosts" v-bind:key="post.Id" style="width: 80%;">
                <OPPost v-bind:post="post" />
            </div>
            <div v-else>
                <p class="orange-text">Loading...</p>
            </div>
            <div class="page-selector" v-for="i in 10">
                <p class="orange-text" v-on:click="NavigateToPage(i)">{{i}}</p>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Navbar from '../components/Navbar.vue'
import AnimeService  from '../data/AnimeService'
import router from '@/router'
import { Post } from '../data/Post.types'
import OPPost from '@/Pieces/OPPost.vue';
import SinglePost from '../components/SinglePost.vue'
import { FourCbmbPost } from '@/data/FourCbmbPost.types';
import FourCbmbService from '@/data/FourCbmbService';
import { FourCbmbPage } from '@/data/FourCbmbPage.types';

export default defineComponent({
    name: "Anime",
    props: {
        page: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            OPPosts: [] as FourCbmbPost[]
        }
    },
    async created(){
        var opPosts : FourCbmbPost[] = await FourCbmbService.GetOPPostsFromPage("a", this.page)
        this.OPPosts = opPosts

    },
    methods: {
        handler () {
            console.log('vis')
        },
        NavigateToPage(id: number){
            router.push("/a/" + id)
        },
    },
    components: { Navbar, OPPost }
})
</script>