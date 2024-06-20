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
    { id: 1, type: 'Habitación Estándar', description: 'Una habitación cómoda para dos personas.', price: '$100 por noche', image: '/images/habitaciones/estandar.jpg' },
    { id: 2, type: 'Suite', description: 'Una lujosa suite con vista al mar.', price: '$200 por noche', image: '/images/habitaciones/suite.jpg' },
    // Agrega más habitaciones según sea necesario
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
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 1rem;
    background-color: white;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.room-card img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 1rem;
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