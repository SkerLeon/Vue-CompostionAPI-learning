import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: ()=> import ('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: ()=> import ('../views/About.vue')
    },
    {
        path: '/contact/',
        name: 'Contact',
        component: ()=> import ('../views/Contact.vue')
    },
    {
        path: '/example',
        name: 'Example',
        component: ()=> import ('../views/Example.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Notfound',
        component: ()=> import("../views/Notfound.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});



export default router;
