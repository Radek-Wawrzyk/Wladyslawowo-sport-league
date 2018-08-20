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
      <table class="table is-bordered is-fullwidth">
        <thead class="panel-head">
          <tr>
            <th>Imię i nazwisko</th>
            <th>Osiedle</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in players" :key="player.name">
            <th>{{player.name}}</th>
            <th>{{player.settlement}}</th>
          </tr>
        </tbody>
      </table>
    </section>
    <router-view></router-view>
  </div>
  
</template>

<script>

import { players } from "@/Firebase/index.js"

export default {
  name: "Players",
  firebase: {
    players: players
  }
}

</script>