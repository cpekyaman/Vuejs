<template>
    <b-col sm="6">
        <b-alert :variant="alertVariant" show>{{ serverStatus }}</b-alert>
    </b-col>
</template>

<script>
    import { eventBus } from '../../main.js'

    export default {
        data() {
            return {
                serverStatus : 'UNKNOWN'
            }
        },
        computed : {
            alertVariant() {
                if(this.serverStatus === 'UNKNOWN') {
                    return 'warning'
                } else if(this.serverStatus === 'Normal') {
                    return 'success'
                } else {
                    return 'danger'
                }
            }
        },
        created() {
            eventBus.$on('serverChanged', (server) => {
                this.serverStatus = server.status
            })
        }
    }
</script>