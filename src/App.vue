<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="sidebar">
      <h1>Categorías</h1>
      <hr>
      <ul>
        <h2>marcas</h2>
        <router-link to="/nike">
          <button class="nike">Nike</button>
        </router-link>

        <router-link to="/home">
          <button class="nike">home</button>
        </router-link>

        <router-link to="/deportes">
          <button class="nike">deportes</button>
        </router-link>
        <hr>
        <br>
        <h2>tipos</h2>
        <button class="nike">mini</button>
        <button class="nike">mediana</button>
        <button class="nike">grande</button>
        <hr>
        <br>
      </ul>
    </div>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          id: 1,
          name: 'Electrónicos',
          subCategories: [
            { id: 11, name: 'Teléfonos' },
            { id: 12, name: 'Computadoras' },
          ],
        },
        {
          id: 2,
          name: 'Ropa',
          subCategories: [
            { id: 21, name: 'Camisetas' },
            { id: 22, name: 'Pantalones' },
          ],
        },
        // Agrega más categorías según tus necesidades
      ],
      selectedCategories: [],
    };
  },
  methods: {
    filterProducts() {
      // Implementa la lógica para filtrar los productos según las categorías seleccionadas
      // Puedes emitir un evento aquí para notificar al componente principal sobre los cambios
      this.$emit('filter', this.selectedCategories);
    },

  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.sidebar {
  height: 200vh;
  width: 200px;
  padding: 12px;
  background-color: #c7c3c3;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 8px;
}

button {
  display: block;
  width: 100%;
  text-align: left;
  margin-bottom: 8px;
  border-radius: 6px;
}

input {
  margin-right: 5px;
}
</style>
