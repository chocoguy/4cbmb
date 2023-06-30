<template>
    <div class="MainHeader">
        <nav class="navbar">
            <a href="/"><img src="../Resources/4cbmblogo.png" style="margin-top: 5px; margin-left: 5px;" alt="4cbmb logo" class="nav-logo" /></a>
                <a href="/a/1" class="nav-link">/a</a>
                <a href="/o/1" class="nav-link">/o</a>
                <a href="/x/1" class="nav-link">/x</a>
            <h3 style="font-weight: bold; color: white; margin-left: auto; font-size: 21px; margin-right: 5px;">4cbmb</h3>
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