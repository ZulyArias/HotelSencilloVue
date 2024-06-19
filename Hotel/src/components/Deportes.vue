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

<script>
export default {
    name: 'DeportesExtremos',
    data() {
        return {
            sports: [
                { id: 1, name: 'Parapente', description: 'Vuela alto y siente la adrenalina.', difficulty: 'Medio', price: '$150', image: '/images/deportes/parapente.jpg' },
                { id: 2, name: 'Rafting', description: 'Aventúrate en rápidos emocionantes.', difficulty: 'Alto', price: '$120', image: '/images/deportes/rafting.jpg' },
                // Agrega más deportes según sea necesario
            ]
        };
    }
};
</script>

<style scoped>
.extreme-sports {
    padding: 2rem;
    background-color: #f8f9fa;
}

.extreme-sports h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
}

.sports-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
}

.sport-card {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 1rem;
    background-color: white;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.sport-card img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 1rem;
}

.sport-card h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.sport-card p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
}
</style>