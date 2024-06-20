<template>
    <div class="extreme-sports">
        <h1>Deportes Extremos</h1>
        <div class="sports-list">
            <div class="sport-card" v-for="sport in sports" :key="sport.id">
                <img :src="sport.image" :alt="sport.name">
                <h2>{{ sport.name }}</h2>
                <p>{{ sport.description }}</p>
                <p><strong>Nivel de dificultad: {{ sport.difficulty }}</strong></p>
                <p><strong>Precio: {{ sport.price }}</strong></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const sports = ref([
    { id: 1, name: 'Parapente', description: 'Vuela alto y siente la adrenalina.', difficulty: 'Medio', price: '$150', image: '/images/deportes/parapente.jpg' },
    { id: 2, name: 'Rafting', description: 'Aventúrate en rápidos emocionantes.', difficulty: 'Alto', price: '$120', image: '/images/deportes/rafting.jpg' },
    // Agrega más deportes según sea necesario
]);
</script>

<style scoped>
.extreme-sports {
    padding: 2rem;
    background-color: #f8f9fa;
    text-align: center;
}

.extreme-sports h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
}

.sports-list {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.sport-card {
    position: relative;
    overflow: hidden; 
    padding: 1rem;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

.sport-card:hover {
    transform: translateY(-10px);
}

.sport-card img {
    width: 100%;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
}

.sport-card:hover img {
    transform: scale(1.1);
}

.sport-card h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.sport-details {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 1rem;
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;
}

.sport-card:hover .sport-details {
    transform: translateY(0);
}

.sport-details p {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.sport-details strong {
    font-weight: bold;
}

</style>
