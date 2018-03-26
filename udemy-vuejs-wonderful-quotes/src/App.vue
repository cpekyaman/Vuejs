<template>
    <b-container>
        <b-row>
            <app-header :max="maxQuotes" :count="quotes.length"></app-header>
        </b-row>

        <b-row>
            <b-col sm="8">
                <b-alert variant="warning" :show="quotes.length == maxQuotes">
                    Max number of quotes {{ maxQuotes }} reached. <br />
                    Please delete an item before adding a new one.
                </b-alert>
            </b-col>
        </b-row>
        <b-row>
            <app-quote-entry @appNewQuote="quoteAdded"></app-quote-entry>
        </b-row>

        <b-row>
            <app-quote-grid :quotes="quotes" @appQuoteDeleted="quoteDeleted"></app-quote-grid>
        </b-row>

        <b-row>
            <app-footer></app-footer>
        </b-row>
    </b-container>
</template>

<script>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import QuoteEntry from './components/QuoteEntry.vue'
    import QuoteGrid from './components/QuoteGrid.vue'

    export default {
        data() {
            return {
                quotes: [],
                maxQuotes: 3
            }
        },
        components : {
            appHeader : Header,
            appFooter : Footer,
            appQuoteEntry : QuoteEntry,
            appQuoteGrid : QuoteGrid
        },
        methods : {
            quoteAdded(event) {
                if(this.quotes.length < this.maxQuotes) {
                    this.quotes.push(event.quote)
                }
            },
            quoteDeleted(index) {
                this.quotes.splice(index, 1)
            }
        }
    }
</script>

<style>
    div {
        margin-top: 5px;
        margin-bottom: 5px;
    }
</style>
