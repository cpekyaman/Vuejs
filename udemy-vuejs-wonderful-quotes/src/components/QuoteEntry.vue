<template>
    <b-col sm="8">
        <b-form>
            <b-form-group id="quoteVariant"
                          label="QuoteVariant"
                          label-for="quoteVariant">
                <b-form-select id="quoteVariant" v-model="variant" :options="variants" class="mb-3">
                </b-form-select>
            </b-form-group>

            <b-form-group id="quote"
                          label="Quote Text"
                          label-for="quoteText">
                <b-form-textarea id="quoteText"
                                 v-model="quoteText"
                                 required :rows="3" :max-rows="6"
                                 placeholder="Quote Text">
                </b-form-textarea>
            </b-form-group>

            <b-button type="submit" variant="primary" @click.prevent="addQuote">Add Quote</b-button>
        </b-form>
    </b-col>
</template>

<script>
    export default {
        data() {
            return {
                quoteText : '',
                variant : null,
                variants : [
                    { value : null, text : 'Please Select' },
                    { value : 'primary', text : 'primary' },
                    { value : 'success', text : 'success' },
                    { value : 'info', text : 'info' },
                    { value : 'danger', text : 'danger' }
                ]
            }
        },
        methods : {
            addQuote() {
                this.$emit('appNewQuote', {
                    quote : {
                        variant : this.variant,
                        text : this.quoteText
                    }
                })
                this.reset()
            },
            reset() {
                this.quoteText = '',
                this.variant = null
            }
        }
    }
</script>

<style scoped>

</style>