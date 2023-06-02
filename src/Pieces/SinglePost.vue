<template>
    <div>
        <div style="display: flex; flex-direction: row; justify-content: space-between">
            <p class="orange-text">{{post?.sub}}</p>
            <p class="orange-text">{{post?.now}}</p>
        </div>
        <div class="OP-post-container">
            <div class="OP-post-text-bubble">
                <div v-html="post?.com"></div>
            </div>
            <iframe :width="post ? post.tn_w + 10 : 100" :height="post ? post.tn_h + 10 : 100" title="img" referrerpolicy="same-origin" :src="post?.thumbnail_url"></iframe>
            <div class="blue-divider" />
            <div style="display: flex;">
                <i class="fa-solid fa-comments"></i>
                <p class="blue-text">{{post?.replies}}</p>
                <i class="fa-solid fa-image"></i>
                <p class="blue-text">{{post?.images}}</p>
                <i class="fa-solid fa-users"></i>
                <p class="blue-text">{{post?.unique_ips}}</p>
                <small class="orange-text">{{post?.filename}}</small>
                <strong class="orange-text">{{"#" + post?.no}}</strong>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { Post } from '../data/Post.types';
    import router from '@/router';

    export default defineComponent({
        name: "SinglePost",
        props: {
            post: Object as () => Post,
            isOPPost: Boolean
        },
        created() {
            
        },
        data() {
            return {
                
            }
        },
        methods: {
            NavigateTo(uri: string){
                router.push(uri)
            },


        },
    })
</script>