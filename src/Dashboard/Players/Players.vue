<template>
  <div>
    <header class="columns">
      <div class="column">
        <h1 class="title is-3">Zawodnicy</h1>
      </div>
      <div class="column has-text-right">
        <router-link class="button is-medium is-danger" to="/panel/players/add-player">Dodaj zawodnika</router-link>
      </div>
    </header>
    
    <section class="section">
      Lista zawodników
    </section>
    <router-view></router-view>
  </div>
  
</template>

<script>

export default {
  name: "Players"
}

</script>