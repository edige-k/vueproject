<template>
    <div>    <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card shadow-sm my-5">
                <div class="card-body p-0">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="login-form">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Register</h1>
                                </div>
                                <form class="user" @submit.prevent="register">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="exampleInputFirstName" placeholder="Enter First Name" v-model="form.name"   >
                                    </div>

                                    <div class="form-group">
                                        <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                                               placeholder="Enter Email Address" v-model="form.email">

                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" id="exampleInputPassword" placeholder="Password" v-model="form.password">

                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" id="exampleInputPasswordRepeat"
                                               placeholder="Repeat Password" v-model="form.password_confirmation">

                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="submitl2 btn btn-primary btn-block">Register </button>

                                    </div>
                                </form>
                                <hr>
                                <div class="text-center">
                                    <router-link to="/" class="font-weight-bold small">Already have an account?</router-link>
                                </div>
                                <div class="text-center">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>


<script>
import axios from "axios";
import Home from "@/Components/auth/Home.vue";

export default {
    name: "Register",
    created() {
        if(User.loggedIn()){
            this.$router.push({ name: 'Home'})
        }
    },
    data(){
        return{
            form:{
                name:null,
                email:null,
                password:null,
                confirm_password:null
            },
            errors:{}
        }
    },
    methods:{
        register(){
            axios.post('/api/auth/register',this.form)
                .then(res => {
                    User.responseAfterLogin(res)
                    Toast.fire({
                        icon: 'success',
                        title: 'Signed in successfully'
                    })
                    this.$router.push({ name: 'Home'})
                })
                .catch(error =>this.errors = error.response.data.errors)

        }

    }
}
</script>

<style scoped>
.submitl2{
    background-color: cornflowerblue;
}
</style>
