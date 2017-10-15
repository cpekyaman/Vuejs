<template>
    <b-form-group id="fullName" label="Full Name">
        <b-form-input id="firstName" type="text" :value="firstName"
                      @change="nameChanged(1, $event)"
                      placeholder="Your FirstName"></b-form-input>
        <b-form-input id="lastName" type="text" :value="lastName"
                      @change="nameChanged(2, $event)"
                      placeholder="Your LastName"></b-form-input>
    </b-form-group>
</template>

<script>
    export default {
        props : {
            value : {type : String, required : true}
        },
        computed : {
            firstName() {
                return this.value.length === 0 ? '' : this.value.split(' ')[0]
            },
            lastName() {
                return this.value.length === 0 ? '' :this.value.split(' ')[1]
            }
        },
        methods: {
            nameChanged(order, event) {
                if(order === 1) {
                    this.$emit('input', event + ' ' + this.lastName)
                } else {
                    this.$emit('input', this.firstName + ' ' + event)
                }
            }
        }
    }
</script>