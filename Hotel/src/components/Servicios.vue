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
}

.services ul {
    list-style: none;
    padding: 0;
    text-align: center;
}

.services li {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}
</style>