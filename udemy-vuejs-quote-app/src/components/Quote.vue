<template>
    <div>
        <div class="title">
            <slot name="title"></slot>
            <slot name="subtitle" style="color: blue">The Subtitle</slot>
        </div>

        <div name="content">
            <slot name="content">Default Content</slot>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            console.log('Quote created')
        },
        mounted() {
            console.log('Quote mounted')
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }

    h2 {
        color: red;
    }

    div.title {
        border: 1px solid green;
    }
</style>