<template>
    <div style="margin-top: 40px; margin-bottom: 40px;">
        <div style="display: flex; flex-direction: row; justify-content: space-between">
            <p class="orange-text">{{post?.Title}}</p>
            <p class="orange-text">{{post?.DatePostedString}}</p>
        </div>
        <div class="OP-post-container">
            <div style="display: flex; flex-direction: row;">
            <div class="OP-post-text-bubble">
                <div v-html="post?.Content"></div>
            </div>
            <a v-bind:href="post?.ImageUrl" target="_blank"><img v-lazy="post?.ThumbnailUrl" alt="img" /></a>
            </div>
            <div class="blue-divider" />
            <div style="display: flex; flex-direction: row; margin: 10px;">
                <i class="fa-solid fa-comments"></i>
                <p class="blue-text" style="margin-left: 5px;">{{post?.Replies}}</p>
                <i class="fa-solid fa-image" style="margin-left: 5px;"></i>
                <p class="blue-text" style="margin-left: 5px;">{{post?.ImageReplies}}</p>
                <div style="margin-left: auto;">
                <p class="orange-text" style="align-self: flex-end;">{{"#" + post?.Id}}</p>
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
                
            }
        },
        methods: {
            NavigateTo(uri: string){
                router.push(uri)
            },
        },
    })

</script>