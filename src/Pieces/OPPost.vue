<template>
    <div style="margin-top: 40px; margin-bottom: 40px;">
        <div style="display: flex; flex-direction: row; justify-content: space-between; margin: 10px">
            <p class="orange-text">{{post?.Title}}</p>
            <a v-bind:href="post?.ImageUrl" target="_blank" v-if="post?.ImageName != null" v-bind:title="post?.ImageName"  class="orange-text" >{{post?.ImageName.length > 70 ? post?.ImageName.slice(0, 70) + "(...)" : post?.ImageName}}.{{post?.ImageUrl != null ? post?.ImageUrl.split('.').pop() : ""}}</a>
            <p class="orange-text">{{post?.DatePostedString}}</p>
        </div>
        <div class="OP-post-container">
            <div style="display: flex; flex-direction: row;">
            <!--v-on:click="NavigateTo(`/a/thread/${post?.Id}`)
            Could use this here. But im going to be too trigger happy with this and accidentally click on it
            -->
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
            <div class="blue-divider" />
            <div style="display: flex; flex-direction: row; margin: 10px;">
                <i class="fa-solid fa-comments"></i>
                <p class="blue-text" style="margin-left: 5px;">{{post?.Replies}}</p>
                <i class="fa-solid fa-image" style="margin-left: 5px;"></i>
                <p class="blue-text" style="margin-left: 5px;">{{post?.ImageReplies}}</p>
                <div style="margin-left: auto;">
                <p class="orange-text" style="align-self: flex-end; cursor: pointer; text-decoration: underline;" v-on:click="NavigateTo(`/a/thread/${post?.Id}`)">{{"#" + post?.Id}}</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { FourCbmbPost } from '@/data/FourCbmbPost.types';
    import router from '@/router';

    export default defineComponent({
        name: "OPPost",
        props: {
            post: Object as () => FourCbmbPost,
        },
        created() {
            
        },
        data() {
            return {
                expandImage: false,
            }
        },
        methods: {
            NavigateTo(uri: string){
                router.push(uri)
            },
        },
    })

</script>