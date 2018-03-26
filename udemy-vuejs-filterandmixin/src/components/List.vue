<template>
  <b-row>
    <b-col sm="8">
      <h1>Filters & Mixins</h1>
      <b-input v-model="filterText"></b-input>
      <b-list-group>
        <b-list-group-item v-for="fruit in filteredFruits">{{ fruit }}</b-list-group-item>
      </b-list-group>
    </b-col>
  </b-row>
</template>

<script>
  import {fruits} from '../mixin/fruits'

  export default {
    mixins: [fruits]
  }
</script>

<style>
</style>
