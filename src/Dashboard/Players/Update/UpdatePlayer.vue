<template>
  <transition name="fade-normal">
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <Alert :sentProperly="sentProperly" :alertMessage="alertMessage"></Alert>
        <header class="modal-card-head">
          <p class="modal-card-title">Edycja zawodnika</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">
          <form class="form">
            <div class="field">
              <label class="label" for="name">Nazwisko lub imię</label>
              <div class="control">
                <input v-validate="'required'" data-vv-delay="250" name="name" class="input" id="name" type="text" placeholder="Jan Kowalski" v-model="player.name">
              </div>
              <transition name="fade-left">
                  <p class="help is-danger" v-if="errors.has('name')">{{errors.first('name')}}</p>
              </transition>
            </div>
            <div class="field">
              <label class="label" for="settlement">Dzielnica lub wieś</label>
              <div class="control">
                <div class="select">
                  <select id="settlement" v-validate="'required'" data-vv-delay="250" name="settlement" placeholder="Osiedle/Dzielnica" v-model="settlement">
                    <option v-for="settlement in settlements" :key="settlement.id">{{settlement.name}}</option>
                  </select>
                </div>
                <transition name="fade-left">
                  <div class="help is-danger" v-if="errors.has('settlement')">{{errors.first('settlement')}}</div>
                </transition>
              </div>
            </div>
            <div class="field">
              <div class="file has-name">
                <label class="file-label">
                  <input class="file-input" type="file" @change="onFileSelected" accept="image/*">
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fa fa-cloud-upload-alt"></i>
                    </span>
                    <span class="file-label">
                      Zmień zdjęcie
                    </span>
                  </span>
                  <br>
                </label>
              </div>
            </div>
            <div v-if="image">
              <img class="attachment-image" :src="image"/>
            </div>
            <div v-else-if="player.imageUrl">
              <img class="attachment-image" :src="player.imageUrl"/>
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
  name: "UpdatePlayer",
  props: ['id'],
  data() {
    return {
      player: {
        name: "",
        settlement: "",
        settlementId: '',
        img: "",
        extension: ""
      },
      image: '',
      settlement: "",
      imgName: null,
      alertMessage: null,
      sentProperly: false,
      alertTimeoutId: null
    }
  },
  methods: {
    async handleSubmit()
    {
        const valid = await this.$validator.validateAll();

        if(valid)
        {
          this.player.settlement = this.settlement;
          this.player.settlementId = this.settlementId(this.player.settlement);
          this.$store.dispatch('updatePlayer',this.player);
          this.closeModal();
        }
    },
    onFileSelected(event) {
      this.imgName = event.target.files[0].name;
      this.player.img = event.target.files[0];

      var files = event.target.files || event.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
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
    var player = this.$store.getters.player(this.$route.params.id);
    this.player = player[0];
    this.imgName = this.player.id;
    this.settlement = this.player.settlement;
  }
}

</script>