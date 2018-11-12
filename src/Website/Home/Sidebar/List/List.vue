<template>
  <div>
    <ul class="list">
      <li class="list-item" v-for="item in items">
        <router-link :to="`${link}/${item.id}`"  href="#" :aria-label="item.name" :title="item.name">
          <div class="list-item-content">
            <p class="ilist-item-content-text">{{item.name}}</p>
            <span class="list-item-content-points">{{item.points}} pkt</span>
          </div>
        </router-link>
      </li>
    </ul>
    <footer class="list-footer">
      <router-link :to="link" aria-label="Więcej statystyk" title="Więcej statystyk">Więcej statystyk</router-link>
    </footer>
  </div>
</template>

<script>

export default {
  name: "List",
  props: ['items', 'link']
}

</script>

<style scoped src="./List.scss" />