<template>
    <div>
        <h3>The Author</h3>
    </div>
</template>

<script>
    export default {
        activated() {
            console.log('Author activated');
        },
        deactivated() {
            console.log('Author deactivated');
        },
        destroyed() {
            console.log('Author destroyed');
        }
    }
</script>

<style scoped>

</style>