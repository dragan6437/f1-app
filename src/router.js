import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Add from './pages/Add.vue';
import Drivers from './pages/Drivers.vue';
import Edit from './pages/Edit.vue';
import Teams from './pages/Teams.vue';
import NotFound from './pages/NotFound.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/drivers', component: Drivers },
        { path: '/drivers/add', component: Add },
        { path: '/drivers/edit/:id', component: Edit },
        { path: '/teams', component: Teams },
        { path: '/:pathMatch(.*)*', component: NotFound }
    ]
});