import Vue from 'vue'
import Router from 'vue-router'
import Button from '../components/button.vue'
import Hi from '../components/Hi.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/button',
            name: 'button',
            component: Button
        },
        {
            path: '/Hi',
            name: 'Hi',
            component: Hi
        }
    ]
})

export default router