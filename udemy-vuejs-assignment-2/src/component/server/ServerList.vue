<template>
    <b-col sm="6">
        <ul class="list-group">
            <app-server-item v-for="s in servers" :server="s"></app-server-item>
        </ul>
    </b-col>
</template>

<script>
    import ServerItem from './ServerItem.vue'

    export default {
        data() {
            return {
                servers : [
                    {id : 1, name : 'Server 1', status : 'Normal'},
                    {id : 2, name : 'Server 2', status : 'Normal'},
                    {id : 3, name : 'Server 3', status : 'Fatal'},
                    {id : 4, name : 'Server 4', status : 'Normal'},
                    {id : 5, name : 'Server 5', status : 'Error'},
                ]
            }
        },
        components : {
            'app-server-item' : ServerItem
        }
    }
</script>