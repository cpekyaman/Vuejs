<template>
    <b-row>
        <app-quote v-for="(quote,i) in quotes" @click.native="deleteQuote(i)">
            <p :class="'text-' + quote.variant">{{ quote.text }}</p>
        </app-quote>
    </b-row>
</template>

<script>
    import Quote from './Quote.vue'

    export default {
        props : {
            quotes : { type : Array, required : true }
        },
        components : {
            appQuote : Quote
        },
        methods : {
            deleteQuote(index) {
                this.$emit('appQuoteDeleted', index)
            }
        }
    }
</script>

<style scoped>

</style>