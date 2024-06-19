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
            <!-- Aquí puedes insertar un mapa interactivo -->
            <p>Mapa interactivo: Agrega la imagen aquí</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contacto',
};
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
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.contact-form button:hover {
    background-color: #0056b3;
}

.map {
    margin-top: 2rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: white;
}
</style>