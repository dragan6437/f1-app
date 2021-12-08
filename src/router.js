import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Add from './pages/Add.vue';
import Drivers from './pages/Drivers.vue';
import Edit from './pages/Edit.vue';
import Teams from './pages/Teams.vue';
import Register from './pages/Register.vue';
import Login from './pages/Login.vue';
import NotFound from './pages/NotFound.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/drivers', component: Drivers },
    { path: '/drivers/add', component: Add },
    { path: '/drivers/edit/:id', component: Edit },
    { path: '/teams', component: Teams },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/:pathMatch(.*)*', component: NotFound }
  ]
});