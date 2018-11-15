<template>
  <form class="contact-form">
    <h2 class="contact-form-title">Formularz</h2>
    <div class="field">
      <div class="control">
        <input class="input" :class="{'is-danger': errors.has('imię')}" v-validate="'required'" data-vv-delay="250" v-model="credential.name" name="imię" type="text" placeholder="Imię" aria-label="Imię">
      </div>
      <transition name="fade-left">
        <p class="help is-danger" v-if="errors.has('imię')">{{errors.first('imię')}}</p>
      </transition>
    </div>
    <div class="field">
      <div class="control">
        <input class="input" :class="{'is-danger': errors.has('email')}" v-validate="'required|email'" data-vv-delay="250" v-model="credential.email" name="email" type="text" placeholder="Email" aria-label="Email">
      </div>
      <transition name="fade-left">
        <p class="help is-danger" v-if="errors.has('email')">{{errors.first('email')}}</p>
      </transition>
    </div>
    <div class="field">
      <div class="control">
        <input class="input" :class="{'is-danger': errors.has('temat')}" v-validate="'required'" data-vv-delay="250"  v-model="credential.subject" name="temat" type="text" placeholder="Temat" aria-label="Temat">
      </div>
      <transition name="fade-left">
        <p class="help is-danger" v-if="errors.has('temat')">{{errors.first('temat')}}</p>
      </transition>
    </div>
    <div class="field">
      <div class="control">
        <textarea class="textarea" :class="{'is-danger': errors.has('wiadomość')}" v-validate="'required'" data-vv-delay="250"  v-model="credential.message" name="wiadomość" placeholder="Wiadomość" aria-label="Wiadomość"></textarea>
      </div>
      <transition name="fade-left">
        <p class="help is-danger" v-if="errors.has('wiadomość')">{{errors.first('wiadomość')}}</p>
      </transition>
    </div>
    <div class="field">
      <button class="button is-danger contact-button" aria-label="Wyślij" @click.prevent="submit">Wyślij</button>
    </div>
  </form>
</template>

<script>

  import axios from 'axios'

  export default {
    name: "ContactForm",
    data: () => ({
      credential: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    }),
    methods: {
      async submit() {
        const valid = await this.$validator.validateAll();

        if (valid) {
          let data = new FormData();

          data.append('name',this.credential.name);
          data.append('email',this.credential.email);
          data.append('subject',this.credential.subject);
          data.append('message',this.credential.message);

          try {
            await axios.post('url', data);
          } catch (error) {
            console.log(error);
          }

          //Reset fields
          for (let key in this.credential) {
            this.credential[key] = null;
          }

          this.$validator.reset();
        }
      }
    }
  };

</script>

<style src="./ContactForm.scss" lang="scss" scoped />