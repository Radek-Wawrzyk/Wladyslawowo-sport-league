<template>
  <transition name="fade-normal">
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Dodaj wydarzenie</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">
          <form class="form">
            <div class="field">
              <label class="label" for="name">Nazwa wydarzenia</label>
              <div class="control">
                <input v-model="event.name" class="input" id="name" type="text" placeholder="Mistrzostwa Piłki Nożnej 2018">
              </div>
            </div>
            <div class="field">
              <label class="label" for="name">Data wydarzenia</label>
              <div class="control">
                <input v-model="event.date" class="input" id="name" type="date">
              </div>
            </div>
            <div class="field">
              <label class="label" for="description">Opis wydarzenia</label>
              <div class="control">
                <textarea class="textarea" v-model="event.description" id="description" placeholder="Treść opisu wydarzenia"></textarea>
              </div>
            </div>
            <div class="field">
              <div class="file has-name">
                <label class="file-label">
                  <input class="file-input" type="file" name="file" @change="onFileSelected" accept="image/*">
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fa fa-cloud-upload-alt"></i>
                    </span>
                    <span class="file-label">
                      Dodaj zdjęcia
                    </span>
                  </span>
                  <span class="file-name">
                    {{event.img.name}}
                  </span>
                </label>
              </div>
            </div>
          </form>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-danger" @click="addEvent">Zapisz</button>
          <button class="button" @click="closeModal">Cancel</button>
        </footer>
      </div>
    </div>
  </transition>
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