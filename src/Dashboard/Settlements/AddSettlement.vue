<template>
  <transition name="fade-normal">
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Dodaj osiedle</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <form class="form">
            <div class="field">
              <label class="label" for="name">Nazwa osiedla</label>
              <div class="control">
                <input class="input" id="name" type="text" placeholder="Władysławowo centrum" v-model.trim="$v.settlement.name.$model">
              </div>
              <p class="help is-danger" v-if="!$v.settlement.name.minLength">Nazwa jest za krótka </p>
            </div>
            <div class="field">
              <label class="label" for="description">Opis osiedla</label>
              <div class="control">
                <textarea class="textarea" id="description" placeholder="Treść opisu osiedla" v-model="$v.settlement.description.$model"></textarea>
              </div>
              <p class="help is-danger" v-if="!$v.settlement.description.minLength">Opis jest za krótki</p>
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
                      Dodaj zdjęcie
                    </span>
                  </span>
                  <span class="file-name" v-if="imgName">
                    {{imgName}}
                  </span>
                </label>
              </div>
            </div>
          </form>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-danger" @click="addSettlement">Zapisz</button>
          <button class="button">Cancel</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>

import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: "AddSettlement",
  data() {
    return {
      settlement: {
        name: "",
        description: "",
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
    addSettlement() {
      if (!this.$v.$invalid) {
        this.$store.dispatch('addSettlement', this.settlement);
      } else {
        console.log("Wypełnij pola!");
      }
    },
    onFileSelected(event) {
      this.imgName = event.target.files[0].name;
      this.settlement.img = event.target.files[0];
    }
  }
}

</script>

<style scoped>

</style>