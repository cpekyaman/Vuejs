<template>
    <li class="list-group-item" @click="changeServer" style="cursor: pointer">
        {{ server.id }} {{ server.name }}
    </li>
</template>

<script>
    import { eventBus } from '../../main.js'

    export default {
        props : {
            server : { type : Object }
        },
        methods : {
            changeServer() {
                eventBus.$emit('serverChanged', this.server)
            }
        }
    }
</script>