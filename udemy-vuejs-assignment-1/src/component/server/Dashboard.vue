<template>
    <b-row>
        <app-server-list></app-server-list>
        <app-server-detail></app-server-detail>
    </b-row>
</template>

<script>
    import ServerList from './ServerList.vue'
    import ServerDetail from './ServerDetail.vue'

    export default {
        components : {
            'app-server-list' : ServerList,
            'app-server-detail' : ServerDetail
        }
    }
</script>

<style scoped>
    div.row {
        border: 1px solid blue;
    }
</style>