<template>
  <transition name="fade-normal">
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <transition name="fade">
          <div v-show="alertMessage" :class="[ sentProperly ? 'is-success' : 'is-danger' ]" class="notification">
            <button @click="dismissAlert" class="delete"></button>
            {{ alertMessage }}
          </div>
        </transition>
        <header class="modal-card-head">
          <p class="modal-card-title">{{ modalTitle }}</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">
          <form class="form">
            <div class="field">
              <label class="label" for="name">Nazwisko lub imię</label>
              <div class="control">
                <input class="input" id="name" type="text" placeholder="Jan Kowalski" v-model="player.name">
              </div>
            </div>
            <div class="field">
              <label class="label" for="settlement">Dzielnica lub wieś</label>
              <div class="control">
                <select class="select" style="width: 100%;" id="settlement" placeholder="Osiedle/Dzielnica" v-model="player.settlement">
                  <option v-for="settlement in settlements" :key="settlement.id">{{settlement.name}}</option>
                </select>
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
          <button class="button" @click="closeModal">Anuluj</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>

import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: "AddPlayer",
  props: ['update', 'id'],
  data() {
    return {
      player: {
        name: "",
        settlement: "",
        settlementId: '',
        img: "",
        extension: ""
      },
      imgName: null,
      modalTitle: null,
      alertMessage: null,
      sentProperly: false,
      alertTimeoutId: null
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
      clearTimeout(this.alertTimeoutId)

      if (this.player.name && this.player.settlement) {
        this.player.settlementId = this.settlementId(this.player.settlement);
        this.$store.dispatch('addPlayer', this.player);
        for (let key in this.player) {
          this.player[key] = '';
        }
        this.sentProperly = true;
        this.alertMessage = "Pomyślnie dodano nowego gracza"
      } else {
        this.sentProperly = false;
        this.alertMessage = "Wypełnij pola";
      }

      this.alertTimeoutId = setTimeout(() => {
        this.alertMessage = undefined;          
      }, 3000);
    },
    updatePlayer()
    {
        this.player.settlementId = this.settlementId(this.player.settlement);
        this.$store.dispatch('updatePlayer',this.player);
        this.closeModal();
    },
    handleSubmit()
    {
      if(this.update === true)
        this.updatePlayer();
      else
        this.addPlayer();
    },
    onFileSelected(event) {
      this.imgName = event.target.files[0].name;
      this.player.img = event.target.files[0];
    },
    closeModal() {
      this.$store.dispatch('closeModal');
    },
    dismissAlert()
    {
      this.alertMessage = null;
    },
    settlementId(settlementName)
    {
      for(let i = 0;i < this.settlements.length;i++)
      {
        if(this.settlements[i].name == settlementName)
        {
          return this.settlements[i].id;
        }
      }
    }
  },
  computed: {
    settlements() {
      return this.$store.getters.settlements;
    }
  },
  mounted()
  {
    if(this.update === true)
    {
      this.modalTitle = "Edytuj zawodnika";
      var player = this.$store.getters.player(this.$route.params.id);
      this.player = player[0];
      this.imgName = this.player.id;
    }
    else
    {
      this.modalTitle = "Dodaj zawodnika";
      this.player = {};
    }
  }
}

</script>

<style scoped>

</style>