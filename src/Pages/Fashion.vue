<template>
    <Navbar />
    <div class="fashion">
        <h2 class="orange-text" style="font-weight: bold; text-align: center; margin: 10px;">Fashion</h2>
        <div class="OP-posts-container">
            <div v-if="OPPosts.length != 0" v-for="post in OPPosts" v-bind:key="post.Id" class="container-width">
                <OPPost v-bind:post="post" v-bind:board="'fa'" />
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
import {defineComponent} from 'vue';
import Navbar from '../components/Navbar.vue'
import router from '@/router'
import OPPost from '@/Pieces/OPPost.vue';
import { FourCbmbPost } from '@/data/FourCbmbPost.types';
import FourCbmbService from '@/data/FourCbmbService';


export default defineComponent({
    name: "Fashion",
    props: ['page'],
    data() {
        return {
            OPPosts: [] as FourCbmbPost[]
        }
    },
   created() {
    this.getNewPosts()
    // this.$watch(
    //   () => this.$route.params,
    //   (toParams, previousParams) => {
    //     this.getNewPosts()
    //   }
    // )
  },
    methods: {
        async getNewPosts () {
            this.OPPosts = []
            var opPosts : FourCbmbPost[] = await FourCbmbService.GetOPPostsFromPage("fa", this.page)
            //console.log("Page: " + this.page)
            this.OPPosts = opPosts
        },
        NavigateToPage(id: number){
            router.push("/fa/" + id)
        },
    },
    components: { Navbar, OPPost }
})
</script>