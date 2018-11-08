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
          <input type="text" v-model="$v.user.email.$model" :class="{'is-danger': $v.user.email.$error }" class="input"  id="email" placeholder="example@example.pl" >
        </div>
        <transition name="fade-left">
          <p class="help is-danger" v-if="!$v.user.email.email">Błędny adres email.</p>
        </transition>
      </div>
      <div class="field">
        <label class="label" for="password">Hasło</label>
        <div class="control">
          <input type="password" v-model="$v.user.password.$model" class="input" :class="{'is-danger': $v.user.password.$error}" id="password" placeholder="Silne hasło">
        </div>
        <transition name="fade-left">
          <p class="help is-danger" v-if="!$v.user.password.minLength">Hasło powinno mieć min 8 znaków.</p>
        </transition>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-danger sign-in-button" type="submit">Zaloguj się</button>
        </div>
      </div>
      <div class="field field-error has-text-centered" v-if="error">
        <p class="help is-danger">{{error.message}}</p>
      </div>
    </form>
    <footer class="sign-in-footer">
      Copyright Gmina Władysławowo 2018 <br/>
      Wykonanie Radek & Kuba
    </footer>
    <PageLoader></PageLoader>
  </main>
</template>

<script>

import { email, minLength } from 'vuelidate/lib/validators'
import PageLoader from '@/Dashboard/PageLoader.vue'
import * as firebase from 'firebase'

export default {
  name: "singUp",
  components: {
    PageLoader
  },
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    }
  },
  computed: {
    error() {
      return this.$store.getters.signInError;
    }
  },
  validations: {
    user: {
      email: {
        email
      },
      password: {
        minLength: minLength(8),
      }
    }
  },
  methods: {
    submit() {
      if (!this.$v.$invalid) {
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



