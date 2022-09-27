import Login from "@/Components/auth/Login.vue";
import Register from "@/Components/auth/Register.vue";
import Forget from "@/Components/auth/Forget.vue";
import Home from "@/Components/auth/Home.vue";


 export const routes = [{
    path: '/',
    name: 'login',
    component: Login,
},
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
     {
     path: '/forget',
    name: 'Forget',
    component: Forget,
},
     {
         path: '/home',
         name: 'Home',
         component: Home,
     },
]
