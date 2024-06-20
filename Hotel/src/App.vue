<template>
  <div>
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="bg-dark text-white" height-hint="98">
        <q-toolbar style="display: flex; justify-content: center; align-items: center;">
          <q-toolbar-title style="display: flex; justify-content: center; width: 100%;">
            <q-avatar rounded size="100px">
              <router-link to="/">
                <img
                src="https://img.freepik.com/vector-premium/plantilla-diseno-vector-logotipo-icono-hotel_827767-3569.jpg"
                alt="Hotel Logo"
                style="cursor: pointer; width: 100%; height: 100%;"
                />
              </router-link>
            </q-avatar>
          </q-toolbar-title>
        </q-toolbar>

        <q-tabs align="center">
          <q-route-tab to="/Habitaciones" label="Habitaciones" />
          <q-route-tab to="/Contacto" label="Contacto" />
          <q-route-tab to="/Deportes" label="Deportes" />
          <q-route-tab to="/Servicios" label="Servicios" />
        </q-tabs>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>

      <q-footer elevated class="bg-dark text-white">
        <q-toolbar>
          <div class="footer-content">
        <p>&copy; {{ new Date().getFullYear() }} Paradiso Hotel. Todos los derechos reservados.</p>
      </div>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>


</template>



<script setup>
import { ref } from 'vue'


</script>



<style scoped>
*{
  font-family: 'Roboto Slab', serif;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.footer-content p {
  margin: 0;
}
</style>