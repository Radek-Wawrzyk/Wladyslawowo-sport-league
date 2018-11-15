<template>
  <main id="sign-in">
    <header class="sign-in-header has-text-centered">
      <figure class="sing-in-img">
        <img src="./logo.png" alt="Liga sportowa gminy Władysławowo" />
      </figure>
    </header>
    <form class="form" @submit.prevent="submit">
      <div class="field">
        <label class="label" for="email">Email</label>
        <div class="control">
          <input type="text" v-model="user.email" name="email" v-validate="'required|email'" data-vv-delay="250" :class="{'is-danger': errors.has('email')}" class="input"  id="email" placeholder="example@example.pl" >
        </div>
        <transition name="fade-left">
          <p class="help is-danger" v-if="errors.has('email')">{{errors.first('email')}}</p>
        </transition>
      </div>
      <div class="field">
        <label class="label" for="password">Hasło</label>
        <div class="control">
          <input type="password" v-model="user.password" name="hasło" v-validate="'required|min:8'" data-vv-delay="250" class="input" :class="{'is-danger':  errors.has('password')}" id="password" placeholder="Password">
        </div>
        <transition name="fade-left">
          <p class="help is-danger" v-if="errors.has('hasło')">{{errors.first('hasło')}}</p>
        </transition>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-danger sign-in-button" type="submit">Zaloguj się</button>
        </div>
      </div>
      <transition name="fade-left">
        <div class="field field-error has-text-centered" v-if="error">
          <p class="help is-danger">{{error.message}}</p>
        </div>
      </transition>
    </form>
    <footer class="sign-in-footer">
      Copyright Gmina Władysławowo 2018 <br/>
      Wykonanie Radek & Kuba
    </footer>
    <PageLoader></PageLoader>
  </main>
</template>

<script>

import PageLoader from '@/Dashboard/PageLoader.vue'
import * as firebase from 'firebase'

export default {
  name: "singUp",
  components: {
    PageLoader
  },
  data: () => ({
    user: {
      email: "",
      password: ""
    }
  }),
  computed: {
    error() {
      return this.$store.getters.signInError;
    }
  },
  methods: {
    async submit() {
      const valid = await this.$validator.validateAll();
      if (valid) {
        this.$store.dispatch("signIn", this.user);
      }
    }
  },
  created: function() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("autoSignIn", user);
      }
    })
  }
}

</script>

<style lang="scss" src="./SingIn.scss" scoped />



