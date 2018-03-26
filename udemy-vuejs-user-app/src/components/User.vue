<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <b-button size="sm" variant="primary" @click="changeMyName">
            Change My Name
        </b-button>
        <hr />
        <b-row>
            <b-col sm="6">
                <app-user-detail :name="name" :userAge="age" @nameReset="onNameReset" :resetCallback="reset"></app-user-detail>
            </b-col>
            <b-col sm="6">
                <app-user-edit :userAge="age"></app-user-edit>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data() {
            return {
                name : 'Cenk',
                age : 37
            }
        },
        methods : {
            changeMyName() {
                this.name = this.name === 'Cenk' ? 'Alex' : 'Cenk'
            },
            onNameReset(event) {
                this.name = event
            },
            reset() {
                this.changeMyName()
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
