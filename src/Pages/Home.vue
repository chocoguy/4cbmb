<template>
    <Navbar />
    <div class="home">
        <p>4cbmb, under construction</p>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Navbar from '../components/Navbar.vue'


export default defineComponent({
    name: "Home",
    components: { Navbar }
})
</script>