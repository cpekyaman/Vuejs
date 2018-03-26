<template>
    <b-col sm="12">
        <b-progress :max="max">
            <b-progress-bar :value="count">
                Quotes: <strong>{{ count }} / {{ max }}</strong>
            </b-progress-bar>
        </b-progress>
    </b-col>
</template>

<script>
    export default {
        props : {
            count : { type : Number, default : 0 },
            max : { type : Number, required : true }
        }
    }
</script>

<style scoped>

</style>