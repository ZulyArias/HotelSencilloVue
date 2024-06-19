import Habitaciones from '../components/Habitaciones.vue';
import Contacto from '../components/Contacto.vue';
import Deportes from '../components/Deportes.vue';
import Servicios from '../components/Servicios.vue';
import Bienvenida from '../components/Bienvenida.vue';

import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
    { path: '/', component: Bienvenida },
    { path: '/Habitaciones', component: Habitaciones },
    { path: '/Contacto', component: Contacto },
    { path: '/Deportes', component: Deportes },
    { path: '/Servicios', component: Servicios }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});