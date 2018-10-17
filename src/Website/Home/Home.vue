<template>
  <div>
    <main class="website-container">
      <div class="home">
        <Slider :lastNews="lastNews"></Slider>
        <Sidebar :players="players"></Sidebar>
      </div>
    </main>
  </div>

</template>
<style lang="scss" src="./Home.scss" scoped></style>
<script>

import Sidebar from "./Sidebar/Sidebar"
import Slider from "./Slider/Slider";

export default {
  name: "Home",
  components: {
    Slider,
    Sidebar
  },
  data() {
    return {
      players: [
        {
          id: 1,
          name: "Jan Bednarek",
          points: 25,
          settlement: "Chałpowo",
          img: "https://www.ics.usi.ch/images/IMG_0754-avatar.jpg"
        },
        {
          id: 2,
          name: "Maciek z klanu",
          points: 50,
          settlement: "Karwia",
          img: "https://www.ics.usi.ch/images/IMG_0754-avatar.jpg"
        },
        {
          id: 3,
          name: "Bob budowniczy",
          points: 5,
          settlement: "Władysławowo Centrum",
          img: "https://www.ics.usi.ch/images/IMG_0754-avatar.jpg"
        }
      ]
    }
  },
  computed: {
    lastNews() {
      return this.$store.getters.briefNews;
    }
  }
};

</script>