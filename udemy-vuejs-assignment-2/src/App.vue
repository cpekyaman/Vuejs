<template>
    <b-container>
        <app-banner></app-banner>
        <app-header></app-header>

        <hr />
        <app-server-dashboard></app-server-dashboard>
        <hr />

        <app-footer></app-footer>
    </b-container>
</template>

<script>
    import Banner from './component/shared/Banner.vue'
    import Header from './component/shared/Header.vue'
    import Footer from './component/shared/Footer.vue'
    import Dashboard from './component/server/Dashboard.vue'

    export default {
        name: 'app',
        data() {
            return {
                title: 'Assignment'
            }
        },
        components : {
            'app-banner' : Banner,
            'app-header' : Header,
            'app-footer' : Footer,
            'app-server-dashboard' : Dashboard
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
</style>
