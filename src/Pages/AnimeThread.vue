<template>

</template>

<script lang="ts">
import { DefineComponent } from 'vue';
import Navbar from '@/Pieces/Navbar.vue';
import { FourCbmbPost } from '@/data/FourCbmbPost.types';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "AnimeThread",
    props: ['id'],
    data() {
        return {
            post: {} as FourCbmbPost
        }
    },
    created() {
        this.getPost()
    },
    methods: {
        async getPost () {
            var post : FourCbmbPost = await FourCbmbService.GetPost(this.id)
            this.post = post
        },
    },
    components: { Navbar }
})

</script>