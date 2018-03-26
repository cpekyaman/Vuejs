<template>
  <b-container>
    <b-row>
      <b-col sm="8">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUpper }}</p>
        <p>{{ text | toLower }}</p>
        <hr/>
        <b-input v-model="filterText"></b-input>
        <b-list-group>
          <b-list-group-item v-for="fruit in filteredFruits">{{ fruit }}</b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>

    <app-list></app-list>
  </b-container>
</template>

<script>
  import List from './components/List.vue'
  import {fruits} from './mixin/fruits'

  export default {
    name: 'app',
    mixins: [fruits],
    data() {
      return {
        text: 'Welcome to Your Vue.js App'
      }
    },
    filters: {
      toUpper(value) {
        return value.toUpperCase()
      }
    },
    components: {
      appList : List
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
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
