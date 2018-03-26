<template>
    <b-container>
        <b-row>
            <b-col sm="8">
                <h1>File A Complaint</h1>
            </b-col>
        </b-row>

        <hr/>

        <b-row v-if="!isSubmitted">
            <b-col sm="8">
                <b-form >
                    <app-full-name v-model="userModel.fullName"></app-full-name>

                    <b-form-group id="email" label="Email" labelFor="email">
                        <b-form-input id="email" type="email" v-model.lazy="userModel.email"
                                      placeholder="Your Email"></b-form-input>
                    </b-form-group>
                    <b-form-group id="password" label="Password" labelFor="password">
                        <b-form-input id="password" type="password" v-model.lazy="userModel.password"
                                      placeholder="Your Password"></b-form-input>
                    </b-form-group>
                    <b-form-group id="age" label="Age" labelFor="age">
                        <b-form-input id="age" type="number" v-model.lazy="userModel.age"
                                      placeholder="Your Age"></b-form-input>
                    </b-form-group>

                    <b-form-group id="message" label="Message" labelFor="message">
                        <b-form-textarea id="message" v-model="userModel.message"
                                         placeholder="Enter the message you want to leave"
                                         :rows="5" :max-rows="8">
                        </b-form-textarea>
                    </b-form-group>

                    <b-form-checkbox-group id="prefs" name="preferences" v-model="userModel.mailPrefs">
                        <b-form-checkbox value="email">Send Mail</b-form-checkbox>
                        <b-form-checkbox value="infoMail">Send InfoMail</b-form-checkbox>
                    </b-form-checkbox-group>

                    <b-form-radio-group id="gender" v-model="userModel.gender" name="gender">
                        <b-form-radio value="male">Male</b-form-radio>
                        <b-form-radio value="female">Female</b-form-radio>
                    </b-form-radio-group>

                    <b-form-group id="priority" label="Priority" labelFor="priority">
                        <b-form-select id="priority" v-model="userModel.priority" :options="priorityOptions"
                                       class="mb-3"></b-form-select>
                    </b-form-group>

                    <b-button type="submit" variant="primary" @click.prevent="submitForm">Submit</b-button>
                </b-form>
            </b-col>
        </b-row>

        <hr/>

        <b-row v-if="isSubmitted">>
            <b-col sm="8">
                <b-card header="User Data Summary" footer="Thank You">
                    <p class="card-text">FullName : {{ userModel.fullName }}</p>
                    <p class="card-text">Email : {{ userModel.email }}</p>
                    <p class="card-text">Age : {{ userModel.age }}</p>
                    <p class="card-text">Message : {{ userModel.message }}</p>
                    <p class="card-text">Gender : {{ userModel.gender }}</p>
                    <p><strong>Mail Prefs :</strong></p>
                    <ul v-if="userModel.mailPrefs.length > 0">
                        <li v-for="m in userModel.mailPrefs">{{ m }}</li>
                    </ul>
                    <p class="card-text">Priority : {{ userModel.priority }}</p>
                </b-card>
                <b-button variant="success" @click.prevent="resetForm">Reset</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import FullName from './components/FullName.vue'

    export default {
        data() {
            return {
                priorityOptions: [
                    {value: null, text: 'Select A Priority'},
                    {value: 'Low', text: 'Low'},
                    {value: 'High', text: 'High'},
                    {value: 'Medium', text: 'Medium'},
                ],
                userModel : this.createUserModel(),
                isSubmitted : false
            }
        },
        methods : {
            createUserModel() {
                return {
                    fullName : '',
                    email: '',
                    password: '',
                    age: 37,
                    message: 'Default message',
                    mailPrefs: [],
                    gender: null,
                    priority: null
                }
            },
            resetForm() {
                this.isSubmitted = false
            },
            submitForm() {
                this.isSubmitted = true
            }
        },
        components : {
            appFullName : FullName
        }
    }
</script>

<style>

</style>
