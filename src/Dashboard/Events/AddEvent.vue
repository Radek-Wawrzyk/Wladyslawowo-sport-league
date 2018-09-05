<template>
  <h1>Imprezki!</h1>
</template>

<script>

import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: "AddEvent",
  data() {
    return {
      event: {
        name: "",
        description: "",
        img: ""
      },
      imgName: null
    }
  },
  methods: {
    addEvent() {
        this.$store.dispatch('addEvent', this.event);
        for (let key in this.event) {
          this.event[key] = '';
        }
    },
    onFileSelected(event) {
      //this.imgNames.push(event.target.files[0].name);
      //this.event.imgs.push(event.target.files[0]);
      this.imgName = event.target.files[0].name;
      this.event.img = event.target.files[0];
    },
    closeModal() {
      this.$store.dispatch('closeModal');
    }
  }
}

</script>

<style scoped>

</style>