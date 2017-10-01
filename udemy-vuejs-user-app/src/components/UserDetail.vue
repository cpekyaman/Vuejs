<template>
    <div class="component">
        <b-form inline>
            <b-form-group id="userName" label="UserName" horizontal>
                <b-form-input type="text" readonly :value="reversedName"></b-form-input>
            </b-form-group>
            <br />
            <br />
            <b-button-group>
                <b-button size="sm" variant="primary" @click="resetName">Reset Event</b-button>
                <b-button size="sm" variant="success" @click="resetCallback()">Reset Callback</b-button>
            </b-button-group>
        </b-form>
    </div>
</template>

<script>
    export default {
        props : {
            name : { type : String, required : true },
            resetCallback : {type : Function }
        },
        computed : {
            reversedName() {
                return this.name.split('').reverse().join('')
            }
        },
        methods : {
            resetName() {
                this.name = this.name === 'Cenk' ? 'Alex' : 'Cenk'
                this.$emit('nameReset', this.name)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: cornflowerblue;
    }
</style>
