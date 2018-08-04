<template>
  <div id="app">
    <h1 class="title is-1 has-text-centered">Liga gminy Władysławowo</h1>
    <router-view/>
    <section class="section">
      <div id="test" class="container">
        <input class="input" v-model="name">
        <button class="button is-warning" @click="test" >Add to firebase</button>
        <ul class="list">
          <li v-for="(item) in tests" :key="item.index">{{item.test}}</li>
        </ul>
      </div>
    </section>
    
  </div>
</template>

<script>

import { namesRef } from "./firebase/";

export default {
  name: "App",
  data() {
    return {
      name: ""
    }
  },
  firebase: {
    tests: namesRef
  },
  methods: {
    test() {
      namesRef.push({test: this.name});
    }
  }
}	

</script>

<style lang="scss" src="./styles/bulma.sass"/>