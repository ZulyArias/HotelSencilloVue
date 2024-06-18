<template>
    <div>
        <h1>Contacto</h1>
        <p>¡Hola! Soy un componente de Vue 3.</p>
        <div>
            <img src="" alt="Vue logo" />
        </div>
        <div>
            <button @click="message = '¡Hola, Vue 3!!!'">Saludar</button>
        </div>
        <div>
            <p>{{ message }}</p>
        </div>
        <div>
            <ul>
                <li>Vue 3</li>
                <li>Vue Router 4</li>
                <li>Quasar 2</li>
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