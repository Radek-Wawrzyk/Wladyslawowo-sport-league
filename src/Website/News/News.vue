<template>
  <main class="website-main">
    <div class="website-container">
      <header class="website-header">
        <h1 class="title is-3">Wydarzenia</h1>
      </header>
      <section class="news">
        <ul :key="index" class="news-list" v-for="(news, index) in newsList">
          <li class="news-list-item" >
            <figure class="news-list-item-img" v-if="news.imageUrl">
              <img :src="news.imageUrl" :alt="news.name" />
            </figure>
            <div class="news-list-item-content" :class="{'no-img' : !news.imageUrl}">
              <h2 class="news-list-item-content-title">
                <router-link :to="`news/${news.id}`" :aria-label="news.name" :title="news.name">{{news.name}}</router-link>
              </h2>
              <p class="news-list-item-content-text">{{news.description | reduceTextLonger}}</p>
              <span class="news-list-item-content-date">{{news.date}}</span>
              <router-link class="news-list-item-content-btn button is-danger" :to="`news/${news.id}`" :aria-label="news.name" :title="news.name">Zobacz Imprezę</router-link>
            </div>
          </li>
        </ul>
      </section>
    </div>
    <Footer></Footer>
  </main>
</template>

<script>

  export default {
    name: "News",
    computed: {
      newsList() {
        return this.$store.getters.news;
      }
    }
  }

</script>

<style src="./News.scss" scoped />