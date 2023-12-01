import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';  // Corregir la importación
import App from './App.vue';
import deportes from './components/DeportesPage.vue'
import HelloWorldVue from './components/HelloWorld.vue'
import nike from './components/NikePage.vue'

// Componentes

// Definir rutas -- configuración
const routes = [
  {
    path: '/deportes',
    component: deportes,
  },
  {
    path: '/home',
    component: HelloWorldVue,
  },
  {
    path: '/nike',
    component: nike,
  }
];

// Crear objeto rutas de vue router -- objeto vue router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Instancia de vue
const app = createApp(App);

app.use(router);

app.mount('#app');
