<template>
  <b-container>
    <b-row>
      <b-col sm="8">
        <h1>Filters & Mixins</h1>
        <b-input v-model="text"></b-input>

        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <p>{{ text | reverse }}</p>

        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <p>{{ text | appendLen }}</p>

        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <p>{{ reversed }}</p>
        <p>{{ lenAppended }}</p>

        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        text : 'hello'
      }
    },
    computed: {
      reversed() {
        return this.text.split("").reverse().join("")
      },
      lenAppended() {
        return this.text + ' (' + this.text.length + ')'
      }
    },
    filters: {
      reverse(value) {
        return value.split("").reverse().join("")
      }
    }
  }
</script>

<style>
</style>
