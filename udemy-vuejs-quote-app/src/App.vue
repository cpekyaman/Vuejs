<template>
    <b-container>
        <b-row>
            <b-col>
                <b-button @click="selectedComponent='app-author'">Author</b-button>
                <b-button @click="selectedComponent='app-quote'">Quote</b-button>
                <b-button @click="selectedComponent='app-newquote'">NewQuote</b-button>

                <hr />
                <component :is="selectedComponent">
                    <p>Default Content</p>
                </component>

                <!--<app-quote>-->
                    <!--<h2 slot="title">{{ quoteTitle }}</h2>-->

                    <!--<template slot="content">-->
                        <!--<p>A Wonderful Quote</p>-->
                        <!--<p>Another Quote</p>-->
                    <!--</template>-->
                <!--</app-quote>-->
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import Quote from './components/Quote.vue'
    import Author from './components/Author.vue'
    import NewQuote from './components/NewQuote.vue'

    export default {
        data() {
            return {
                quoteTitle : 'The Quote',
                selectedComponent : 'app-quote'
            }
        },
        components: {
            'app-quote': Quote,
            'app-author' : Author,
            'app-newquote' : NewQuote
        }
    }
</script>
