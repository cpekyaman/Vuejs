<template>
  <b-container>
    <b-row>
      <b-col sm="4">
        <b-input v-model="message"></b-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12">
        <b-button variant="primary" @click="selectedComponent='appBlue'">Load Blue</b-button>
        <b-button variant="success" @click="selectedComponent='appGreen'">Load Green</b-button>
        <b-button variant="danger" @click="selectedComponent='appRed'">Load Red</b-button>
      </b-col>
    </b-row>
    <b-row>
      <keep-alive>
        <component :is="selectedComponent">
          <p>{{ message }}</p>
        </component>
      </keep-alive>
    </b-row>
  </b-container>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data() {
            return {
                selectedComponent : 'appBlue',
                message : 'Hello Cenk'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
