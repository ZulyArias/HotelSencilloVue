<template>
    <div class="home">
        <h1>Bienvenido a Paradiso Hotel</h1>
        <p>Descubre el lujo y la comodidad en cada rincón de nuestro hotel.</p>
        <div class="home-gallery">
            <img src="/images/home.jpg" alt="Imagen de bienvenida 1">
            <img src="/images/habitacion2.jpg" alt="Imagen de bienvenida 2">
        </div>
        <section class="highlight-services">
            <h2>Servicios Destacados</h2>
            <ul>
                <li class="home-gallery-services"><h3 class="TextoImgs">Piscinas</h3><img src="/images/piscina1.jpg" alt="Imagen de bienvenida 1"></li>
                <br><br>
                <li class="home-gallery-services"><h3 class="TextoImgs">Restaurantes</h3><img src="/images/restaurante.jpg" alt=""></li>
                <li class="home-gallery-services"><h3 class="TextoImgs">Spas</h3><img src="/images/spa.jpg" alt=""></li>
                <li class="home-gallery-services"><h3 class="TextoImgs">Gimnasio</h3><img src="/images/gym.jpg" alt=""></li>
            </ul>
            <router-link to="/servicios" class="cta-button">Explorar Servicios</router-link>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style scoped>
.home {
    text-align: center;
    padding: 2rem;
    background-color: #f8f9fa;
}

.home h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.home-gallery {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 5rem;
}

.home-gallery img {
    max-width: 45%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.home-gallery-services {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
    position: relative;
    overflow: hidden;
}

.TextoImgs {
    position: absolute;
    bottom: -100%; 
    left: 0;
    width: 100%;
    color: white;
    font-size: 2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    transition: bottom 0.5s, opacity 0.5s; 
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.5); 
    padding: 0.5rem 0; 
}

.home-gallery-services:hover .TextoImgs {
    bottom: 0;
    opacity: 1;
}

.home-gallery-services img {
    max-width: 90%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.highlight-services {
    text-align: center;
    margin: 2rem auto;
    max-width: 800px;
}

.highlight-services h2 {
    font-size: 2rem;
    margin-bottom: 5rem;
}

.highlight-services ul {
    list-style: none;
    padding: 0;
}

.highlight-services li {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    transition: 0.5s;
}

.highlight-services li:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #f8f9fa;
    padding: 1rem;
    transition: 0.5s;
}

.cta-button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: black;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 1rem;
    transition: background-color 0.3s;
}

.cta-button:hover {
    background-color: #717b86;
    border: 1px solid black;
    box-shadow: #717b86 0px 0px 10px 0px;
}
</style>