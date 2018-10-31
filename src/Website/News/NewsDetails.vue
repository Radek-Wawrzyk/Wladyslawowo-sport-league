<template>
  <main class="website-container">
    <header class="website-header news-header">
      <h1 class="title is-3">{{news.name}}</h1>
    </header>
    <section class="news">
      <figure class="news-img" :style="{'background-image': `url(${news.imageUrl})`}"></figure>
      <div class="news-content">
        <div class="news-content-top">
          <h2 class="title is-5">{{news.name}}</h2>
          <span>Data: {{news.date}}</span>
        </div>
        <p class="news-content-text">{{news.description}}</p>
      </div>
    </section>
  </main>
</template>

<script>

  export default {
    props: ['id'],
    name: "NewsDetails",
    computed: {
      news() {
        return this.$store.getters.briefNewsById(this.id);
      }
    }
  }

</script>

<style lang="scss" src="./NewsDetails.scss" scoped />