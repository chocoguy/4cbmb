<template>
    <div v-if="isOP">
        <div class="OP-posts-metadata">
            <p class="orange-text" v-bind:id="postId">#{{post?.Id}}</p>
            <a v-bind:href="post?.ImageUrl" target="_blank" v-if="post?.ImageName != null" v-bind:title="post?.ImageName"  class="orange-text" >{{post?.ImageName.length > 70 ? post?.ImageName.slice(0, 70) + "(...)" : post?.ImageName}}.{{post?.ImageUrl != null ? post?.ImageUrl.split('.').pop() : ""}}</a>
            <p class="orange-text">{{post?.DatePostedString}}</p>
        </div>
            <div class="">
                <div class="posts-content-container-OP">
                <div class="OP-post-text-bubble">
                    <div v-html="post?.Content"></div>
                </div>
                <div v-on:click="expandImage = !expandImage" style="cursor: pointer; margin: 10px" v-if="expandImage == false && post?.ImageUrl != null">
                    <img v-lazy="post?.ThumbnailUrl" alt="img" />
                </div>
                </div>
                <div v-if="expandImage && !post?.ImageUrl.endsWith('.webm')" v-on:click="expandImage = !expandImage" style="cursor: pointer; margin: 10px;">
                <img class="fade-image-in responsive-img"  referrerpolicy="same-origin" :src="post?.ImageUrl" alt="img" />
                </div>
                <div v-if="expandImage && post?.ImageUrl.endsWith('.webm')" style="margin: 10px" >
                    <p v-on:click="expandImage = !expandImage" style="cursor: pointer;" class="orange-text">[close]</p>
                    <video class="fade-image-in responsive-img" controls autoplay loop muted>
                        <source :src="post?.ImageUrl" type="video/webm">
                    </video>
                </div>
                <div class="gray-divider" />
            </div>
    </div>
    <div v-else>
        <div class="OP-posts-metadata">
            <p class="blue-text" v-bind:id="postId">#{{post?.Id}}</p>
            <a v-bind:href="post?.ImageUrl" target="_blank" v-if="post?.ImageName != null" v-bind:title="post?.ImageName"  class="blue-text" >{{post?.ImageName.length > 70 ? post?.ImageName.slice(0, 70) + "(...)" : post?.ImageName}}.{{post?.ImageUrl != null ? post?.ImageUrl.split('.').pop() : ""}}</a>
            <p class="blue-text">{{post?.DatePostedString}}</p>
        </div>
            <div class="">
                <div class="OP-posts-content-container">
                <div class="post-text-bubble">
                    <div v-html="post?.Content"></div>
                </div>
                <div v-on:click="expandImage = !expandImage" style="cursor: pointer; margin: 10px" v-if="expandImage == false && post?.ImageUrl != null">
                    <img v-lazy="post?.ThumbnailUrl" alt="img" />
                </div>
                </div>
                <!--? I guess iframes are no longer neccesary <iframe class="fade-image-in" v-if="expandImage" :width="post?.ImageWidth" :height="post?.ImageHeight" title="img" referrerpolicy="same-origin" :src="post?.ImageUrl"></iframe> -->
                <div v-if="expandImage && !post?.ImageUrl.endsWith('.webm')" v-on:click="expandImage = !expandImage" style="cursor: pointer; margin: 10px;">
                <img class="fade-image-in responsive-img"  referrerpolicy="same-origin" :src="post?.ImageUrl" alt="img" />
                </div>
                <div v-if="expandImage && post?.ImageUrl.endsWith('.webm')" style="margin: 10px" >
                    <p v-on:click="expandImage = !expandImage" style="cursor: pointer;" class="blue-text">[close]</p>
                    <video class="fade-image-in responsive-img" referrerpolicy="same-origin" controls autoplay loop muted>
                        <source :src="post?.ImageUrl" type="video/webm">
                    </video>
                </div>
                <div class="gray-divider" />
           </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';
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
            //console.log(this.isOP)
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
            GetMediaExtension(url: string){
                return url.split('.').pop()
            }


        },
    })
</script>