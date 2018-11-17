<template>
  <transition name="fade-normal">
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <Alert :sentProperly="sentProperly" :alertMessage="alertMessage"></Alert>
        <header class="modal-card-head">
          <p class="modal-card-title">Edycja dzielnicy/wsi</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">
          <form class="form">
            <div class="field">
              <label class="label" for="name">Nazwa dzielnicy lub wsi</label>
              <div class="control">
                <input v-validate="'required'" data-vv-delay="250" class="input" name="nazwa" id="name" type="text" placeholder="Władysławowo centrum" v-model="settlement.name">
              </div>
              <transition name="fade-left">
                <div class="help is-danger" v-if="errors.has('nazwa')">{{errors.first('nazwa')}}</div>
              </transition>
            </div>
            <div class="field">
              <label class="label" for="description">Opis dzielnicy lub wsi</label>
              <div class="control">
                <textarea v-validate="'required'" data-vv-delay="250" name="opis" class="textarea" id="description" placeholder="Treść opisu osiedla" v-model="settlement.description"></textarea>
              </div>
              <transition name="fade-left">
                <div class="help is-danger" v-if="errors.has('opis')">{{errors.first('opis')}}</div>
              </transition>
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
                </label>
              </div>
            </div>
             <div v-if="image">
              <img class="attachment-image" :src="image"/>
            </div>
            <div v-else-if="settlement.imageUrl">
              <img class="attachment-image" :src="settlement.imageUrl"/>
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
export default {
  name: "UpdateSettlement",
  props: ['id'],
  data() {
    return {
      settlement: {
        name: "",
        description: "",
        img: ""
      },
      image: '',
      alertMessage: null,
      sentProperly: false,
      alertTimeoutId: null
    }
  },
  methods: {
    async handleSubmit()
    {
      this.$store.dispatch('updateSettlement',this.settlement);
      this.closeModal();
    },
    onFileSelected(event) {
      this.settlement.img = event.target.files[0];

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
    }
  },
  mounted()
  {
    var settlement = this.$store.getters.settlement(this.$route.params.id);
    this.settlement = settlement[0];
  }
}

</script>