<template>
    <div class="contact">
        <h1>Contacto</h1>
        <div class="contact-info">
            <p>Dirección: Calle Falsa 123, Ciudad, País</p>
            <p>Teléfono: +123 456 7890</p>
            <p>Email: info@paradisohotel.com</p>
            <p>Horario de Atención: 24/7</p>
        </div>
        <form class="contact-form">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name">

            <label for="email">Email:</label>
            <input type="email" id="email" name="email">

            <label for="message">Mensaje:</label>
            <textarea id="message" name="message"></textarea>

            <button type="submit">Enviar</button>
        </form>
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.292292292292!2d-99.1332086856737!3d19.432607786892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff6d16f7b8e5%3A0x8d6f4e8e7f1b8f1b!2sAngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2smx!4v1629780000000!5m2!1ses-419!2smx" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style scoped>
.contact {
    padding: 2rem;
    background-color: #f8f9fa;
    text-align: center;
}

.contact h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
}

.contact-info {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

.contact-form {
    margin-bottom: 2rem;
}

.contact-form label {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.contact-form button {
    padding: 0.75rem 1.5rem;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.contact-form button:hover {
    background-color: #717b86;
    border: 1px solid black;
    box-shadow: #717b86 0px 0px 10px 0px;;
}

.map {
    margin-top: 2rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: white;
}
</style>