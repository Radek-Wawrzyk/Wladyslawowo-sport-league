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
              <label class="label" for="name">Nazwa wydarzenia</label>
              <div class="control">
                <input v-model="news.name" class="input" id="name" type="text" placeholder="Mistrzostwa Piłki Nożnej 2018">
              </div>
            </div>
            <div class="field">
              <label class="label" for="name">Data wydarzenia</label>
              <div class="control">
                <input v-model="news.date" class="input" id="name" type="date">
              </div>
            </div>
            <div class="field">
              <label class="label" for="description">Opis wydarzenia</label>
              <div class="control">
                <textarea class="textarea" v-model="news.description" id="description" placeholder="Treść opisu wydarzenia"></textarea>
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
                  <span class="file-name">
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
  name: "AddNews",
  props: ['update', 'id'],
  data() {
    return {
      news: {
        name: "",
        description: "",
        date: null,
        img: ""
      },
      imgName: null,
      modalTitle: null,
      alertMessage: null,
      sentProperly: false,
      alertTimeoutId: null
    }
  },
  methods: {
    addNews() {
        clearTimeout(this.alertTimeoutId);

        if(this.news.name && this.news.name && this.news.date)
        {
          this.$store.dispatch('addNews', this.news);
          for (let key in this.news) {
            this.news[key] = '';
          }

          this.sentProperly = true;
          this.alertMessage = "Pomyślnie dodano nowe wydarzenie";
        }
        else
        {
          this.sentProperly = false;
          this.alertMessage = "Wypełnij pola";
        }

        
      this.alertTimeoutId = setTimeout(() => {
        this.alertMessage = undefined;          
      }, 3000);

    },
    updateNews() {
      this.$store.dispatch('updateNews', this.news);
      this.closeModal();
    },
    handleSubmit()
    {
      if(this.update === true)
      {
        this.updateNews();
      }
      else
        this.addNews();
    },
    onFileSelected(event) {
      this.imgName = event.target.files[0].name;
      this.news.img = event.target.files[0];
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
    if(this.update === true)
    {
      this.modalTitle = "Edytuj zawodnika";
      var news = this.$store.getters.singleNews(this.$route.params.id);
      this.news = news[0];
      this.imgName = this.news.id;
    }
    else
    {
      this.modalTitle = "Dodaj zawodnika";
      this.news = {};
    }
  }
}

</script>

<style scoped>

</style>