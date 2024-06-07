<!-- Realizar una página responsiva para un hotel (móviles y para pc), que sea atractiva y llamativa para el usuario que contenga las siguientes paginas
Página de Bienvenida:

Diseña una página de inicio acogedora que muestre imágenes atractivas del hotel y una breve introducción.
Incluye información sobre servicios destacados, como piscinas, restaurantes, spas, etc.
Agrega un llamado a la acción (CTA) para que los visitantes puedan explorar más sobre el hotel o realizar una reserva directamente desde esta página.
Página de Habitaciones:

Crea una galería de imágenes de las diferentes habitaciones que ofrece el hotel (habitaciones estándar, suites, etc.).
Proporciona descripciones detalladas de cada tipo de habitación, incluyendo características, comodidades y precios.
Agrega un formulario de reserva o enlace a la plataforma de reserva del hotel para que los visitantes puedan reservar una habitación fácilmente.
Página de Contacto:

Incluye información de contacto del hotel, como dirección física, números de teléfono, dirección de correo electrónico y horarios de atención.
Agrega un formulario de contacto para que los visitantes puedan enviar consultas o solicitudes directamente desde el sitio web.
Integra un mapa interactivo que muestre la ubicación del hotel para facilitar la navegación a los clientes.
Página de Deportes Extremos:

Crea una página dedicada a las actividades de deportes extremos que ofrece el hotel o que están disponibles en la zona.
Incluye descripciones detalladas de cada actividad, niveles de dificultad, requisitos y precios si corresponde.
Agrega imágenes o videos que muestren las actividades en acción para atraer a los entusiastas de los deportes extremos.
Página de Servicios:
En esta sección ponemos todos los servicios que nos ofrece el hotel  -->

<template>
  <div>
    <div>
      <h1>Hotel</h1>
      <p>Bienvenido al Hotel</p>
      <p>Disfruta de nuestras instalaciones y servicios de lujo</p>
      <button>Reservar Ahora</button>
    </div>

    <div>
      <h2>Habitaciones</h2>
      <div>
        <img src="habitacion1.jpg" alt="Habitación Estándar">
        <p>Habitación Estándar</p>
        <p>Descripción de la habitación estándar</p>
        <p>Precio: $100 por noche</p>
        <button>Reservar Ahora</button>
      </div>
      <div>
        <img src="habitacion2.jpg" alt="Suite">
        <p>Suite</p>
        <p>Descripción de la suite</p>
        <p>Precio: $200 por noche</p>
        <button>Reservar Ahora</button>
      </div>

      <div>
        <img src="habitacion3.jpg" alt="Habitación Familiar">
        <p>Habitación Familiar</p>
        <p>Descripción de la habitación familiar</p>
        <p>Precio: $150 por noche</p>
        <button>Reservar Ahora</button>

      </div>

    </div>

    <div>
      <h2>Contacto</h2>
      <p>Dirección: Calle Principal #123</p>
      <p>Teléfono: 123-456-7890</p>
      <p>Correo Electrónico: 
        <a href="mailto:" target="_blank"></a>
      </p>
    </div>

    <div>
      <h2>Deportes Extremos</h2>
      <div>
        <img src="deporte1.jpg" alt="Actividad 1">
        <p>Actividad 1</p>
        <p>Descripción de la actividad 1</p>
        <p>Nivel de Dificultad: Intermedio</p>
        <p>Precio: $50 por persona</p>
        <button>Reservar Ahora</button>
      </div>
      <div>
        <img src="deporte2.jpg" alt="Actividad 2">
        <p>Actividad 2</p>
        <p>Descripción de la actividad 2</p>
        <p>Nivel de Dificultad: Avanzado</p>
        <p>Precio: $75 por persona</p>
        <button>Reservar Ahora</button>
      </div>

      <div>
        <img src="deporte3.jpg" alt="Actividad 3">
        <p>Actividad 3</p>
        <p>Descripción de la actividad 3</p>
        <p>Nivel de Dificultad: Principiante</p>
        <p>Precio: $30 por persona</p>
        <button>Reservar Ahora</button>
      </div>
    </div>

    <div>
      <h2>Servicios</h2>
      <ul>
        <li>Piscina</li>
        <li>Restaurante</li>
        <li>Spa</li>
        <li>Gimnasio</li>
        <li>Wi-Fi</li>
        <li>Servicio de Habitaciones</li>
      </ul>
    </div>
  </div>
</template>



<script setup>
import { ref } from 'vue'

const message = ref('Hello, Vue 3!')

setTimeout(() => {
  message.value = 'Hello, Vue 3!!!'
}, 2000)


</script>



<style scoped>
h1 {
  color: #333;
  font-size: 2rem;
}

p {
  color: #666;
  font-size: 1rem;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

img {
  width: 100%;
  height: auto;
}

div {
  margin: 1rem 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0.5rem 0;
}

</style>