<template>
    <b-container>
        <b-row>
            <b-col>
                <app-quote>
                    <h2 slot="title">{{ quoteTitle }}</h2>

                    <template slot="content">
                        <p>A Wonderful Quote</p>
                        <p>Another Quote</p>
                    </template>
                </app-quote>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import Quote from './components/Quote.vue'

    export default {
        data() {
            return {
                quoteTitle : 'The Quote'
            }
        },
        components: {
            'app-quote': Quote
        }
    }
</script>
