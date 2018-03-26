<template>
    <div class="component status">
        <span>Status {{ statusText }}</span>
        <button @click="changeStatus">Change Status</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                healthy : false
            }
        },
        computed : {
            statusText() {
                return this.healthy ? "Normal" : 'Not Normal'
            }
        },
        methods: {
            changeStatus() {
                this.healthy = ! this.healthy
            }
        }
    }
</script>

<style>
    .status {
        border: 2px solid darkblue;
        width: 50%;
        margin: 3px auto;
        padding: 5px 0;
    }
</style>