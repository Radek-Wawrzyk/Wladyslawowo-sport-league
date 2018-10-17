<template>
  <carousel class="slider" :per-page="1" :autoplay="true" pagination-active-color="#ff3333"
  :autoplayHoverPause="true" :autoplayTimeout="3400"
  >
    <slide class="slider-item" v-for="news in lastNews" :key="news.id" :style="{'background-image': `url(${news.imageUrl})`}">
      <div class="slider-item-content">
        <h3>{{news.name}}</h3>
        <p>{{news.description}}</p>
      </div>
      <span class="slider-item-date">{{news.date}}</span>
    </slide>
  </carousel>
</template>

<script>

  export default {
    name: "Slider",
    props: [ "lastNews"]
  }

</script>

<style src="./Slider.scss"  />