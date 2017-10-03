<template>
    <div class="component">
        <b-form>
            <b-form-group id="userAge" label="UserAge">
                <b-form-input type="text" readonly :value="userAge"></b-form-input>
            </b-form-group>
            <b-button-group>
                <b-button size="sm" variant="primary" @click="editAge">Edit Age</b-button>
            </b-button-group>
        </b-form>
    </div>
</template>

<script>
    import { eventBus } from '../main.js'

    export default {
        props : {
            userAge : { type : Number}
        },
        methods : {
            editAge() {
                this.userAge = this.userAge + 1
                eventBus.$emit('ageChanged', this.userAge)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
