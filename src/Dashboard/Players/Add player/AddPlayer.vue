<template>
  <transition name="fade-normal">
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Dodaj zawodnika</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">
          <form class="form">
            <div class="field">
              <div class="file has-name">
                <label class="file-label">
                  <input class="file-input" type="file" name="file" @change="onFileSelected" accept="image/*">
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fa fa-cloud-upload-alt"></i>
                    </span>
                    <span class="file-label">
                      Dodaj zdjęcie
                    </span>
                  </span>
                  <span class="file-name" v-if="imgName">
                    {{imgName}}
                  </span>
                </label>
              </div>
            </div>
            <div class="field">
              <label class="label" for="name">Imię i Nazwisko</label>
              <div class="control">
                <input class="input" id="name" type="text" placeholder="Jan Kowalski" v-model="player.name">
              </div>
            </div>
            <div class="field">
              <label class="label" for="settlement">Osiedle/Dzielnica</label>
              <div class="control">
                <select class="select" style="width: 100%;" id="settlement" placeholder="Osiedle/Dzielnica" v-model="player.settlement">
                  <option v-for="settlement in settlements" :key="settlement.id">{{settlement.name}}</option>
                </select>
              </div>
            </div>
          </form>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-danger" @click="addPlayer">Zapisz</button>
          <button class="button" @click="closeModal">Cancel</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>

import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: "AddPlayer",
  data() {
    return {
      player: {
        name: "",
        settlement: "",
        img: ""
      },
      imgName: null
    }
  },
  validations: {
    settlement: {
      name: {
        required,
        minLength: minLength(3)
      },
      description: {
        required,
        minLength: minLength(3)
      },
    }
  },
  methods: {
    addPlayer() {
        this.$store.dispatch('addPlayer', this.player);
        for (let key in this.player) {
          this.player[key] = '';
        }
    },
    onFileSelected(event) {
      this.imgName = event.target.files[0].name;
      this.player.img = event.target.files[0];
    },
    closeModal() {
      this.$store.dispatch('closeModal');
    }
  },
  computed: {
    settlements() {
      return this.$store.getters.settlements;
    }
  }
}

</script>

<style scoped>

</style>