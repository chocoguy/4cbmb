<template>
    <Navbar />
    <div class="home">
        <p>4cbmb, 4 Channel but make it better</p>
        <P>Empty for now</P>
        <p>Version 1.0, Last updated 8/23/2023</p>
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