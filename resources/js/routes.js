import Login from "@/Components/auth/Login.vue";
import Register from "@/Components/auth/Register.vue";
import Forget from "@/Components/auth/Forget.vue";
import Home from "@/Components/auth/Home.vue";
import logout from "@/Components/auth/logout.vue";
import Create from "@/Components/Employee/Create.vue";
import allEmpl from "@/Components/Employee/allEmpl.vue";


 export const routes = [{
    path: '/',
    name: 'Login',
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
     {    path: '/logout',
         component: logout,
         name:'logout'
     },

     {   path: '/addemployee',
         component: Create,
         name:'addemployee'
     },

     {   path: '/employee',
         component: allEmpl,
         name:'employee'
     },
]
