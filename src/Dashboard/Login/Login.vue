<template>
  <main>
    <form class="form" @submit.prevent="submit">
      <div class="field">
        <label class="label" for="login">Login</label>
        <div class="control">
          <input type="text" v-model="login" class="input" id="login" placeholder="Login" >
        </div>
      </div>
      <div class="field">
        <label class="label" for="password">Password</label>
        <div class="control">
          <input type="password" v-model="password" class="input" id="password" placeholder="Password">
        </div>
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

export default {
  name: "login",
  data() {
    return {
      login: "",
      password: ""
    }
  },
  methods: {
    submit() {
      console.log(`Login is: ${this.login}, password is: ${this.password}`);
    }
  }
}

</script>



