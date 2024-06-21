<template>
    <div class="services">
        <h1>Servicios</h1>
        <ul>
            <li>Servicio de habitación</li>
            <li>Wi-Fi gratuito</li>
            <li>Transporte al aeropuerto</li>
            <li>Centro de negocios</li>
            <li>Gimnasio</li>
            <li>Restaurantes gourmet</li>
            <li>Piscinas</li>
            <li>Spas</li>
            <li>Bar y lounge</li>
            <li>Servicios de lavandería</li>
            <li>Guardería infantil</li>
            <li>Conserjería 24/7</li>
            <li>Actividades recreativas</li>
            <li>Servicio de despertador</li>
            <li>Alquiler de bicicletas</li>
            <li>Parking gratuito</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Servicios',
};
</script>

<style scoped>
.services {
    padding: 2rem;
    background-color: #f8f9fa;
}

.services h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #343a40;
}

.services ul {
    list-style: none;
    padding: 0;
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
}

.services li {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    border-bottom: 1px solid #dee2e6;
    color: #495057;
}

.services li:last-child {
    border-bottom: none;
}

.services li::before {
    content: "✔️";
    margin-right: 0.5rem;
    color: #28a745;
}
</style>