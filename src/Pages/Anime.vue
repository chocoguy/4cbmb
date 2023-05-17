<template>
    <Navbar />
    <div class="anime">
        <p>Anime Place</p>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Navbar from '../components/Navbar.vue'


export default defineComponent({
    name: "Anime",
    components: { Navbar }
})
</script>