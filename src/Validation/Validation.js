import Vue from "vue";
import VeeValidate,  { Validator } from "vee-validate";

Vue.use(VeeValidate);

const dictionary = {
  en: {
    messages: {
      required: error => `Pole ${error} nie może być puste`,
      email: error => `Adres ${error} nie jest poprawny`,
      min: (error, number) => `${error} musi mieć minimum ${number} znaków`
    }
  },
};

Validator.localize(dictionary);