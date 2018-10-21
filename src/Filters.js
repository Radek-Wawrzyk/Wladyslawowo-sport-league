import Vue from "vue";

//Max 100 chars
Vue.filter("reduceText", value => {
  if ( value.length >= 100) {
    return value.substring(0, 100) + "...";
  } else {
    return value;
  }
});
