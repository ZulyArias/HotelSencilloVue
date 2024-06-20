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
                  alt="Hotel Logo" style="cursor: pointer; width: 100%; height: 100%;" />
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
        <q-toolbar style="display: flex; justify-content: center; align-items: center;">
          <div class="footer-content">
            <p>&copy; {{ new Date().getFullYear() }} Paradiso Hotel. Todos los derechos reservados.</p>
            <div class="social-icons">
              <a href="https://web.whatsapp.com/" class="social-icon whatsapp" title="WhatsApp">
                <q-icon name="chat_bubble" class="q-icon" />
              </a>
              <a href="https://www.facebook.com/" class="social-icon facebook" title="Facebook">
                <q-icon name="public" class="q-icon" />
              </a>
              <a href="https://www.instagram.com/" class="social-icon instagram" title="Instagram">
                <q-icon name="camera_alt" class="q-icon" />
              </a>
            </div>
          </div>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { QIcon } from 'quasar'

</script>

<style scoped>
* {
  font-family: 'Roboto Slab', serif;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.footer-content p {
  margin: 0;
}

.social-icons {
  display: flex;
  align-items: center;
}

.social-icon {
  display: inline-block;
  margin-left: 10px;
  font-size: 1.5rem;
  color: #fff;
  position: relative;
  text-decoration: none;
}

.social-icon i {
  position: relative;
  z-index: 1;
}

@keyframes beat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.social-icon .q-icon { transition: transform 0.3s; }
.social-icon:hover .q-icon { transform: scale(1.2); }

.social-icon.whatsapp .q-icon { animation: beat 1.5s ; }
.social-icon.facebook .q-icon { animation: beat 1.5s ; }
.social-icon.instagram .q-icon { animation: beat 1.5s ; }
</style>
