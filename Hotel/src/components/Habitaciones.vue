<template>
    <div class="rooms">
        <h1>Nuestras Habitaciones</h1>
        <div class="room-gallery">
            <div class="room-card" v-for="room in rooms" :key="room.id">
                <img :src="room.image" :alt="room.type">
                <h2>{{ room.type }}</h2>
                <p>{{ room.description }}</p>
                <p><strong>Precio: {{ room.price }}</strong></p>
                <router-link to="/contacto" class="book-button">Reservar</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const rooms = ref([
    { id: 1, type: 'Habitación Estándar', description: 'Una habitación cómoda para dos personas.', price: '$100 por noche', image: '/images/habitaciones/habitacion1.jpg' },
    { id: 2, type: 'Suite', description: 'Una lujosa suite con vista al mar.', price: '$200 por noche', image: '/images/habitaciones/habitacion2.jpg' },
    { id: 3, type: 'Habitación Doble', description: 'Habitación espaciosa con dos camas individuales.', price: '$120 por noche', image: '/images/habitaciones/habitacion3.jpg' },
    { id: 4, type: 'Habitación Familiar', description: 'Habitación ideal para familias, con capacidad para cuatro personas.', price: '$150 por noche', image: '/images/habitaciones/habitacion4.jpg' },
    { id: 5, type: 'Suite Presidencial', description: 'Una suite de lujo con todas las comodidades.', price: '$300 por noche', image: '/images/habitaciones/habitacion5.jpg' },
    { id: 6, type: 'Habitación Individual', description: 'Perfecta para viajeros solitarios, con una cama individual.', price: '$80 por noche', image: '/images/habitaciones/habitacion6.jpg' },
    { id: 7, type: 'Suite Junior', description: 'Una suite con sala de estar separada y dormitorio.', price: '$180 por noche', image: '/images/habitaciones/habitacion7.jpg' },
    { id: 8, type: 'Habitación Deluxe', description: 'Habitación elegante con cama king size y vista al jardín.', price: '$220 por noche', image: '/images/habitaciones/habitacion8.jpg' },
    { id: 9, type: 'Habitación Económica', description: 'Opción accesible para viajeros con presupuesto ajustado.', price: '$70 por noche', image: '/images/habitaciones/habitacion9.jpg' },
    { id: 10, type: 'Penthouse', description: 'Lujoso penthouse con vistas panorámicas y terraza privada.', price: '$500 por noche', image: '/images/habitaciones/habitacion10.jpg' },
]);

</script>

<style scoped>
.rooms {
    padding: 2rem;
    background-color: #f8f9fa;
}

.rooms h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
}

.room-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
}

.room-card {
    position: relative;
    overflow: hidden; 
    padding: 1rem;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

.room-card:hover {
    transform: translateY(-10px);
}

.room-card img {
    width: 100%;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
}

.room-card:hover img {
    transform: scale(1.1);
}

.room-card h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.room-card p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
}

.book-button {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: black;
    color: white;
    text-decoration: none;
    border-radius: 5px;
}

.book-button:hover {
    background-color: #717b86;
    border: 1px solid black;
    box-shadow: #717b86 0px 0px 10px 0px;
}
</style>