<template>
  <transition name="fade-normal">
    <div class="modal is-active">
      
      <div class="modal-background"></div>
      <div class="modal-card">
        <div v-if="alertMessage" :class="[ sentProperly ? 'is-success' : 'is-danger' ]" class="notification">
          <button class="delete"></button>
          {{ alertMessage }}
        </div>
        <header class="modal-card-head">
          <p class="modal-card-title">{{ modalTitle }}</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
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
          <button class="button is-danger" @click="handleSubmit">Zapisz</button>
          <button class="button" @click="closeModal">Cancel</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>

import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: "AddSettlement",
  props: ['update', 'id'],
  data() {
    return {
      settlement: {
        name: "",
        description: "",
        img: ""
      },
      imgName: null,
      modalTitle: null,
      alertMessage: null,
      sentProperly: false
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
      }
    }
  },
  methods: {
    addSettlement() {
      if (this.settlement.name && this.settlement.description) {
        this.$store.dispatch('addSettlement', this.settlement);
        for (let key in this.settlement) {
          this.settlement[key] = '';
        }
        this.sentProperly = true;
        this.alertMessage = "Pomyślnie dodano nowe osiedle"
      } else {
        this.sentProperly = false;
        this.alertMessage = "Wypełnij pola";
        this.$v.reset();
      }
    },
    updateSettlement()
    {
      this.$store.dispatch('updateSettlement',this.settlement);
      this.closeModal();
    },
    handleSubmit()
    {
      if(this.update === true)
        this.updateSettlement();
      else
        this.addSettlement();
    },
    onFileSelected(event) {
      this.imgName = event.target.files[0].name;
      this.settlement.img = event.target.files[0];
    },
    closeModal() {
      this.$store.dispatch('closeModal');
    }
  },
  mounted()
  {
    if(this.update === true)
    {
      this.modalTitle = "Edytuj osiedle";
      var settlement = this.$store.getters.settlement(this.$route.params.id);
      this.settlement = settlement[0];
      this.imgName = this.settlement.id;
    }
    else
    {
      this.modalTitle = "Dodaj osiedle";
      this.settlement = {};
    }
  }
  
}

</script>

<style scoped>

</style>