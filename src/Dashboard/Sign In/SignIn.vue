<template>
  <main>
    <form class="form" @submit.prevent="submit">
      <div class="field">
        <label class="label" for="email">Email</label>
        <div class="control">
          <input type="text" v-model="$v.user.email.$model" :class="{'is-danger': $v.user.email.$error }" class="input"  id="email" placeholder="Login" >
        </div>
        <p class="help is-danger" v-if="!$v.user.email.email">Błędy adres email.</p>
      </div>
      <div class="field">
        <label class="label" for="password">Password</label>
        <div class="control">
          <input type="password" v-model="$v.user.password.$model" class="input" :class="{'is-danger': $v.user.password.$error}" id="password" placeholder="Password">
        </div>
        <p class="help is-danger" v-if="!$v.user.password.minLength">Hasło powinno mieć min 8 znaków.</p>
      </div>
      <div class="field">
        <div class="control">
          <button class="button" type="submit">Login</button>
        </div>
      </div>
    </form>
  </main>
</template>

<script>

import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  name: "singUp",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    }
  },
  validations: {
    user: {
      email: {
        email
      },
      password: {
        minLength: minLength(8),
        required
      }
    }
  },
  methods: {
    submit() {
      console.log(`Login is: ${this.email}, password is: ${this.password}`);
      this.$store.dispatch("signIn", this.user);

    }
  }
}

</script>



