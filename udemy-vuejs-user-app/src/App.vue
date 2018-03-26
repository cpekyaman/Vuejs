<template>
  <b-container>
    <b-row>
      <b-col sm="12">
        <app-user></app-user>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
    import User from './components/User.vue'

    export default {
        name: 'app',
        components: {
            appUser: User
        }
    }
</script>

<style lang="scss">
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

div.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
