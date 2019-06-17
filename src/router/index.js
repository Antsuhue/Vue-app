import Vue from 'vue'
import Router from 'vue-router'
import Logado from '../components/logado.vue'
import Login from '../components/login.vue'
import Cadastro from '../components/Cadastro.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
        path: '/logado',
        name: 'Logado',
        component: Logado
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/cadastro',
        name: 'Cadastro',
        component: Cadastro
    }
]
})