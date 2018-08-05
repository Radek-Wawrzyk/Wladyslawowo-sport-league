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
          <transition name="fade-normal">
            <div class="notification is-danger" v-if="notification.error">
              <button class="delete" @click="closeError"></button>
              Niestety wystąpił błąd podczas dodawania zawodnika - Sprawdź czy wszystkie pola są wypełnione.
            </div>
          </transition>
          <transition name="fade-normal">
            <div class="notification is-success" v-if="notification.success">
              <button class="delete" @click="closeSucess"></button>
              Prawidłowo dodano użytkownika do bazy!
            </div>
          </transition>
          <form class="form">
            <div class="field">
              <label class="label" for="name">Imię i nazwisko</label>
              <div class="control">
                <input class="input" id="name" type="text" placeholder="Imię i nazwisko" v-model="player.fullName">
              </div>
            </div>
            <div class="field">
              <label class="label" for="name">Dzielnica</label>
              <div class="control">
                <span class="select">
                  <select v-model="player.settlement">
                    <option selected v-for="settlement in settlements" :value="settlement.name" :key="settlement.key">
                      {{ settlement.name}}
                    </option>
                  </select>
                </span>
              </div>
            </div>
            <div class="field">
              <div class="file has-name">
                <label class="file-label">
                  <input class="file-input" type="file" name="resume" @change="onFileSelected">
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fa fa-cloud-upload-alt"></i>
                    </span>
                    <span class="file-label">
                      Wybierz zdjęcie
                    </span>
                  </span>
                  <span class="file-name" v-if="player.img.length >=1">
                    {{player.img}}
                  </span>
                </label>
              </div>
            </div>
          </form>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-danger" @click="addPlayer">Dodaj zawodnika</button>
          <button class="button" @click="closeModal">Anuluj</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>

import { settlements, players } from "@/Firebase/index.js"

export default {
  name: "AddPlayer",
  data() {
    return {
      modal: true,
      player: {
        fullName: "",
        settlement: "Karwia",
        img: ""
      },
      notification: {
        success: false,
        error: false
      }
    }
  },
  firebase: {
    settlements: settlements
  },
  methods: {
    closeModal() {
      this.$router.go(-1);
    },
    addPlayer() {
      if ( this.player.fullName.length > 1 && this.player.settlement.length > 1 ) {
        players.push({name: this.player.fullName, settlement: this.player.settlement})
        .then(response => {
          console.log(response);
          this.notification.success = true;
          this.notification.error = false;

          for (let key in this.player) {
            this.player[key] = "";
            
          }
          this.player.settlement = "Karwia";

          setTimeout(() => {
            this.notification.success = false;
          },2500)
        })
        .catch(error => {
          console.log(error);
          this.notification.error = true;
        })
      } else {
        this.notification.error = true;
      }
    },
    onFileSelected(event) {
      console.log(event)
      this.player.img = event.target.files[0].name;
    },
    closeError() {
      this.notification.error = false;
    },
    closeSucess() {
      this.notification.success = false;
    }
  }
}

</script>
