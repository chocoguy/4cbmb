<template>
    <div v-if="isOP">
        <div style="display: flex; flex-direction: row; justify-content: space-between">
            <p class="orange-text" v-bind:id="postId">{{post?.Id}}</p>
            <p class="orange-text">{{post?.DatePostedString}}</p>
        </div>
            <div class="">
                <div style="display: flex; flex-direction: row-reverse;">
                <div class="OP-post-text-bubble">
                    <div v-html="post?.Content"></div>
                </div>
                <a v-bind:href="post?.ImageUrl" target="_blank"><img v-lazy="post?.ThumbnailUrl" alt="img" /></a>
                </div>
                <div class="gray-divider" />
            </div>
    </div>
    <div v-else>
        <div style="display: flex; flex-direction: row; justify-content: space-between">
            <p class="blue-text" v-bind:id="postId">{{post?.Id}}</p>
            <p class="blue-text">{{post?.DatePostedString}}</p>
            <button class="blue-text" v-on:click="expandImage = !expandImage">{{expandImage ? "Collapse" : "Expand"}}</button> <!-- TODO: Make this a toggle button -->
        </div>
            <div class="">
                <div style="display: flex; flex-direction: row;">
                <div class="post-text-bubble">
                    <div v-html="post?.Content"></div>
                </div>
                <a v-bind:href="post?.ImageUrl" target="_blank"><img v-lazy="post?.ThumbnailUrl" alt="img" /></a>
                </div>
                <div class="gray-divider" />
                <!--expand image test
                Further develop this
                why use iframes? because CORS prevents me from loading the image directly
                -->
                <iframe v-if="expandImage" :width="post?.ImageWidth" :height="post?.ImageHeight" title="img" referrerpolicy="same-origin" :src="post?.ImageUrl"></iframe>
            </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { Post } from '../data/Post.types';
    import router from '@/router';
    import { FourCbmbPost } from '@/data/FourCbmbPost.types';

    export default defineComponent({
        name: "SinglePost",
        props: {
            post: Object as () => FourCbmbPost,
            isOP: Boolean,
        },
        created() {
            console.log(this.isOP)
            this.postId = this.post?.Id == null ? "" : "p" + this.post?.Id.toString()
        },
        data() {
            return {
                postId: "",
                expandImage: false
            }
        },
        methods: {
            NavigateTo(uri: string){
                router.push(uri)
            },


        },
    })
</script>