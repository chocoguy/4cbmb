<template>
    
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import router from '@/router';

    export default defineComponent({
        name: "SinglePost",
        created() {

        },
        methods: {
            NavigateTo(uri: string){
                router.push(uri)
            }
        }
    })
</script>