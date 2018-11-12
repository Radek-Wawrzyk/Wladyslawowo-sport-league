<template>
  <transition name="fade">
    <div v-show="alertMessage" :class="[ sentProperly ? 'is-success' : 'is-danger' ]" class="notification">
      <button @click="dismissAlert" class="delete"></button>
      <p>{{ alertMessage }}</p>
    </div>
  </transition>
</template>

<script>

  export default {
    name: "Alert",
    props: [
      "alertMessage",
      "sentProperly"
    ],
    methods: {
      dismissAlert() {
        this.alertMessage = null;
      }
    }
  }

</script>