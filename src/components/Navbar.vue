<template>
    <div class="MainHeader">
        <nav class="navbar">
            <img src="../Resources/4cbmblogo.png" alt="4cbmb logo" class="nav-logo" v-on:click="NavigateTo('/')" />
                <a href="#" class="nav-link" v-on:click="NavigateTo('/a/1')">/a</a>
                <a href="#" class="nav-link" v-on:click="NavigateTo('/o')">/o</a>
                <a href="#" class="nav-link" v-on:click="NavigateTo('/x')">/x</a>
            <h3 style="text-emphasis: strong;">4cbmb</h3>
        </nav>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import router from '@/router';

    export default defineComponent({
        name: "Navbar",
        created() {

        },
        methods: {
            NavigateTo(uri: string){
                router.push(uri)
            }
        }
    })

</script>