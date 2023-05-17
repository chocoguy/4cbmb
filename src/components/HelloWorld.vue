<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <h2>No plugins for you</h2>
    <p>Let me try and render something{{displayThis}}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { defineComponent } from 'vue';



@Options({

  props: {
    msg: String,
    displayThis: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string
  displayThis!: string;

  data() {
    return {
      displayThis: "display name"
    }
  }

  mounted() {
    this.displayThis = "sdf";
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
