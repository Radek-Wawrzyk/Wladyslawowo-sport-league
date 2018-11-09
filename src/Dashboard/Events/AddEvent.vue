<template>
  <section id="add-event">
    <transition name="fade">
      <div v-show="alertMessage" :class="[ sentProperly ? 'is-success' : 'is-danger' ]" class="notification">
        <button @click="dismissAlert" class="delete"></button>
        {{ alertMessage }}
      </div>
    </transition>
    <div class="event-container">
      <div class="event-column">
        <h2 class="event-column-title title is-5">Dane imprezy</h2>
        <form class="event-form">
          <div class="field">
            <label class="label">Nazwa imprezy</label>
            <div class="control">
              <input class="input" type="text" v-model="event.name" placeholder="Nazwa imprezy">
            </div>
          </div>
          <div class="field">
            <label class="label">Opis imprezy</label>
            <div class="control">
              <textarea class="textarea" v-model="event.description" placeholder="Opis wydarzenia"></textarea>
            </div>
          </div>
          <div class="field">
            <label class="label">Data imprezy</label>
            <div class="control">
              <input class="input" type="date" v-model="event.date" >
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
                <span class="file-name" v-for="imgName in imgNames" :key="imgName">
                {{imgName}}
                </span>
              </label>
            </div>
          </div>
        </form>
      </div>
      <div class="event-column">
        <h2 class="event-column-title title is-5">Zawodnicy</h2>
        <div class="table-responsive">
          <table class="table is-bordered is-fullwidth">
            <thead class="panel-head">
              <tr>
                <th>LP</th>
                <th>Zawodnik</th>
                <th>Punkty</th>
                <th>Edycja</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>0</th>
                <th>
                  <div class="control">
                    <div class="select">
                      <select v-model="currentPlayer.name">
                        <option value="" disabled selected>Wybierz zawodnika</option>
                        <option v-for="player in players" :key="player.id">{{player.name}}</option>
                      </select>
                    </div>
                  </div>
                </th>
                <th>
                  <div class="control">
                    <div class="control">
                      <input class="input" type="number" placeholder="Punkty" v-model="currentPlayer.points">
                    </div>
                  </div>
                </th>
                <th>
                  <div class="buttons">
                    <button class="button is-success is-5" @click="addPlayer">Dodaj</button>
                  </div>
                </th>
              </tr>
              <tr v-for="(player, index) in event.players" :key="index">
                <th>{{index + 1}}</th>
                <th>{{player.name}}</th>
                <th>{{player.points}} pkt</th>
                <th>
                  <div class="buttons">
                    <button class="button is-danger is-5" @click="deletePlayer(index)">Usuń</button>
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="buttons event-submit">
      <button class="button is-danger" @click="handleSubmit">{{ buttonText }}</button>
      <button class="button" @click="goBack">Anuluj</button>
    </div>
  </section>
</template>

<script>

import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: "AddEvent",
  props: ['update', 'id'],
  data() {
    return {
      event: {
        name: '',
        description: '',
        date: '',
        players: [],
        images: []
      },
      currentPlayer: {
        name: '',
        points: ''
      },
      imgNames: [],

      buttonText: null,
      alertMessage: null,
      sentProperly: false,
      alertTimeoutId: null
    }
  },
  computed: {
    players() {
      return this.$store.getters.players;
    }
  },
  methods: {
    addEvent() {
      clearTimeout(this.alertTimeoutId)

      if (this.event.name && this.event.description && this.event.date) {
        this.$store.dispatch('addEvent', this.event);
        for (let key in this.settlement) {
          this.settlement[key] = '';
        }
        this.sentProperly = true;
        this.alertMessage = "Pomyślnie dodano nową imprezę"
      } else {
        this.sentProperly = false;
        this.alertMessage = "Wypełnij pola";
      }

      this.alertTimeoutId = setTimeout(() => {
        this.alertMessage = undefined;          
      }, 3000);    },
    updateEvent()
    {
      this.$store.dispatch('updateEvent',this.event);
      this.goBack();
    },
    handleSubmit()
    {
      if(this.update === true)
        this.updateEvent();
      else
        this.addEvent();
    },
    addPlayer() {
      const player = {
        name: this.currentPlayer.name,
        points: this.currentPlayer.points
      };

      if(this.event.players === undefined)
        this.event.players = [];

      this.event.players.push(player);
    },
    deletePlayer(index) {
      this.event.players.splice(index, 1);
    },
    goBack() {
      this.$store.dispatch('closeModal');
    },
    dismissAlert()
    {
      this.alertMessage = null;
    },
    onFileSelected()
    {
      this.imgNames.push(event.target.files[0].name);
      this.event.images.push(event.target.files[0]);
    }
  },
  mounted()
  {
    if(this.update === true)
    {
      this.buttonText = "Edytuj imprezę";
      var event = this.$store.getters.event(this.$route.params.id);
      this.event = event;
    }
    else
    {
      this.buttonText = "Dodaj imprezę";
      this.player = {};
    }
  }
}

</script>

<style src="./AddEvent.scss" scoped />